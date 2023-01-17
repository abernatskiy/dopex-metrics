export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_logic"
            },
            {
                "type": "address",
                "name": "admin_"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AdminChanged",
        "inputs": [
            {
                "type": "address",
                "name": "previousAdmin",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newAdmin",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeaconUpgraded",
        "inputs": [
            {
                "type": "address",
                "name": "beacon",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Upgraded",
        "inputs": [
            {
                "type": "address",
                "name": "implementation",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "admin",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "admin_"
            }
        ]
    },
    {
        "type": "function",
        "name": "changeAdmin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newAdmin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "implementation",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "implementation_"
            }
        ]
    },
    {
        "type": "function",
        "name": "upgradeTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeToAndCall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    }
]
