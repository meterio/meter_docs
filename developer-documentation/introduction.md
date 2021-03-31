# Introduction to Developer Documentation



Meter is DeFi infrastructure with a built-in, crypto-native, metastable currency, MTR.  You can use Meter as a Layer 1 blockchain to build DeFi apps on top of, or as a highly-decentralized, high-performance side chain for Ethereum and other public chains.

We mainly support two ways of interacting with Meter:

**RESTful API**

This is the native interface for Meter and is directly supported by Meter node through port 8669.  We also provided a mainnet end point at https://mainnet.meter.io:8667.

You will able to access all the functionality and create Meter native TX through this interface.  We have implemented a Ethereum web3 compatible interface library called meterify.  You could use the following command to install meterify.

```text
npm install meterify
```

Use the following code to create a web3 instance in your code and you will be able to use the Ethereum web3 interfaces to interact with the Meter mainnet. 

```text
const meterify = require(“meterify”).meterify;
const Web3 = require(“web3");
const web3 = meterify(new Web3(), “https://mainnet.meter.io:8667”);
```

**Ethereum RPC**

To better support existing Ethereum dApp developers, we have also developed an Ethereum emulation mode for Meter.  Through an addon module called webgear, Meter node will be able to understand Ethereum TX format and support standard Ethereum RPC interface.  It is like using the Apple M1 silicon to run x86 applications, except it runs 100 times faster.  Developers could use their preferred Ethereum development tools like `Remix`, `ethers.js` and `web3.js` to interact with Meter.  Due to the limitation of the Ethereum RPC, not all Meter functionalities are available in this mode and MTRG can only be treated as a special ERC20 token via a system contract.  

The other difference between Meter and Ethereum is that Meter removed the sequential nonce concept in Ethereum and use a random number as nonce instead.  The Ethereum emulation layer will automatically generate the random nonce.  However you will not be able to replace a transaction with the same nonce.  In addition, a transaction sender has to rely on the transaction hash returned by the node instead of generating it directly offline.

Use "Injected Web3" and Metamask in Remix to interact with Meter

End points for mainnet is: https://rpc.meter.io

for Warringstakes testnet: https://rpctest.meter.io 

###  <a id="api-documentation"></a>

