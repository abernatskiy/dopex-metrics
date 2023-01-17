export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "AccrueInterest",
        "inputs": [
            {
                "type": "uint256",
                "name": "cashPrior",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "interestAccumulated",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "borrowIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalBorrows",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalReserves",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "spender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Borrow",
        "inputs": [
            {
                "type": "address",
                "name": "borrower",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "borrowAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "accountBorrows",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalBorrows",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "interestBalancePrior",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Failure",
        "inputs": [
            {
                "type": "uint256",
                "name": "error",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "info",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "detail",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidateBorrow",
        "inputs": [
            {
                "type": "address",
                "name": "liquidator",
                "indexed": false
            },
            {
                "type": "address",
                "name": "borrower",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "repayAmount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "pTokenCollateral",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "seizeTokens",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Mint",
        "inputs": [
            {
                "type": "address",
                "name": "minter",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "mintAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "mintTokens",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalSupply",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "accountTokens",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewComptroller",
        "inputs": [
            {
                "type": "address",
                "name": "oldComptroller",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newComptroller",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewMarketInterestRateModel",
        "inputs": [
            {
                "type": "address",
                "name": "oldInterestRateModel",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newInterestRateModel",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewMigrator",
        "inputs": [
            {
                "type": "address",
                "name": "oldMigrator",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newMigrator",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewMinInterestAccumulated",
        "inputs": [
            {
                "type": "uint256",
                "name": "oldMinInterestAccumulated",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newMinInterestAccumulated",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewReserveFactor",
        "inputs": [
            {
                "type": "uint256",
                "name": "oldReserveFactorMantissa",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newReserveFactorMantissa",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Redeem",
        "inputs": [
            {
                "type": "address",
                "name": "redeemer",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "redeemAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "redeemTokens",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalSupply",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "accountTokens",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RepayBorrow",
        "inputs": [
            {
                "type": "address",
                "name": "payer",
                "indexed": false
            },
            {
                "type": "address",
                "name": "borrower",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "repayAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "accountBorrows",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalBorrows",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "interestBalancePrior",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReservesAdded",
        "inputs": [
            {
                "type": "address",
                "name": "benefactor",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "addAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newTotalReserves",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReservesReduced",
        "inputs": [
            {
                "type": "address",
                "name": "admin",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "reduceAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newTotalReserves",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "_addReserves",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "addAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_reduceReserves",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "reduceAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_setComptroller",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newComptroller"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_setFlashloan",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_flashloan"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "_setInterestRateModel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newInterestRateModel"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_setMigrator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newMigrator"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_setMinInterestAccumulated",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_minInterestAccumulated"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_setReserveFactor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "newReserveFactorMantissa"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "accrualBlockNumber",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "accrueInterest",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "accrueInterestSnapshot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "allowance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "spender"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "spender"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOfUnderlying",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "borrow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "borrowAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "borrowBalanceCurrent",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "borrowBalanceStored",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "borrowIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "borrowRatePerBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "comptroller",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "decimals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8"
            }
        ]
    },
    {
        "type": "function",
        "name": "exchangeRateCurrent",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "exchangeRateStored",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "flashloan",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_receiver"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "bytes",
                "name": "_params"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "flashloanInstance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAccountSnapshot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getCash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "init",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "comptroller_"
            },
            {
                "type": "address",
                "name": "interestRateModel_"
            },
            {
                "type": "uint256",
                "name": "initialExchangeRateMantissa_"
            },
            {
                "type": "string",
                "name": "name_"
            },
            {
                "type": "string",
                "name": "symbol_"
            },
            {
                "type": "uint8",
                "name": "decimals_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "underlying_"
            },
            {
                "type": "address",
                "name": "comptroller_"
            },
            {
                "type": "address",
                "name": "interestRateModel_"
            },
            {
                "type": "uint256",
                "name": "initialExchangeRateMantissa_"
            },
            {
                "type": "string",
                "name": "name_"
            },
            {
                "type": "string",
                "name": "symbol_"
            },
            {
                "type": "uint8",
                "name": "decimals_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "interestRateModel",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "isPToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "liquidateBorrow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "borrower"
            },
            {
                "type": "uint256",
                "name": "repayAmount"
            },
            {
                "type": "address",
                "name": "cTokenCollateral"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "migrator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "minInterestAccumulated",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "mint",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "mintAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "mintForMigrate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "mintAmount"
            },
            {
                "type": "uint256",
                "name": "mintTokens"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "redeem",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "redeemTokens"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "redeemUnderlying",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "redeemAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "repayBorrow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "repayAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "repayBorrowBehalf",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "borrower"
            },
            {
                "type": "uint256",
                "name": "repayAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "reserveFactorMantissa",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "seize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "liquidator"
            },
            {
                "type": "address",
                "name": "borrower"
            },
            {
                "type": "uint256",
                "name": "seizeTokens"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "supplyRatePerBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalBorrows",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalBorrowsCurrent",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalReserves",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "src"
            },
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "underlying",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    }
]
