# Introduction to Developer Documentation

Meter is a DeFi infrastructure with a built-in, crypto-native, metastable currency called MTR. You can use Meter as a Layer 1 blockchain to build DeFi apps on top of, or as a highly-decentralized, high-performance side chain for Ethereum and other public chains.

There are two primary methods of interacting with Meter: Ethereum compatible RPC or Meter Native Restful APIs.  This section describes the Ethereum compatible RPC interface and native Restful APIs are detailed [here](meterify-api-documentation/).

## **1. Ethereum RPC**

In order to better support existing Ethereum dApp developers, we developed an Ethereum emulation mode for Meter. Through an addon module called webgear Meter nodes are able to understand Ethereum transaction format and support the standard Ethereum RPC interface. It is like using the Apple M1 silicon to run x86 applications with a 100x performance improvement. Developers are even able to use their preferred Ethereum development tools like `Remix`, `ethers.js` and `web3.js` to interact with Meter. Due to the limitations of the Ethereum RPC, not all Meter functionality is available in Ethereum emulation mode. In this mode, MTRG must be treated as a special ERC20 token via a system contract.

The other difference between Meter and Ethereum is that Meter removed the sequential nonce concept in Ethereum and uses a random number as nonce instead. The Ethereum emulation layer will automatically generate the random nonce, you will not be able to replace a transaction with the same nonce. Additionally, the sender of a transaction must rely on the transaction hash returned by the node instead of generating it directly offline. &#x20;

When interacting with Meter you must use "Injected Web3" in Remix alongside Metamask.

### **Testnet:**

Warringstakes Testnet Endpoints:&#x20;

&#x20;              RPC: [https://rpctest.meter.io](https://rpctest.meter.io)

&#x20;              Websocket: [<mark style="color:blue;">wss://wstest.meter.io</mark>](wss://wstest.meter.io)&#x20;

ChainID: 83

Currency Symbol: MTR

Explorer: [https://scan-warringstakes.meter.io](https://scan-warringstakes.meter.io)

_ERC20 System Interface:_

MTRG: 0x8a419ef4941355476cf04933e90bf3bbf2f73814

MTR: 0x4cb6cef87d8cadf966b455e8bd58fff32aba49d1&#x20;

_Useful Contracts:_

Multi-call: 0x649e0ce6fc6191D67EA81Ba94b105E28D1815d95

WMTR: 0xfAC315d105E5A7fe2174B3EB1f95C257A9A5e271

**Faucet for Testnet:**&#x20;

[https://faucet-warringstakes.meter.io/](https://faucet-warringstakes.meter.io/)

### **Mainnet:**

RPC Endpoint:&#x20;

&#x20;              RPC:&#x20;

&#x20;                       [https://pokt.network](https://pokt.network) (recommended for developers running production applications)

&#x20;                       [https://rpc.meter.io](https://rpc.meter.io)  (port 8545 on the mainnet docker)

&#x20;                       [https://rpc-meter.jellypool.xyz](https://rpc-meter.jellypool.xyz) (community maintained)

&#x20;              Websocket: [<mark style="color:blue;">wss://ws.meter.io</mark> ](wss://ws.meter.io) (port 8546 on the mainnet docker)

ChainID: 82

Currency Symbol: MTR

Explorer: [https://scan.meter.io](https://scan.meter.io)

_ERC20 System Interface:_

\-MTRG: 0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3

\-MTR (Optional): 0x687A6294D0D6d63e751A059bf1ca68E4AE7B13E2

_Useful Contracts:_

Multi-call: 0x99D510753552698d13D28c3B2042A37Ac6F9E38C

WMTR: 0x160361ce13ec33C993b5cCA8f62B6864943eb083

## **2. Source Code Verification**

Meter explorer uses [Sourcify](https://github.com/ethereum/sourcify) for verifying the onchain contracts' byte code is exactly the same as the source code.  Verifying contracts also allows the explorer to properly decode smart contract transactions.  There are various tools (for example Remix plugins) that help developers to verify on Sourcify.

The submission for source code can be either done through [Meter Explorer](https://scan.meter.io) or [Sourcify Portal](https://sourcify.dev/).  If a contract is verified through Sourcify Portal, it may take a few hours for the Meter Explorer to pick up the information.

There are two levels of verification: 1. source code match and 2. both source code, metadata match.  Source code match is considered the minimum for contract verification purposes.

The main difference between Sourcify and Etherscan verification is that Sourcify requires metadata  to be uploaded for verification in addition to source code and byte code.  Information on finding the metadata file is available in [Sourcify Documents](https://docs.sourcify.dev/docs/metadata/).  Both the Meter explorer and Sourcify website allow uploading zip file.  If your file is too large, we recommend directly using the Sourcify website to upload multiple files.  If you are using Truffle, sometimes after you upload the json file, Sourcify complains not able to find the corresponding find .sol files in your local file path.  You could try zip all the contract source code in a file and upload to Sourcify website.  It will typically resolve the issue.  From time to time, Sourcify may have problem recognizing files uploaded from Windows computers.   You could try using a Mac to upload the files.

****

## **3. Multisig Wallet**

Meter team has deployed a forked version of Gnosis Safe multsig wallet on the Meter mainnet.  It can be found at:

{% embed url="https://safe.meter.io" %}
Meter Multsig Wallet
{% endembed %}

## **4. Graph Node**

The meter foundation is maintaining two separate graph nodes for the Meter Testnet and mainnet for dApp developers.  They are for testing purposes only.  If you need production-level graph nodes on Meter mainnet, please reach out to the team on discord or telegram.  We are happy to host the subgraph on our product graph nodes.

**On testnet:**

In the package.json file for your subgraph:

```
"create-test": "graph create --node http://graphtest.meter.io:8020/ [graph-name]",
"remove-test": "graph remove --node http://graphtest.meter.io:8020/ [graph-name]",
"deploy-test": "graph deploy --node http://graphtest.meter.io:8020/ --ipfs http://graphtest.meter.io:50
```

In the subgraph.yaml file for your subgraph:

<pre><code><strong>network:metertest
</strong></code></pre>

**On Mainnet:**

In the package.json file for your subgraph:

<pre><code><strong>"create-mainnet": "graph create --node http://graph.meter.io:8020/ [graph-name]",
</strong>"remove-mainnet": "graph remove --node http://graph.meter.io:8020/ [graph-name]",
"deploy-mainnet": "graph deploy --node http://graph.meter.io:8020/ --ipfs http://graph.meter.io:5001 [graph-name]",
</code></pre>

In the subgraph.yaml file for your subgraph:

<pre><code><strong>network:meter
</strong></code></pre>

## **5. Important Things to Pay Attention to:**

1. **Currently, there is a limitation that MTR and MTRG could only be sent to a contract address through smart contract interactions.  For example, if you want to send MTR to a contract address manually, you will have to use the above ERC20 system interface.**
2. **Meter network now requires all transactions to contain chainID.  Please make sure to configure your deployment script properly.**
3. **The minimum gas price on Meter is currently 500gwei.  Even if a lower gas price is specified, the network will still charge 500gwei silently.  Make sure you have enough MTR in the account.**
4. **Meter network is front-running resistant.  It does not order transactions by the gas price specified. Transactions are ordered by the time the proposing node receives them.  By default, if a transaction is not processed within 320 blocks after the network receives it, it will automatically expire.**
5. **Meter does not require sequential nonce for each account.  If you want to deploy your contract to a specified address, please use the** [**deterministic deployment method for Ethereum.**](https://github.com/Zoltu/deterministic-deployment-proxy) ****&#x20;

****
