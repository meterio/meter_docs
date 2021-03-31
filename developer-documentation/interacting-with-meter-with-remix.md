# Developing with Remix, Ethers.js and Web3.js

Ethereum developers could use Remix to compile and debug code for Meter.  The current EVM version for Meter is **Constantinople**.  MTR balance is used as ETH in Ethereum.

### Remix:  

Use "Injected Web3" in Remix and [configure Metamask](../wallet-setup/interacting-with-meter-mainnet-using-metamask.md) properly to deploy on Meter.

Meter also supports ethers.js and web3.js through RPC end points.  

## Using Ethers.js

To get started with the ethers.js library, we first need to install it using the following command:

```text
npm install ethers
```

Once done, the simplest setup to start using the library and its methods is the following:

```text
const ethers = require('ethers');

// Variables definition
const privKey = '0xPRIVKEY';

// Define Provider
let provider = new ethers.providers.JsonRpcProvider('RPC_URL');

// Create Wallet
let wallet = new ethers.Wallet(privKey, provider);
```

Please remember to replace the PRIVKEY and RPC\_URL to the correct values.

### Using Web3.js

To get started with the web3.js library, we first need to install it using the following command:

```text
npm install web3
```

Once done, the simplest setup to start using the library and its methods is the following:

```text
const Web3 = require('web3');

//Create web3 instance
const web3 = new Web3('RPC_URL');
```

Please remember to set the `RPC_URL` to the correct RPC end points.

### RPC End Points 

Mainnet: `https://rpc.meter.io`

Warringstakes testnet: `https://rpctest.meter.io` 

Private node: `http://`_`node_ip`_`:8545`

