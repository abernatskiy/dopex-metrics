import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ssov.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AddToContractWhitelist: new LogEvent<([_contract: string] & {_contract: string})>(
        abi, '0xfbd3cde7ff522a917e485c8ed2a6e87590887ab399f5ac312307903f49854307'
    ),
    AddressesSet: new LogEvent<([addresses: ([feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string] & {feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string})] & {addresses: ([feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string] & {feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string})})>(
        abi, '0x626084554ed3d487b613abf59611e713f22caa8095d0c7b0d16b226ea45c3bc4'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    Bootstrap: new LogEvent<([epoch: ethers.BigNumber, strikes: Array<ethers.BigNumber>] & {epoch: ethers.BigNumber, strikes: Array<ethers.BigNumber>})>(
        abi, '0xa65bbf2074405dcc0df5134b6ae33db0e62584996f2a786d1a30be9d8efcf90d'
    ),
    Deposit: new LogEvent<([tokenId: ethers.BigNumber, to: string, sender: string] & {tokenId: ethers.BigNumber, to: string, sender: string})>(
        abi, '0xa3d2cbcb90e0658235d4ba62aed9a50c231df9bc5bbfb74c95badbc798f38d1a'
    ),
    EmergencyWithdraw: new LogEvent<([sender: string] & {sender: string})>(
        abi, '0x5e7b34819cd91b239220bec92fcfd3c10da2214ba13e4e2b1f6c9cfdbd68a9a2'
    ),
    EpochExpired: new LogEvent<([sender: string, settlementPrice: ethers.BigNumber] & {sender: string, settlementPrice: ethers.BigNumber})>(
        abi, '0xeebcafefe23aabb68b4dab0cabce2ec0228ff1d73f042e91acdd09efd17845b2'
    ),
    ExpireDelayToleranceUpdate: new LogEvent<([expireDelayTolerance: ethers.BigNumber] & {expireDelayTolerance: ethers.BigNumber})>(
        abi, '0x5259439c9ac2029585dd4a349897aa1e8298d26537c3b57453f275126db91918'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    Purchase: new LogEvent<([epoch: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, premium: ethers.BigNumber, fee: ethers.BigNumber, to: string, sender: string] & {epoch: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, premium: ethers.BigNumber, fee: ethers.BigNumber, to: string, sender: string})>(
        abi, '0x96d7fd34a786c8810a555ee775a241bf4b8f243f8e64aaf266ec5398d1199b0c'
    ),
    RemoveFromContractWhitelist: new LogEvent<([_contract: string] & {_contract: string})>(
        abi, '0x8e81447740597754af5db3e176253a36f7981a9549f48ace3f0cb233913f9d85'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    Settle: new LogEvent<([epoch: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, pnl: ethers.BigNumber, fee: ethers.BigNumber, to: string, sender: string] & {epoch: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, pnl: ethers.BigNumber, fee: ethers.BigNumber, to: string, sender: string})>(
        abi, '0x4ab5b5ebf96669ee045b167a5af455fc9ef9757a07606c2145140e9af15c5da3'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
    Withdraw: new LogEvent<([tokenId: ethers.BigNumber, collateralTokenWithdrawn: ethers.BigNumber, rewardTokenWithdrawAmounts: Array<ethers.BigNumber>, to: string, sender: string] & {tokenId: ethers.BigNumber, collateralTokenWithdrawn: ethers.BigNumber, rewardTokenWithdrawAmounts: Array<ethers.BigNumber>, to: string, sender: string})>(
        abi, '0x091323a211bfa86543b51f77a7a67270d25f9bd406aebf4d2382312c90846261'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    MANAGER_ROLE: new Func<[], {}, string>(
        abi, '0xec87621c'
    ),
    addToContractWhitelist: new Func<[_contract: string], {_contract: string}, []>(
        abi, '0xacc3a006'
    ),
    addresses: new Func<[], {}, ([feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string] & {feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string})>(
        abi, '0xda0321cd'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    bootstrap: new Func<[strikes: Array<ethers.BigNumber>, expiry: ethers.BigNumber, expirySymbol: string], {strikes: Array<ethers.BigNumber>, expiry: ethers.BigNumber, expirySymbol: string}, []>(
        abi, '0x751eb65c'
    ),
    burn: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    calculatePnl: new Func<[price: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber], {price: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x27aa38d5'
    ),
    calculatePremium: new Func<[_strike: ethers.BigNumber, _amount: ethers.BigNumber, _expiry: ethers.BigNumber], {_strike: ethers.BigNumber, _amount: ethers.BigNumber, _expiry: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x156f1d74'
    ),
    calculatePurchaseFees: new Func<[strike: ethers.BigNumber, amount: ethers.BigNumber], {strike: ethers.BigNumber, amount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x920023de'
    ),
    calculateSettlementFees: new Func<[pnl: ethers.BigNumber], {pnl: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xc48ce05b'
    ),
    changeAllowanceForStakingStrategy: new Func<[_increase: boolean, _allowance: ethers.BigNumber], {_increase: boolean, _allowance: ethers.BigNumber}, []>(
        abi, '0xd8202b8b'
    ),
    checkpoints: new Func<[ethers.BigNumber, ethers.BigNumber, ethers.BigNumber], {}, ([activeCollateral: ethers.BigNumber, totalCollateral: ethers.BigNumber, accruedPremium: ethers.BigNumber] & {activeCollateral: ethers.BigNumber, totalCollateral: ethers.BigNumber, accruedPremium: ethers.BigNumber})>(
        abi, '0xc3cbb71c'
    ),
    collateralPrecision: new Func<[], {}, ethers.BigNumber>(
        abi, '0x430aea2e'
    ),
    collateralToken: new Func<[], {}, string>(
        abi, '0xb2016bd4'
    ),
    currentEpoch: new Func<[], {}, ethers.BigNumber>(
        abi, '0x76671808'
    ),
    deposit: new Func<[strikeIndex: ethers.BigNumber, amount: ethers.BigNumber, to: string], {strikeIndex: ethers.BigNumber, amount: ethers.BigNumber, to: string}, ethers.BigNumber>(
        abi, '0x8dbdbe6d'
    ),
    emergencyWithdraw: new Func<[tokens: Array<string>, transferNative: boolean], {tokens: Array<string>, transferNative: boolean}, []>(
        abi, '0x7c4b52cb'
    ),
    'expire()': new Func<[], {}, []>(
        abi, '0x79599f96'
    ),
    'expire(uint256,uint256)': new Func<[_settlementPrice: ethers.BigNumber, _settlementCollateralExchangeRate: ethers.BigNumber], {_settlementPrice: ethers.BigNumber, _settlementCollateralExchangeRate: ethers.BigNumber}, []>(
        abi, '0x87d8ee9b'
    ),
    expireDelayTolerance: new Func<[], {}, ethers.BigNumber>(
        abi, '0x61644373'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getCollateralPrice: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf7683bbc'
    ),
    getEpochData: new Func<[epoch: ethers.BigNumber], {epoch: ethers.BigNumber}, ([expired: boolean, startTime: ethers.BigNumber, expiry: ethers.BigNumber, settlementPrice: ethers.BigNumber, totalCollateralBalance: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber, settlementCollateralExchangeRate: ethers.BigNumber, strikes: Array<ethers.BigNumber>, totalRewardsCollected: Array<ethers.BigNumber>, rewardDistributionRatios: Array<ethers.BigNumber>, rewardTokensToDistribute: Array<string>] & {expired: boolean, startTime: ethers.BigNumber, expiry: ethers.BigNumber, settlementPrice: ethers.BigNumber, totalCollateralBalance: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber, settlementCollateralExchangeRate: ethers.BigNumber, strikes: Array<ethers.BigNumber>, totalRewardsCollected: Array<ethers.BigNumber>, rewardDistributionRatios: Array<ethers.BigNumber>, rewardTokensToDistribute: Array<string>})>(
        abi, '0x859e7d32'
    ),
    getEpochStrikeCheckpointsLength: new Func<[epoch: ethers.BigNumber, strike: ethers.BigNumber], {epoch: ethers.BigNumber, strike: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x7cdba760'
    ),
    getEpochStrikeData: new Func<[epoch: ethers.BigNumber, strike: ethers.BigNumber], {epoch: ethers.BigNumber, strike: ethers.BigNumber}, ([strikeToken: string, totalCollateral: ethers.BigNumber, activeCollateral: ethers.BigNumber, totalPremiums: ethers.BigNumber, checkpointPointer: ethers.BigNumber, rewardStoredForPremiums: Array<ethers.BigNumber>, rewardDistributionRatiosForPremiums: Array<ethers.BigNumber>] & {strikeToken: string, totalCollateral: ethers.BigNumber, activeCollateral: ethers.BigNumber, totalPremiums: ethers.BigNumber, checkpointPointer: ethers.BigNumber, rewardStoredForPremiums: Array<ethers.BigNumber>, rewardDistributionRatiosForPremiums: Array<ethers.BigNumber>})>(
        abi, '0x69e3b748'
    ),
    getEpochTimes: new Func<[epoch: ethers.BigNumber], {epoch: ethers.BigNumber}, ([start: ethers.BigNumber, end: ethers.BigNumber] & {start: ethers.BigNumber, end: ethers.BigNumber})>(
        abi, '0x6f56f56f'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getUnderlyingPrice: new Func<[], {}, ethers.BigNumber>(
        abi, '0x468f02d2'
    ),
    getVolatility: new Func<[_strike: ethers.BigNumber], {_strike: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xc189c19b'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isContract: new Func<[addr: string], {addr: string}, boolean>(
        abi, '0x16279055'
    ),
    isPut: new Func<[], {}, boolean>(
        abi, '0xf3c274a6'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    purchase: new Func<[strikeIndex: ethers.BigNumber, amount: ethers.BigNumber, to: string], {strikeIndex: ethers.BigNumber, amount: ethers.BigNumber, to: string}, ([premium: ethers.BigNumber, totalFee: ethers.BigNumber] & {premium: ethers.BigNumber, totalFee: ethers.BigNumber})>(
        abi, '0xea3bd5df'
    ),
    removeFromContractWhitelist: new Func<[_contract: string], {_contract: string}, []>(
        abi, '0xc3d9ed39'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, data: string], {from: string, to: string, tokenId: ethers.BigNumber, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setAddresses: new Func<[_addresses: ([feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string] & {feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string})], {_addresses: ([feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string] & {feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string})}, []>(
        abi, '0xb375d492'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    settle: new Func<[strikeIndex: ethers.BigNumber, amount: ethers.BigNumber, epoch: ethers.BigNumber, to: string], {strikeIndex: ethers.BigNumber, amount: ethers.BigNumber, epoch: ethers.BigNumber, to: string}, ethers.BigNumber>(
        abi, '0x91aee9a8'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4f6ccce7'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: ethers.BigNumber], {owner: string, index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    underlyingSymbol: new Func<[], {}, string>(
        abi, '0xd90a730e'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    updateExpireDelayTolerance: new Func<[_expireDelayTolerance: ethers.BigNumber], {_expireDelayTolerance: ethers.BigNumber}, []>(
        abi, '0xab2150cf'
    ),
    whitelistedContracts: new Func<[string], {}, boolean>(
        abi, '0x391feebb'
    ),
    withdraw: new Func<[tokenId: ethers.BigNumber, to: string], {tokenId: ethers.BigNumber, to: string}, ([collateralTokenWithdrawAmount: ethers.BigNumber, rewardTokenWithdrawAmounts: Array<ethers.BigNumber>] & {collateralTokenWithdrawAmount: ethers.BigNumber, rewardTokenWithdrawAmounts: Array<ethers.BigNumber>})>(
        abi, '0x00f714ce'
    ),
    writePosition: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, ([epoch: ethers.BigNumber, strike: ethers.BigNumber, collateralAmount: ethers.BigNumber, checkpointIndex: ethers.BigNumber, rewardDistributionRatios: Array<ethers.BigNumber>] & {epoch: ethers.BigNumber, strike: ethers.BigNumber, collateralAmount: ethers.BigNumber, checkpointIndex: ethers.BigNumber, rewardDistributionRatios: Array<ethers.BigNumber>})>(
        abi, '0xa624ec63'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    MANAGER_ROLE(): Promise<string> {
        return this.eth_call(functions.MANAGER_ROLE, [])
    }

    addresses(): Promise<([feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string] & {feeStrategy: string, stakingStrategy: string, optionPricing: string, priceOracle: string, volatilityOracle: string, feeDistributor: string, optionsTokenImplementation: string})> {
        return this.eth_call(functions.addresses, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    calculatePnl(price: ethers.BigNumber, strike: ethers.BigNumber, amount: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculatePnl, [price, strike, amount, collateralExchangeRate])
    }

    calculatePremium(_strike: ethers.BigNumber, _amount: ethers.BigNumber, _expiry: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculatePremium, [_strike, _amount, _expiry])
    }

    calculatePurchaseFees(strike: ethers.BigNumber, amount: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculatePurchaseFees, [strike, amount])
    }

    calculateSettlementFees(pnl: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateSettlementFees, [pnl])
    }

    checkpoints(arg0: ethers.BigNumber, arg1: ethers.BigNumber, arg2: ethers.BigNumber): Promise<([activeCollateral: ethers.BigNumber, totalCollateral: ethers.BigNumber, accruedPremium: ethers.BigNumber] & {activeCollateral: ethers.BigNumber, totalCollateral: ethers.BigNumber, accruedPremium: ethers.BigNumber})> {
        return this.eth_call(functions.checkpoints, [arg0, arg1, arg2])
    }

    collateralPrecision(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.collateralPrecision, [])
    }

    collateralToken(): Promise<string> {
        return this.eth_call(functions.collateralToken, [])
    }

    currentEpoch(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.currentEpoch, [])
    }

    expireDelayTolerance(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.expireDelayTolerance, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getCollateralPrice(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getCollateralPrice, [])
    }

    getEpochData(epoch: ethers.BigNumber): Promise<([expired: boolean, startTime: ethers.BigNumber, expiry: ethers.BigNumber, settlementPrice: ethers.BigNumber, totalCollateralBalance: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber, settlementCollateralExchangeRate: ethers.BigNumber, strikes: Array<ethers.BigNumber>, totalRewardsCollected: Array<ethers.BigNumber>, rewardDistributionRatios: Array<ethers.BigNumber>, rewardTokensToDistribute: Array<string>] & {expired: boolean, startTime: ethers.BigNumber, expiry: ethers.BigNumber, settlementPrice: ethers.BigNumber, totalCollateralBalance: ethers.BigNumber, collateralExchangeRate: ethers.BigNumber, settlementCollateralExchangeRate: ethers.BigNumber, strikes: Array<ethers.BigNumber>, totalRewardsCollected: Array<ethers.BigNumber>, rewardDistributionRatios: Array<ethers.BigNumber>, rewardTokensToDistribute: Array<string>})> {
        return this.eth_call(functions.getEpochData, [epoch])
    }

    getEpochStrikeCheckpointsLength(epoch: ethers.BigNumber, strike: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getEpochStrikeCheckpointsLength, [epoch, strike])
    }

    getEpochStrikeData(epoch: ethers.BigNumber, strike: ethers.BigNumber): Promise<([strikeToken: string, totalCollateral: ethers.BigNumber, activeCollateral: ethers.BigNumber, totalPremiums: ethers.BigNumber, checkpointPointer: ethers.BigNumber, rewardStoredForPremiums: Array<ethers.BigNumber>, rewardDistributionRatiosForPremiums: Array<ethers.BigNumber>] & {strikeToken: string, totalCollateral: ethers.BigNumber, activeCollateral: ethers.BigNumber, totalPremiums: ethers.BigNumber, checkpointPointer: ethers.BigNumber, rewardStoredForPremiums: Array<ethers.BigNumber>, rewardDistributionRatiosForPremiums: Array<ethers.BigNumber>})> {
        return this.eth_call(functions.getEpochStrikeData, [epoch, strike])
    }

    getEpochTimes(epoch: ethers.BigNumber): Promise<([start: ethers.BigNumber, end: ethers.BigNumber] & {start: ethers.BigNumber, end: ethers.BigNumber})> {
        return this.eth_call(functions.getEpochTimes, [epoch])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getUnderlyingPrice(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getUnderlyingPrice, [])
    }

    getVolatility(_strike: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getVolatility, [_strike])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isContract(addr: string): Promise<boolean> {
        return this.eth_call(functions.isContract, [addr])
    }

    isPut(): Promise<boolean> {
        return this.eth_call(functions.isPut, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenOfOwnerByIndex(owner: string, index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }

    underlyingSymbol(): Promise<string> {
        return this.eth_call(functions.underlyingSymbol, [])
    }

    whitelistedContracts(arg0: string): Promise<boolean> {
        return this.eth_call(functions.whitelistedContracts, [arg0])
    }

    writePosition(tokenId: ethers.BigNumber): Promise<([epoch: ethers.BigNumber, strike: ethers.BigNumber, collateralAmount: ethers.BigNumber, checkpointIndex: ethers.BigNumber, rewardDistributionRatios: Array<ethers.BigNumber>] & {epoch: ethers.BigNumber, strike: ethers.BigNumber, collateralAmount: ethers.BigNumber, checkpointIndex: ethers.BigNumber, rewardDistributionRatios: Array<ethers.BigNumber>})> {
        return this.eth_call(functions.writePosition, [tokenId])
    }
}
