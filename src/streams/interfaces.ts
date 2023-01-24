import { EvmTopicSet, BatchHandlerContext } from '@subsquid/evm-processor'

export type Context = BatchHandlerContext<any, any>

export interface LogsRequest {
	contract: string | string[],
	options: {
		filter?: EvmTopicSet,
		data: {
			evmLog: object,
			transaction: object
		}
	}
}

export interface TransactionsRequest {
	contract: string | string[],
	options: {
		sighash: string[],
		data: {
			transaction: object
		}
	}
}

export interface DataRequest {
	blocksFrom?: number,
	willQueryState?: boolean,
	logs: LogsRequest[],
	transactions: TransactionsRequest[]
}

export interface StreamDefinition {
	dataRequest: () => DataRequest,
	processData: (ctx: Context) => Promise<void>
}
