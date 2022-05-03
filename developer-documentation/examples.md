# Meterify Code Examples

## Setup Test Environment  <a href="#create-account-example" id="create-account-example"></a>

We already have the example code in Github, which require node.js as the runtime environment.  The following commands setup node.js, install `meterify` package and check out the example code in Github. &#x20;

Please change the end point in `meterifiedWeb3.js` to your own node or the official mainnet/testnet end points, which are:

mainnet: https://mainnet.meter.io

Warringstakes tesnet: http://warrin.meter.io

```
$ sudo apt install npm
$ npm install meterify
$ git clone https://github.com/meterio/hackathon-demo
```

## Create Account Example <a href="#create-account-example" id="create-account-example"></a>

```
$ node createAccount.js
```

Please be aware the above script creates the private/public key pair on the RPC end point.  You should always run your own local node and connect to the local RPC end point for creating account due to security reasons.

**Source Files**

* [createAccount.js](https://docs.meter.io/examples/includes/create-account/createAccount.js)
* [meterifiedWeb3.js](https://docs.meter.io/examples/includes/create-account/meterifiedWeb3.js)
* [utils.js](https://docs.meter.io/examples/includes/create-account/utils.js)
* [package.json](https://docs.meter.io/examples/includes/create-account/package.json)

## Send Transaction CLI Example <a href="#send-transaction-cli-example" id="send-transaction-cli-example"></a>

> Run

```

$ node createAccount.js

$ node sendTransaction.js

```

**Source Files**

* [createAccount.js](https://docs.meter.io/examples/includes/send-transaction/createAccount.js)
* [sendTransaction.js](https://docs.meter.io/examples/includes/send-transaction/sendTransaction.js)
* [meterifiedWeb3.js](https://docs.meter.io/examples/includes/send-transaction/meterifiedWeb3.js)
* [utils.js](https://docs.meter.io/examples/includes/send-transaction/utils.js)
* [package.json](https://docs.meter.io/examples/includes/send-transaction/package.json)

## Deploy a Contract Example <a href="#deploy-a-contract-example" id="deploy-a-contract-example"></a>

> Run

```

$ node createAccount.js

$ node sendTransaction.js

$ node deployContract.js
```

**Source Files**

* [createAccount.js](https://docs.meter.io/examples/includes/deploy-contract/createAccount.js)
* [sendTransaction.js](https://docs.meter.io/examples/includes/deploy-contract/sendTransaction.js)
* [deployContract.js](https://docs.meter.io/examples/includes/deploy-contract/deployContract.js)
* [sample\_token.sol](https://docs.meter.io/examples/includes/deploy-contract/sample\_token.sol)
* [meterifiedWeb3.js](https://docs.meter.io/examples/includes/deploy-contract/meterifiedWeb3.js)
* [utils.js](https://docs.meter.io/examples/includes/deploy-contract/utils.js)
* [package.json](https://docs.meter.io/examples/includes/deploy-contract/package.json)

## Call a Contract CLI Example <a href="#call-a-contract-cli-example" id="call-a-contract-cli-example"></a>

> Run

```
$ node createAccount.js

$ node sendTransaction.js

$ node deployContract.js

$ node callContract.js
```

**Source Files**

* [createAccount.js](https://docs.meter.io/examples/includes/call-contract/createAccount.js)
* [sendTransaction.js](https://docs.meter.io/examples/includes/call-contract/sendTransaction.js)
* [deployContract.js](https://docs.meter.io/examples/includes/call-contract/deployContract.js)
* [callContract.js](https://docs.meter.io/examples/includes/call-contract/callContract.js)
* [sample\_token.sol](https://docs.meter.io/examples/includes/call-contract/sample\_token.sol)
* [meterifiedWeb3.js](https://docs.meter.io/examples/includes/call-contract/meterifiedWeb3.js)
* [utils.js](https://docs.meter.io/examples/includes/call-contract/utils.js)
* [package.json](https://docs.meter.io/examples/includes/call-contract/package.json)

## Meterify + Simple React Wallet <a href="#meterify-react" id="meterify-react"></a>

> Install

```
$ git clone https://github.com/meterio/hackathon-demo-react.git

$ cd hackathon-demo-react.git

$ npm install
```

> Run

```
$ npm start
```
