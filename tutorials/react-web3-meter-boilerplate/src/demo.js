import web3 from './web3'

const address = '0x0Fdef7877e835d68ddC09Becce1bAa6e5a8c2919';
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"inputs":[],"name":"getArray","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd504ea1d"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"myArray","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcc3e57d9"},{"inputs":[],"name":"myString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x492bfa18"}];

export default new web3.eth.Contract(abi, address);