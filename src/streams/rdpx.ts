import { BatchHandlerContext } from '@subsquid/evm-processor'

import * as rdpxabi from '../abi/arb-rdpx-token'

type Context = BatchHandlerContext<unknown, any>

export function dataRequest() {
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

var totalCoinz: bigint = 0n

function printAtBlock(c: any, msg: string) {
	console.log(`${c.header.height}: ${msg}`)
}

export async function processData(ctx: Context) {
	for (let c of ctx.blocks) {
		for (let i of c.items) {
//			console.log(i)

			if(i.kind==='evmLog') {
				if(i.address!=='0x32eb7902d4134bf98a28b963d26de779af92a212') {
					printAtBlock(c, `got log with an unexpected address`)
					console.log(i)
				}
				else {
					let {from, to, value} = rdpxabi.events.Transfer.decode(i.evmLog)
					if(from==='0x0000000000000000000000000000000000000000') {
						totalCoinz += value.toBigInt()
						printAtBlock(c, `${value} was minted at ${to} as a result of txn:\n${i.transaction.from} -> ${i.transaction.to}\n${i.transaction.input}\nRunning supply ${totalCoinz}\n`)
					}
					else if(to==='0x0000000000000000000000000000000000000000') {
						totalCoinz -= value.toBigInt()
						printAtBlock(c, `${value} was burned at ${from} as a result of txn:\n${i.transaction.from} -> ${i.transaction.to}\n${i.transaction.input}\nRunning supply ${totalCoinz}\n`)
					}
				}
			}
		}
	}
}
