import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EvmBatchProcessor } from '@subsquid/evm-processor'
//import * as perc20abi from './abi/perc20'
import * as rdpxabi from './abi/arb-rdpx-token'
import * as proxyabi from './abi/proxy'

const processor = new EvmBatchProcessor()
	.setBlockRange({from: 0})
	.setDataSource({
		// uncomment and set RPC_ENDPOONT to enable contract state queries.
		// Both https and wss endpoints are supported.
		// chain: process.env.RPC_ENDPOINT,
		archive: 'https://arbitrum.archive.subsquid.io',
	})
	.addLog('0x32eb7902d4134bf98a28b963d26de779af92a212', {
//		filter: [[perc20abi.events.Mint.topic]],
		filter: [[]],
		data: {
			evmLog: { id: true, topics: true, data: true },
			transaction: { hash: true }
		} as const
	})
	.addTransaction([
		'0x32eb7902d4134bf98a28b963d26de779af92a212'
	], {
		range: {
			from: 0
		},
		data: {
			transaction: {
				from: true,
				input: true,
				to: true,
				value: true
			}
		}
	});

const eventsReverseMapper = new Map<string, string>()
for(let [k, v] of Object.entries(rdpxabi.events)) {
	eventsReverseMapper.set(v.topic, k)
}
for(let [k, v] of Object.entries(proxyabi.events)) {
	eventsReverseMapper.set(v.topic, k)
}

const callsReverseMapper = new Map<string, string[]>()
for(let [k, v] of Object.entries(rdpxabi.functions)) {
	if(callsReverseMapper.has(k)) {
		callsReverseMapper.get(v.sighash)!.push(k)
	}
	else {
		callsReverseMapper.set(v.sighash, [k])
	}
}
for(let [k, v] of Object.entries(proxyabi.functions)) {
	if(callsReverseMapper.has(k)) {
		callsReverseMapper.get(v.sighash)!.push(k)
	}
	else {
		callsReverseMapper.set(v.sighash, [k])
	}
}

function printAtBlock(c: any, msg: string) {
	console.log(`${c.header.height}: ${msg}`)
}

const exoticTransactions = new Map<string,string[]>([])

const knownEventSourceContracts = new Map<string,string>([
	['0x96b0d9c85415c69f4b2fac6ee9e9ce37717335b4', 'Dopex: DPX/ETH Farm'],
	['0x1b02da8cb0d097eb8d57a175b88c7d8b47997506', 'SushiSwap: Router'],
	['0x03ac1aa1ff470cf376e6b7cd3a3389ad6d922a74', 'Dopex: rDPX-WETH Staking Rewards'],
	['0x6607c5e39a43cce1760288dc33f20ead51b14d7b', 'SSOVRdpx'],
	['0x8d481245801907b45823fb032e6848d0d3c29ae5', 'StakingRewards V2'],
	['0x5288c571fd7ad117bea99bf60fe0846c4e84f933', 'L2GatewayRouter'],
	['0x096760f208390250649e3e8763348e783aef5562', 'Arbitrum One: L2 Custom Gateway'],
	['0xc6d714170fe766691670f12c2b45c1f34405aab6', 'Dopex: Retired DPX Farm'],
	['0xfe351e85eb6b4292088dc28b66e9e92ab62fb663', 'RdpxSSOV'],
	['0x923c88f0aa5998953c01a23cdd1d82852f94aeea', 'Dopex: Staking Rewards Factory'],
	['0x0b9c52febf284c4cfc20c6311e90cca0b198f427', 'DPXStrategy'],
	['0x11111112542d85b3ef69ae05771c2dccff4faa26', 'AggregationRouterV3'],
	['0x692b5a7ecccad243a07535e8c24b0e7433238c6a', 'Disperse'],
	['0x818ced3d446292061913f1f74b2eaee6341a76ec', 'SSOVDpx'],
	['0xe8c97bf6d084880de38aec1a56d97ed9fdfa0c9b', 'unknown contract'],
	['0xbb741dc1a519995eac67ec1f2bfeecbe5c02f46e', 'DpxSSOVV2'],
	['0x1111111254fb6c44bac0bed2854e76f90643097d', 'AggregationRouterV4'],
	['0x226cb17a52709034e2ec6abe0d2f0a9ebcec1059', 'WardenSwap: V1.5 Router'],
	['0x125cc7cce81a809c825c945e5aa874e60cccb6bb', 'Dopex: rDPX Staking Rewards V2'],
	['0x11320e3f169fba9ec30c030d060ec9b4e14060ad', 'unknown contract']
])

processor.run(new TypeormDatabase(), async (ctx) => {
	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if(i.kind==='evmLog') {
				if(i.address!=='0x32eb7902d4134bf98a28b963d26de779af92a212') {
					printAtBlock(c, `got log with an unexpected address`)
					console.log(i)
				}	else {
					let thelog = i.evmLog!
					if(eventsReverseMapper.has(thelog.topics[0])) {
						let eventName = eventsReverseMapper.get(thelog.topics[0])
						printAtBlock(c, `caught "${eventName}"`)
					}
				}
			}
			else if(i.kind==='transaction') {
				if(i.transaction.to==='0x32eb7902d4134bf98a28b963d26de779af92a212') {
					if(i.transaction.value!==0n) {
						printAtBlock(c, `got transaction with nonzero value`)
						console.log(i)
					}
					else {
						let sighash = i.transaction.input.substring(0, 10)
						if(callsReverseMapper.has(sighash)) {
							printAtBlock(c, `got "${callsReverseMapper.get(sighash)}" transaction`)
						}
						else if(exoticTransactions.has(sighash)) {
							printAtBlock(c, `got an exotic ${exoticTransactions.get(sighash)} transaction`)
						}
						else {
							printAtBlock(c, `got a transaction with unknown sighash ${sighash}`)
							console.log(i)
						}
					}
				}
				else if(i.transaction.to && knownEventSourceContracts.has(i.transaction.to)) {
					printAtBlock(c, `previous event was caused by a call to ${knownEventSourceContracts.get(i.transaction.to)}/${i.transaction.to}`)
				}
				else {
					printAtBlock(c, `got transaction with unexpected destination`)
					console.log(i)
				}
			}
			else {
				console.error('PANIC')
			}
		}
	}

});
