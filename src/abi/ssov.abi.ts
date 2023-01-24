export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "ContractNotPaused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ContractPaused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SsovV3Error",
        "inputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddToContractWhitelist",
        "inputs": [
            {
                "type": "address",
                "name": "_contract",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddressesSet",
        "inputs": [
            {
                "type": "tuple",
                "name": "addresses",
                "indexed": false,
                "components": [
                    {
                        "type": "address",
                        "name": "feeStrategy"
                    },
                    {
                        "type": "address",
                        "name": "stakingStrategy"
                    },
                    {
                        "type": "address",
                        "name": "optionPricing"
                    },
                    {
                        "type": "address",
                        "name": "priceOracle"
                    },
                    {
                        "type": "address",
                        "name": "volatilityOracle"
                    },
                    {
                        "type": "address",
                        "name": "feeDistributor"
                    },
                    {
                        "type": "address",
                        "name": "optionsTokenImplementation"
                    }
                ]
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
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Bootstrap",
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch",
                "indexed": false
            },
            {
                "type": "uint256[]",
                "name": "strikes",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Deposit",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EmergencyWithdraw",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EpochExpired",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "settlementPrice",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpireDelayToleranceUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "expireDelayTolerance",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Purchase",
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "strike",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "premium",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RemoveFromContractWhitelist",
        "inputs": [
            {
                "type": "address",
                "name": "_contract",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Settle",
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "strike",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "pnl",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
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
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Withdraw",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "collateralTokenWithdrawn",
                "indexed": false
            },
            {
                "type": "uint256[]",
                "name": "rewardTokenWithdrawAmounts",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "MANAGER_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "addToContractWhitelist",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_contract"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addresses",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "feeStrategy"
            },
            {
                "type": "address",
                "name": "stakingStrategy"
            },
            {
                "type": "address",
                "name": "optionPricing"
            },
            {
                "type": "address",
                "name": "priceOracle"
            },
            {
                "type": "address",
                "name": "volatilityOracle"
            },
            {
                "type": "address",
                "name": "feeDistributor"
            },
            {
                "type": "address",
                "name": "optionsTokenImplementation"
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
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
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
        "name": "bootstrap",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "strikes"
            },
            {
                "type": "uint256",
                "name": "expiry"
            },
            {
                "type": "string",
                "name": "expirySymbol"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "burn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "calculatePnl",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "uint256",
                "name": "strike"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "collateralExchangeRate"
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
        "name": "calculatePremium",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_strike"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint256",
                "name": "_expiry"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "premium"
            }
        ]
    },
    {
        "type": "function",
        "name": "calculatePurchaseFees",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "strike"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "calculateSettlementFees",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "pnl"
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
        "name": "changeAllowanceForStakingStrategy",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_increase"
            },
            {
                "type": "uint256",
                "name": "_allowance"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "checkpoints",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "activeCollateral"
            },
            {
                "type": "uint256",
                "name": "totalCollateral"
            },
            {
                "type": "uint256",
                "name": "accruedPremium"
            }
        ]
    },
    {
        "type": "function",
        "name": "collateralPrecision",
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
        "name": "collateralToken",
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
        "name": "currentEpoch",
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
        "name": "deposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "strikeIndex"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ]
    },
    {
        "type": "function",
        "name": "emergencyWithdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "bool",
                "name": "transferNative"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "expire",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "expire",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_settlementPrice"
            },
            {
                "type": "uint256",
                "name": "_settlementCollateralExchangeRate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "expireDelayTolerance",
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
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "getCollateralPrice",
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
        "name": "getEpochData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "bool",
                        "name": "expired"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "settlementPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "totalCollateralBalance"
                    },
                    {
                        "type": "uint256",
                        "name": "collateralExchangeRate"
                    },
                    {
                        "type": "uint256",
                        "name": "settlementCollateralExchangeRate"
                    },
                    {
                        "type": "uint256[]",
                        "name": "strikes"
                    },
                    {
                        "type": "uint256[]",
                        "name": "totalRewardsCollected"
                    },
                    {
                        "type": "uint256[]",
                        "name": "rewardDistributionRatios"
                    },
                    {
                        "type": "address[]",
                        "name": "rewardTokensToDistribute"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochStrikeCheckpointsLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch"
            },
            {
                "type": "uint256",
                "name": "strike"
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
        "name": "getEpochStrikeData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch"
            },
            {
                "type": "uint256",
                "name": "strike"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "address",
                        "name": "strikeToken"
                    },
                    {
                        "type": "uint256",
                        "name": "totalCollateral"
                    },
                    {
                        "type": "uint256",
                        "name": "activeCollateral"
                    },
                    {
                        "type": "uint256",
                        "name": "totalPremiums"
                    },
                    {
                        "type": "uint256",
                        "name": "checkpointPointer"
                    },
                    {
                        "type": "uint256[]",
                        "name": "rewardStoredForPremiums"
                    },
                    {
                        "type": "uint256[]",
                        "name": "rewardDistributionRatiosForPremiums"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochTimes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "start"
            },
            {
                "type": "uint256",
                "name": "end"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "getUnderlyingPrice",
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
        "name": "getVolatility",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_strike"
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
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
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
        "name": "isApprovedForAll",
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
                "name": "operator"
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
        "name": "isContract",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
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
        "name": "isPut",
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
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "pause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "paused",
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
        "name": "purchase",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "strikeIndex"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "premium"
            },
            {
                "type": "uint256",
                "name": "totalFee"
            }
        ]
    },
    {
        "type": "function",
        "name": "removeFromContractWhitelist",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_contract"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAddresses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "_addresses",
                "components": [
                    {
                        "type": "address",
                        "name": "feeStrategy"
                    },
                    {
                        "type": "address",
                        "name": "stakingStrategy"
                    },
                    {
                        "type": "address",
                        "name": "optionPricing"
                    },
                    {
                        "type": "address",
                        "name": "priceOracle"
                    },
                    {
                        "type": "address",
                        "name": "volatilityOracle"
                    },
                    {
                        "type": "address",
                        "name": "feeDistributor"
                    },
                    {
                        "type": "address",
                        "name": "optionsTokenImplementation"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "settle",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "strikeIndex"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "epoch"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "pnl"
            }
        ]
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
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
        "name": "tokenByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
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
        "name": "tokenOfOwnerByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "index"
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
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string"
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
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "underlyingSymbol",
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
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateExpireDelayTolerance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_expireDelayTolerance"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistedContracts",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address"
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
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "collateralTokenWithdrawAmount"
            },
            {
                "type": "uint256[]",
                "name": "rewardTokenWithdrawAmounts"
            }
        ]
    },
    {
        "type": "function",
        "name": "writePosition",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "epoch"
            },
            {
                "type": "uint256",
                "name": "strike"
            },
            {
                "type": "uint256",
                "name": "collateralAmount"
            },
            {
                "type": "uint256",
                "name": "checkpointIndex"
            },
            {
                "type": "uint256[]",
                "name": "rewardDistributionRatios"
            }
        ]
    }
]
