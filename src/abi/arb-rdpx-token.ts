import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './arb-rdpx-token.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, spender: string, value: ethers.BigNumber] & {owner: string, spender: string, value: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
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
    Transfer: new LogEvent<([from: string, to: string, value: ethers.BigNumber] & {from: string, to: string, value: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    MINTER_ROLE: new Func<[], {}, string>(
        abi, '0xd5391393'
    ),
    PAUSER_ROLE: new Func<[], {}, string>(
        abi, '0xe63ab1e9'
    ),
    allowance: new Func<[owner: string, spender: string], {owner: string, spender: string}, ethers.BigNumber>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[spender: string, amount: ethers.BigNumber], {spender: string, amount: ethers.BigNumber}, boolean>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[account: string], {account: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    burn: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    burnFrom: new Func<[account: string, amount: ethers.BigNumber], {account: string, amount: ethers.BigNumber}, []>(
        abi, '0x79cc6790'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    decreaseAllowance: new Func<[spender: string, subtractedValue: ethers.BigNumber], {spender: string, subtractedValue: ethers.BigNumber}, boolean>(
        abi, '0xa457c2d7'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getRoleMember: new Func<[role: string, index: ethers.BigNumber], {role: string, index: ethers.BigNumber}, string>(
        abi, '0x9010d07c'
    ),
    getRoleMemberCount: new Func<[role: string], {role: string}, ethers.BigNumber>(
        abi, '0xca15c873'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    increaseAllowance: new Func<[spender: string, addedValue: ethers.BigNumber], {spender: string, addedValue: ethers.BigNumber}, boolean>(
        abi, '0x39509351'
    ),
    mint: new Func<[to: string, amount: ethers.BigNumber], {to: string, amount: ethers.BigNumber}, []>(
        abi, '0x40c10f19'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[recipient: string, amount: ethers.BigNumber], {recipient: string, amount: ethers.BigNumber}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[sender: string, recipient: string, amount: ethers.BigNumber], {sender: string, recipient: string, amount: ethers.BigNumber}, boolean>(
        abi, '0x23b872dd'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    MINTER_ROLE(): Promise<string> {
        return this.eth_call(functions.MINTER_ROLE, [])
    }

    PAUSER_ROLE(): Promise<string> {
        return this.eth_call(functions.PAUSER_ROLE, [])
    }

    allowance(owner: string, spender: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.allowance, [owner, spender])
    }

    balanceOf(account: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [account])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getRoleMember(role: string, index: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getRoleMember, [role, index])
    }

    getRoleMemberCount(role: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getRoleMemberCount, [role])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }
}
