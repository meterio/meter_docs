# Meterify Web3 API

### **API Documentation**

The [API documentation](meterify-api-documentation/) focuses on the use of the `meterify` library to develop DApps for the Meter blockchain. As a testament to our open source approach. `meterify` is a node.js package.  It provides interfaces almost the same as the well known `web3.js`library, and much of its relevant open source documentation has been merged with information more specific to Meter.  Using `meterify` generates native Meter transactions and is more direct than using `web3.js` through the RPC interface. &#x20;

The meterify.js library uses the http restful API.  You could either use your own node or interact with a full node on the Meter mainnet/testnet. &#x20;

Restful API end points:

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

* [Request test tokens](http://faucet-warringstakes.meter.io)
* [Read the whitepaper](https://docsend.com/view/6gebiph)
* [Meterify web3 GitHub repository](https://github.com/meterio/meterify)
