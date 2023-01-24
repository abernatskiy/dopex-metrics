import { FullTypeormDatabase } from '@subsquid/typeorm-store'
import { DataRequest, Context } from './interfaces'
import { RdpxTokenSupplyEvent } from '../model'

import * as rdpxabi from '../abi/arb-rdpx-token'

export function dataRequest(): DataRequest {
	let rdpxTransferLogs = {
		contract: '0x32eb7902d4134bf98a28b963d26de779af92a212',
		options: {
			filter: [[rdpxabi.events.Transfer.topic]],
			data: {
				evmLog: { id: true, topics: true, data: true },
				transaction: { hash: true, from: true, to: true, input: true }
			} as const
		}
	}

	return {
		blocksFrom: 1950162, // the deployment transaction of 0x32eb7902d4134bf98a28b963d26de779af92a212
		willQueryState: true,
		logs: [ rdpxTransferLogs ],
		transactions: []
	}
}

export async function processData(ctx: Context): Promise<void> {
	let res = await ctx.store.query(
		`select index, supply_when_finished ` +
		`from rdpx_token_supply_event ` +
		`where block<${ctx.blocks[0].header.height} ` +
		`order by index desc ` +
		`limit 1;`
	)

	let index: number = res.length>0 ? Number(res[0].index) : 0
	let totalCoinz: bigint = res.length>0 ? BigInt(res[0].supply_when_finished) : 0n
	let supplyEvents: RdpxTokenSupplyEvent[] = []

	console.log(`by the beginning of block ${ctx.blocks[0].header.height} there were ${index} supply events totaling ${totalCoinz}/10^18 rDPX`)

	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if(i.kind==='evmLog') {
				if(i.address==='0x32eb7902d4134bf98a28b963d26de779af92a212' &&
				   i.evmLog.topics[0]===rdpxabi.events.Transfer.topic) {
					let {from, to, value} = rdpxabi.events.Transfer.decode(i.evmLog)

					let supply: bigint | undefined
					let address: string | undefined
					if(from==='0x0000000000000000000000000000000000000000') {
						supply = value.toBigInt()
						address = to
					}
					else if(to==='0x0000000000000000000000000000000000000000') {
						supply = -value.toBigInt()
						address = from
					}

					if(supply) {
						totalCoinz += supply
						supplyEvents.push(new RdpxTokenSupplyEvent({
							id: i.evmLog.id,
							index: index,
							block: BigInt(c.header.height),
							timestamp: BigInt(c.header.timestamp),
							address: address,
							supplyAmount: supply,
							supplyWhenFinished: totalCoinz,
							rootTxnHash: i.transaction.hash,
							rootTxnFrom: i.transaction.from,
							rootTxnTo: i.transaction.to,
							rootTxnInput: i.transaction.input
						}))
						index += 1
					}
				}
			}
		}
	}

	await ctx.store.save(supplyEvents)
}
