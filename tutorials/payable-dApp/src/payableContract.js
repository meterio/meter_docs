import web3 from './web3'

const address = '0x78F16B33Ec73c5e19A4cfAbccCC2aCAEc4AF0bB7';
const abi = [
	{
		"inputs": [],
		"name": "mtrBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mtrgBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receiveMTR",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receiveMTRG",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receiveVOLT",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transferAmount",
				"type": "uint256"
			}
		],
		"name": "transferMTR",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transferAmount",
				"type": "uint256"
			}
		],
		"name": "transferMTRG",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transferAmount",
				"type": "uint256"
			}
		],
		"name": "transferVOLT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voltBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let payableContract = new web3.eth.Contract(abi, address)
export {payableContract, address};