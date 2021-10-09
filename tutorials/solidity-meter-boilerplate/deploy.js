const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  'dice bicycle thing clarify cotton manage pigeon blue patch key pudding town first symptom destroy',
  'https://rpctest.meter.io'
);

/*
Mainnet: https://rpc.meter.io
Warringstakes Testnet: https://rpctest.meter.io
Private Node: http://node_ip:8545
*/

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log(JSON.stringify(abi));
  
  console.log("Contract deployed to", result.options.address);
};
deploy();