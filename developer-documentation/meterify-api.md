---
description: >-
  RESTful API (Ignore if you prefer Ethereum RPC toolchains) This is the native
  interface (the tx format is slightly different from Ethereum tx and supports
  enhanced features like parallel transactions
---

# Meter Native TX RESTful APIs

## **RESTful API (Ignore if you use Ethereum RPC toolchains)**

This is the native interface (the tx format is slightly different from Ethereum tx and supports enhanced features like parallel sending and etc.) for Meter and is directly supported by Meter node on port 8669. There is an additional mainnet endpoint at [https://mainnet.meter.io ](https://mainnet.meter.io:8667)

You are able to access all of our functionality and create Meter native transactions through this interface. We have implemented an Ethereum web3 compatible interface library called meterify.&#x20;

In order to install Meterify run the following commands:

```
npm install meterify
```

Using the code below you can create a web3 instance. You are then able to use the Ethereum web3 interfaces to interact with the Meter mainnet.

```
const meterify = require(“meterify”).meterify;
const Web3 = require(“web3");
const web3 = meterify(new Web3(), “https://mainnet.meter.io”);
```

### **API Documentation**

The [API documentation](meterify-api-documentation/) focuses on the use of the `meterify` library to develop DApps for the Meter blockchain through the native RESTful API interface.  The RESTful API uses the native Meter TX format instead of the Ethereum TX format and is not compatible with existing Ethers.js, Web3.js, or web3j libraries.  Therefore `meterify`was created to bridge the gap.  Similarly, there is a [Meter-SDK4j](https://github.com/meterio/meter-sdk4j) library that is similar to web3j library for integrating with Java clients.

`meterify` is a node.js package.  It provides interfaces almost the same as the well-known `web3.js`library and much of its relevant open-source documentation have been merged with information more specific to Meter.  Using `meterify` generates native Meter transactions and is more direct than using `web3.js` through the RESTful interface. &#x20;

The meterify.js library uses the http restful API.  You could either use your own node or interact with a full node on the Meter mainnet/testnet. &#x20;

Restful API endpoints:

Local: `http://node_ip:8669`

Mainnet: `https://mainnet.meter.io`

Testnet: `https://testnet.meter.io`

To get started with the `meterify.js` library, we first need to install it using the following command:

```
npm install meterify
```

Once done, the simplest setup to start using the library and its methods is the following:

```
const meterify = require("meterify").meterify;
const Web3 = require("web3");
const web3 = meterify(new Web3(), "RPC_URL");
```

### Guides and Tutorials <a href="#guides-and-tutorials" id="guides-and-tutorials"></a>

Several guides and tutorials have been written to explain how to work with the Meter blockchain through `meterify`. They cover development topics, such as [how to build DApps and work with smart contracts](meter-dapp-tutorials.md).

### Other Resources <a href="#other-resources" id="other-resources"></a>

* [Request test tokens](http://faucet-warringstakes.meter.io/)
* [Read the whitepaper](https://docsend.com/view/6gebiph)
* [Meterify web3 GitHub repository](https://github.com/meterio/meterify)
* [Java library for Native TX Meter-SDK4j](https://github.com/meterio/meter-sdk4j)
