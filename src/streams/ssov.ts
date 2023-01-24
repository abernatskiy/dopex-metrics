import { DataRequest, Context } from './interfaces'
import { SsovOptionPurchaseEvent } from '../model'

import * as ssovabi from '../abi/ssov'

interface SsovContractDescription { baseAsset: string, side: 'call' | 'put', periodicity: 'weekly' | 'monthly' }

// https://docs.dopex.io/contracts/arbitrum#ssov-v3
// eth quarterly puts are missing
const ssovContractsKVPairs: [string, SsovContractDescription][] = [
	['0x05E7ACeD3b7727f9129E6d302B488cd8a1e0C817', { baseAsset: 'DPX',   side: 'call', periodicity: 'monthly' }],
	['0xd74c61ca8917Be73377D74A007E6f002c25Efb4e', { baseAsset: 'rDPX',  side: 'call', periodicity: 'monthly' }],
	['0xC59836FEC63Cfb2E48b0aa00515056436D74Dc03', { baseAsset: 'ETH',   side: 'call', periodicity: 'monthly' }],
	['0x10FD85ec522C245a63239b9FC64434F58520bd1f', { baseAsset: 'DPX',   side: 'call', periodicity: 'weekly'  }],
	['0xCdaACF37726Bf1017821b5169e22EB34734B28A8', { baseAsset: 'rDPX',  side: 'call', periodicity: 'weekly'  }],
	['0x9Cc9BeffE64868CB4B97890A19219449890E6eA0', { baseAsset: 'ETH',   side: 'call', periodicity: 'weekly'  }],
	['0x546cd36F761f1D984eEE1Dbe67cC4F86E75cAF0C', { baseAsset: 'GOHM',  side: 'call', periodicity: 'weekly'  }],
	['0xf71b2B6fE3c1d94863e751d6B455f750E714163C', { baseAsset: 'DPX',   side: 'put',  periodicity: 'weekly'  }],
	['0xb4ec6B4eC9e42A42B0b8cdD3D6df8867546Cf11d', { baseAsset: 'rDPX',  side: 'put',  periodicity: 'weekly'  }],
	['0xa7507c48d78345475b85bc27B9CE9B84b354CaF7', { baseAsset: 'BTC',   side: 'put',  periodicity: 'weekly'  }],
	['0x32449DF9c617C59f576dfC461D03f261F617aD5a', { baseAsset: 'ETH',   side: 'put',  periodicity: 'weekly'  }],
	['0x4269AF9076586230bF5fa3655144a5fe9CB877Fd', { baseAsset: 'GOHM',  side: 'put',  periodicity: 'weekly'  }],
	['0xf071F0c56543A2671a2Dfc5FF51d5d858Be91514', { baseAsset: 'GMX',   side: 'put',  periodicity: 'weekly'  }],
	['0x7C5aC7E4E352B733CF65721d9Fe28A17Da890159', { baseAsset: 'CRV',   side: 'put',  periodicity: 'weekly'  }],
	['0xFca61E79F38a7a82c62f469f55A9df54CB8dF678', { baseAsset: 'stETH', side: 'call', periodicity: 'weekly'  }],
]

const ssovContracts: Map<string, SsovContractDescription> = new Map(ssovContractsKVPairs.map(p => [p[0].toLowerCase(), p[1]]))

export function dataRequest(): DataRequest {
	return {
		blocksFrom: 0,
		willQueryState: false,
		logs: [{
			contract: [...ssovContracts.keys()],
			options: {
				filter: [[ssovabi.events.Purchase.topic]],
				data: {
					evmLog: { id: true, topics: true, data: true },
					transaction: { hash: true }
				}
			}
		}],
		transactions: []
	}
}

export async function processData(ctx: Context): Promise<void> {
	let optionPurchaseEvents: SsovOptionPurchaseEvent[] = []

	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if(i.kind==='evmLog') {
				if(ssovContracts.has(i.address) && i.evmLog.topics[0]===ssovabi.events.Purchase.topic) {
					let {epoch, strike, amount, premium, fee, to, sender} = ssovabi.events.Purchase.decode(i.evmLog)
					let contractDesc: SsovContractDescription = ssovContracts.get(i.address)!

					optionPurchaseEvents.push(new SsovOptionPurchaseEvent({
						id: i.evmLog.id,
						block: BigInt(c.header.height),
						timestamp: BigInt(c.header.timestamp),
						baseAsset: contractDesc.baseAsset,
						side: contractDesc.side,
						periodicity: contractDesc.periodicity,
						epoch: epoch.toBigInt(),
						strike: strike.toBigInt(),
						amount: amount.toBigInt(),
						premium: premium.toBigInt(),
						fee: fee.toBigInt(),
						to: to,
						sender: sender
					}))
				}
			}
		}
	}

	console.log(`detected ${optionPurchaseEvents.length} option purchases in the batch`)

	await ctx.store.save(optionPurchaseEvents)
}
