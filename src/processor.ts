import { EvmBatchProcessor } from '@subsquid/evm-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'

import { streamConfigs } from './streams'

function streamsProcessor() {
	if(process.env.ARCHIVE===undefined || process.env.ARCHIVE==='') {
		throw new Error('ARCHIVE variable must be defined in .env')
	}

	let minBlockRequirements = streamConfigs.map(sc => sc.dataRequest().blocksFrom || 0)
	let minIndexedBlock = Math.min(...minBlockRequirements)

	let willQueryState = !streamConfigs.map(sc => sc.dataRequest().willQueryState).every(v => !v)

	let proc = new EvmBatchProcessor()
	proc.setBlockRange({from: minIndexedBlock})
	proc.setDataSource({
		archive: process.env.ARCHIVE,
		...willQueryState && {chain: process.env.RPC_ENDPOINT}
	})

	for(let sc of streamConfigs) {
		for(let sclog of sc.dataRequest().logs) {
			proc.addLog(sclog.conract, sclog.options)
		}
		for(let sctxn of sc.dataRequest().transactions) {
			proc.addTransaction(sctxn.contract, sctxn.options)
		}
	}

	return proc
}

const processor = streamsProcessor()

processor.run(new TypeormDatabase(), async (ctx) => {
	for(let sc of streamConfigs) {
		await sc.processData(ctx)
	}
});
