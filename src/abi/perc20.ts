import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './perc20.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AccrueInterest: new LogEvent<([cashPrior: ethers.BigNumber, interestAccumulated: ethers.BigNumber, borrowIndex: ethers.BigNumber, totalBorrows: ethers.BigNumber, totalReserves: ethers.BigNumber] & {cashPrior: ethers.BigNumber, interestAccumulated: ethers.BigNumber, borrowIndex: ethers.BigNumber, totalBorrows: ethers.BigNumber, totalReserves: ethers.BigNumber})>(
        abi, '0x717fee053884ab1935ba6d0140f6ed225371439611d9674ff445419d6a0fa1b7'
    ),
    Approval: new LogEvent<([owner: string, spender: string, amount: ethers.BigNumber] & {owner: string, spender: string, amount: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    Borrow: new LogEvent<([borrower: string, borrowAmount: ethers.BigNumber, accountBorrows: ethers.BigNumber, totalBorrows: ethers.BigNumber, interestBalancePrior: ethers.BigNumber] & {borrower: string, borrowAmount: ethers.BigNumber, accountBorrows: ethers.BigNumber, totalBorrows: ethers.BigNumber, interestBalancePrior: ethers.BigNumber})>(
        abi, '0x2dd79f4fccfd18c360ce7f9132f3621bf05eee18f995224badb32d17f172df73'
    ),
    Failure: new LogEvent<([error: ethers.BigNumber, info: ethers.BigNumber, detail: ethers.BigNumber] & {error: ethers.BigNumber, info: ethers.BigNumber, detail: ethers.BigNumber})>(
        abi, '0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0'
    ),
    LiquidateBorrow: new LogEvent<([liquidator: string, borrower: string, repayAmount: ethers.BigNumber, pTokenCollateral: string, seizeTokens: ethers.BigNumber] & {liquidator: string, borrower: string, repayAmount: ethers.BigNumber, pTokenCollateral: string, seizeTokens: ethers.BigNumber})>(
        abi, '0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52'
    ),
    Mint: new LogEvent<([minter: string, mintAmount: ethers.BigNumber, mintTokens: ethers.BigNumber, totalSupply: ethers.BigNumber, accountTokens: ethers.BigNumber] & {minter: string, mintAmount: ethers.BigNumber, mintTokens: ethers.BigNumber, totalSupply: ethers.BigNumber, accountTokens: ethers.BigNumber})>(
        abi, '0x94c792774c59479f7bd68442f3af3691c02123a5aabee8b6f9116d8af8aa6669'
    ),
    NewComptroller: new LogEvent<([oldComptroller: string, newComptroller: string] & {oldComptroller: string, newComptroller: string})>(
        abi, '0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d'
    ),
    NewMarketInterestRateModel: new LogEvent<([oldInterestRateModel: string, newInterestRateModel: string] & {oldInterestRateModel: string, newInterestRateModel: string})>(
        abi, '0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926'
    ),
    NewMigrator: new LogEvent<([oldMigrator: string, newMigrator: string] & {oldMigrator: string, newMigrator: string})>(
        abi, '0x99b2b7456799067566d467831e63363500739eac62c12ccb8cf9745078f06d2a'
    ),
    NewMinInterestAccumulated: new LogEvent<([oldMinInterestAccumulated: ethers.BigNumber, newMinInterestAccumulated: ethers.BigNumber] & {oldMinInterestAccumulated: ethers.BigNumber, newMinInterestAccumulated: ethers.BigNumber})>(
        abi, '0x0fef09b67597ccf3dbb342dd705d9a10d14b4813c09c55e010cd5f4bf219ddaa'
    ),
    NewReserveFactor: new LogEvent<([oldReserveFactorMantissa: ethers.BigNumber, newReserveFactorMantissa: ethers.BigNumber] & {oldReserveFactorMantissa: ethers.BigNumber, newReserveFactorMantissa: ethers.BigNumber})>(
        abi, '0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Redeem: new LogEvent<([redeemer: string, redeemAmount: ethers.BigNumber, redeemTokens: ethers.BigNumber, totalSupply: ethers.BigNumber, accountTokens: ethers.BigNumber] & {redeemer: string, redeemAmount: ethers.BigNumber, redeemTokens: ethers.BigNumber, totalSupply: ethers.BigNumber, accountTokens: ethers.BigNumber})>(
        abi, '0xe02f6383e19e87c24e0c03e2cd5dbd05156cb29a1b0f3dbca1fa3430e444f63d'
    ),
    RepayBorrow: new LogEvent<([payer: string, borrower: string, repayAmount: ethers.BigNumber, accountBorrows: ethers.BigNumber, totalBorrows: ethers.BigNumber, interestBalancePrior: ethers.BigNumber] & {payer: string, borrower: string, repayAmount: ethers.BigNumber, accountBorrows: ethers.BigNumber, totalBorrows: ethers.BigNumber, interestBalancePrior: ethers.BigNumber})>(
        abi, '0x6fadbf7329d21f278e724fa0d4511001a158f2a97ee35c5bc4cf8b64417399ef'
    ),
    ReservesAdded: new LogEvent<([benefactor: string, addAmount: ethers.BigNumber, newTotalReserves: ethers.BigNumber] & {benefactor: string, addAmount: ethers.BigNumber, newTotalReserves: ethers.BigNumber})>(
        abi, '0xa91e67c5ea634cd43a12c5a482724b03de01e85ca68702a53d0c2f45cb7c1dc5'
    ),
    ReservesReduced: new LogEvent<([admin: string, reduceAmount: ethers.BigNumber, newTotalReserves: ethers.BigNumber] & {admin: string, reduceAmount: ethers.BigNumber, newTotalReserves: ethers.BigNumber})>(
        abi, '0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e'
    ),
    Transfer: new LogEvent<([from: string, to: string, amount: ethers.BigNumber] & {from: string, to: string, amount: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    _addReserves: new Func<[addAmount: ethers.BigNumber], {addAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x3e941010'
    ),
    _reduceReserves: new Func<[reduceAmount: ethers.BigNumber], {reduceAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x601a0bf1'
    ),
    _setComptroller: new Func<[newComptroller: string], {newComptroller: string}, ethers.BigNumber>(
        abi, '0x4576b5db'
    ),
    _setFlashloan: new Func<[_flashloan: string], {_flashloan: string}, []>(
        abi, '0x37050117'
    ),
    _setInterestRateModel: new Func<[newInterestRateModel: string], {newInterestRateModel: string}, ethers.BigNumber>(
        abi, '0xf2b3abbd'
    ),
    _setMigrator: new Func<[newMigrator: string], {newMigrator: string}, ethers.BigNumber>(
        abi, '0x47dfe70d'
    ),
    _setMinInterestAccumulated: new Func<[_minInterestAccumulated: ethers.BigNumber], {_minInterestAccumulated: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xfe17b28f'
    ),
    _setReserveFactor: new Func<[newReserveFactorMantissa: ethers.BigNumber], {newReserveFactorMantissa: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xfca7820b'
    ),
    accrualBlockNumber: new Func<[], {}, ethers.BigNumber>(
        abi, '0x6c540baf'
    ),
    accrueInterest: new Func<[], {}, ethers.BigNumber>(
        abi, '0xa6afed95'
    ),
    accrueInterestSnapshot: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0xc23d91bd'
    ),
    allowance: new Func<[owner: string, spender: string], {owner: string, spender: string}, ethers.BigNumber>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[spender: string, amount: ethers.BigNumber], {spender: string, amount: ethers.BigNumber}, boolean>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    balanceOfUnderlying: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x3af9e669'
    ),
    borrow: new Func<[borrowAmount: ethers.BigNumber], {borrowAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xc5ebeaec'
    ),
    borrowBalanceCurrent: new Func<[account: string], {account: string}, ethers.BigNumber>(
        abi, '0x17bfdfbc'
    ),
    borrowBalanceStored: new Func<[account: string], {account: string}, ethers.BigNumber>(
        abi, '0x95dd9193'
    ),
    borrowIndex: new Func<[], {}, ethers.BigNumber>(
        abi, '0xaa5af0fd'
    ),
    borrowRatePerBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf8f9da28'
    ),
    comptroller: new Func<[], {}, string>(
        abi, '0x5fe3b567'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    exchangeRateCurrent: new Func<[], {}, ethers.BigNumber>(
        abi, '0xbd6d894d'
    ),
    exchangeRateStored: new Func<[], {}, ethers.BigNumber>(
        abi, '0x182df0f5'
    ),
    flashloan: new Func<[_receiver: string, _amount: ethers.BigNumber, _params: string], {_receiver: string, _amount: ethers.BigNumber, _params: string}, []>(
        abi, '0x0c5c9fa8'
    ),
    flashloanInstance: new Func<[], {}, string>(
        abi, '0xf71e6e92'
    ),
    getAccountSnapshot: new Func<[account: string], {account: string}, [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber, ethers.BigNumber]>(
        abi, '0xc37f68e2'
    ),
    getCash: new Func<[], {}, ethers.BigNumber>(
        abi, '0x3b1d21a2'
    ),
    init: new Func<[comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: ethers.BigNumber, name_: string, symbol_: string, decimals_: number], {comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: ethers.BigNumber, name_: string, symbol_: string, decimals_: number}, []>(
        abi, '0x94d6c574'
    ),
    initialize: new Func<[underlying_: string, comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: ethers.BigNumber, name_: string, symbol_: string, decimals_: number], {underlying_: string, comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: ethers.BigNumber, name_: string, symbol_: string, decimals_: number}, []>(
        abi, '0x1a31d465'
    ),
    interestRateModel: new Func<[], {}, string>(
        abi, '0xf3fdb15a'
    ),
    isPToken: new Func<[], {}, boolean>(
        abi, '0x5a890c0e'
    ),
    liquidateBorrow: new Func<[borrower: string, repayAmount: ethers.BigNumber, cTokenCollateral: string], {borrower: string, repayAmount: ethers.BigNumber, cTokenCollateral: string}, ethers.BigNumber>(
        abi, '0xf5e3c462'
    ),
    migrator: new Func<[], {}, string>(
        abi, '0x7cd07e47'
    ),
    minInterestAccumulated: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe228bb43'
    ),
    mint: new Func<[mintAmount: ethers.BigNumber], {mintAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xa0712d68'
    ),
    mintForMigrate: new Func<[mintAmount: ethers.BigNumber, mintTokens: ethers.BigNumber], {mintAmount: ethers.BigNumber, mintTokens: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x791d8915'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    redeem: new Func<[redeemTokens: ethers.BigNumber], {redeemTokens: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xdb006a75'
    ),
    redeemUnderlying: new Func<[redeemAmount: ethers.BigNumber], {redeemAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x852a12e3'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    repayBorrow: new Func<[repayAmount: ethers.BigNumber], {repayAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x0e752702'
    ),
    repayBorrowBehalf: new Func<[borrower: string, repayAmount: ethers.BigNumber], {borrower: string, repayAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2608f818'
    ),
    reserveFactorMantissa: new Func<[], {}, ethers.BigNumber>(
        abi, '0x173b9904'
    ),
    seize: new Func<[liquidator: string, borrower: string, seizeTokens: ethers.BigNumber], {liquidator: string, borrower: string, seizeTokens: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xb2a02ff1'
    ),
    supplyRatePerBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0xae9d70b0'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalBorrows: new Func<[], {}, ethers.BigNumber>(
        abi, '0x47bd3718'
    ),
    totalBorrowsCurrent: new Func<[], {}, ethers.BigNumber>(
        abi, '0x73acee98'
    ),
    totalReserves: new Func<[], {}, ethers.BigNumber>(
        abi, '0x8f840ddd'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[dst: string, amount: ethers.BigNumber], {dst: string, amount: ethers.BigNumber}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[src: string, dst: string, amount: ethers.BigNumber], {src: string, dst: string, amount: ethers.BigNumber}, boolean>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    underlying: new Func<[], {}, string>(
        abi, '0x6f307dc3'
    ),
}

