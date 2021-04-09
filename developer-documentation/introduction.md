# Introduction to Developer Documentation

Meter is DeFi infrastructure with a built-in, crypto-native, metastable currency called MTR. You can use Meter as a Layer 1 blockchain to build DeFi apps on top of, or as a highly-decentralized, high-performance side chain for Ethereum and other public chains.

There are two primary methods of interacting with Meter:

**RESTful API**

This is the native interface for Meter and is directly supported by Meter node on port 8669. There is an additional mainnet endpoint at [https://mainnet.meter.io:8667](https://mainnet.meter.io:8667).

You are able to access all of our functionality and create Meter native transactions through this interface. We have implemented an Ethereum web3 compatible interface library called meterify.

In order to install Meterify run the following commands:

```text
npm install meterify
```

Using the code below you can create a web3 instance. You are then able to use the Ethereum web3 interfaces to interact with the Meter mainnet.

```text
const meterify = require(“meterify”).meterify;
const Web3 = require(“web3");
const web3 = meterify(new Web3(), “https://mainnet.meter.io:8667”);
```

**Ethereum RPC**

In order to better support existing Ethereum dApp developers we developed an Ethereum emulation mode for Meter. Through an addon module called webgear Meter nodes are able to understand Ethereum transaction format and support the standard Ethereum RPC interface. It is like using the Apple M1 silicon to run x86 applications with a 100x performance improvement. Developers are even able to use their preferred Ethereum development tools like `Remix`, `ethers.js` and `web3.js` to interact with Meter. Due to the limitations of the Ethereum RPC not all Meter functionality is available in Ethereum emulation mode. In this mode MTRG must be treated as a special ERC20 token via a system contract.

The other difference between Meter and Ethereum is that Meter removed the sequential nonce concept in Ethereum and uses a random number as nonce instead. The Ethereum emulation layer will automatically generate the random nonce, you will not be able to replace a transaction with the same nonce. Additionally the sender of a transation must rely on the transaction hash returned by the node instead of generating it directly offline.

When interacting with Meter you must use "Injected Web3" in Remix alongside Metamask.

Mainnet Endpoint: [https://rpc.meter.io](https://rpc.meter.io)

Warringstakes Testnet Endpoint: [https://rpctest.meter.io](https://rpctest.meter.io)

