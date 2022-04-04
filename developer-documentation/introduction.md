# Introduction to Developer Documentation

Meter is a DeFi infrastructure with a built-in, crypto-native, metastable currency called MTR. You can use Meter as a Layer 1 blockchain to build DeFi apps on top of, or as a highly-decentralized, high-performance side chain for Ethereum and other public chains.

There are two primary methods of interacting with Meter:

**Ethereum RPC**

In order to better support existing Ethereum dApp developers, we developed an Ethereum emulation mode for Meter. Through an addon module called webgear Meter nodes are able to understand Ethereum transaction format and support the standard Ethereum RPC interface. It is like using the Apple M1 silicon to run x86 applications with a 100x performance improvement. Developers are even able to use their preferred Ethereum development tools like `Remix`, `ethers.js` and `web3.js` to interact with Meter. Due to the limitations of the Ethereum RPC, not all Meter functionality is available in Ethereum emulation mode. In this mode, MTRG must be treated as a special ERC20 token via a system contract.

The other difference between Meter and Ethereum is that Meter removed the sequential nonce concept in Ethereum and uses a random number as nonce instead. The Ethereum emulation layer will automatically generate the random nonce, you will not be able to replace a transaction with the same nonce. Additionally, the sender of a transation must rely on the transaction hash returned by the node instead of generating it directly offline.

When interacting with Meter you must use "Injected Web3" in Remix alongside Metamask.

**Testnet:**

Warringstakes Testnet Endpoints:&#x20;

&#x20;              RPC: [https://rpctest.meter.io](https://rpctest.meter.io)

&#x20;              Websocket: <mark style="color:blue;">wss://wstest.meter.io</mark>&#x20;

ChainID: 83

Currency Symbol: MTR

Explorer: [https://scan-warringstakes.meter.io](https://scan-warringstakes.meter.io)

_ERC20 System Interface:_

MTRG: 0x8a419ef4941355476cf04933e90bf3bbf2f73814

MTR: 0x4cb6cef87d8cadf966b455e8bd58fff32aba49d1&#x20;

**Mainnet:**

RPC Endpoint:&#x20;

&#x20;              RPC: [https://rpc.meter.io](https://rpc.meter.io)  (port 8545 on the mainnet docker)

&#x20;              Websocket: <mark style="color:blue;">ws</mark>[<mark style="color:blue;">s://ws.meter.io</mark>](https://rpc.meter.io)  (port 8546 on the mainnet docker)

ChainID: 82

Currency Symbol: MTR

Explorer: [https://scan.meter.io](https://scan.meter.io)

_ERC20 System Interface:_

\-MTRG: 0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3

\-MTR (Optional): 0x687A6294D0D6d63e751A059bf1ca68E4AE7B13E2

****

**Important Things to Pay Attention to:**

1. **Currently, there is a limitation that MTR and MTRG could only be sent to a contract address through smart contract interactions.  For example, if you want to send MTR to a contract address manually, you will have to use the above ERC20 system interface.**
2. **Meter network now requires all transactions to contain chainID.  Please make sure to configure your deployment script properly.**
3. **The minimum gas price on Meter is currently 500gwei.  Even if a lower gas price is specified, the network will still charge 500gwei silently.  Make sure you have enough MTR in the account.**
4. **Meter network is front-running resistant.  It does not order transactions by the gas price specified. Transactions are ordered by the time the proposing node receives them.  By default, if a transaction is not processed within 320 blocks after the network receives it, it will automatically expire.**



The faucet for Testnet can be found at:

{% embed url="http://faucet-warringstakes.meter.io" %}

**Source Code Verification**

Meter explorer uses [Sourcify](https://github.com/ethereum/sourcify) for verifying the onchain contracts' byte code is exactly the same as the source code.  Verifying contracts also allow the explorer to properly decode smart contract transactions.  There are various tools (for example Remix plugins) that help developers to verify on Sourcify.

The submission for source code can be either done through [Meter Explorer](https://scan.meter.io) or [Sourcify Portal](https://sourcify.dev).  There are two levels of verification: 1. source code match and 2. both source code, metadata match.  Source code match is considered the minimum for contract verification purposes.



**RESTful API (Not Required if you are using Ethereum RPC toolchains)**

This is the native interface for Meter and is directly supported by Meter node on port 8669. There is an additional mainnet endpoint at [https://mainnet.meter.io:8667](https://mainnet.meter.io:8667).

You are able to access all of our functionality and create Meter native transactions through this interface. We have implemented an Ethereum web3 compatible interface library called meterify.

In order to install Meterify run the following commands:

```
npm install meterify
```

Using the code below you can create a web3 instance. You are then able to use the Ethereum web3 interfaces to interact with the Meter mainnet.

```
const meterify = require(“meterify”).meterify;
const Web3 = require(“web3");
const web3 = meterify(new Web3(), “https://mainnet.meter.io:8667”);
```