export class Contract extends ContractBase {

    accrualBlockNumber(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.accrualBlockNumber, [])
    }

    accrueInterestSnapshot(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.accrueInterestSnapshot, [])
    }

    allowance(owner: string, spender: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.allowance, [owner, spender])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    borrowBalanceStored(account: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.borrowBalanceStored, [account])
    }

    borrowIndex(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.borrowIndex, [])
    }

    borrowRatePerBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.borrowRatePerBlock, [])
    }

    comptroller(): Promise<string> {
        return this.eth_call(functions.comptroller, [])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    exchangeRateStored(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.exchangeRateStored, [])
    }

    flashloanInstance(): Promise<string> {
        return this.eth_call(functions.flashloanInstance, [])
    }

    getAccountSnapshot(account: string): Promise<[ethers.BigNumber, ethers.BigNumber, ethers.BigNumber, ethers.BigNumber]> {
        return this.eth_call(functions.getAccountSnapshot, [account])
    }

    getCash(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getCash, [])
    }

    interestRateModel(): Promise<string> {
        return this.eth_call(functions.interestRateModel, [])
    }

    isPToken(): Promise<boolean> {
        return this.eth_call(functions.isPToken, [])
    }

    migrator(): Promise<string> {
        return this.eth_call(functions.migrator, [])
    }

    minInterestAccumulated(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.minInterestAccumulated, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    reserveFactorMantissa(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.reserveFactorMantissa, [])
    }

    supplyRatePerBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.supplyRatePerBlock, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalBorrows(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalBorrows, [])
    }

    totalReserves(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalReserves, [])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }

    underlying(): Promise<string> {
        return this.eth_call(functions.underlying, [])
    }
}
