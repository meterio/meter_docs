# API Documentation Guidelines

The Meter API documentation focuses on the use of the [`meterify`](https://github.com/meterio/meterify) library, which is a modified version of [`web3`](https://github.com/ethereum/web3.js). The content is a combination of the `web3` documentation, and content specific to `meterify` and the Meter blockchain.

All API documentation should be written to reflect `meterify`. So where existing content that has been ported `web3` is mentioned, this should be replaced to the greatest extent possible with `meterify`. Some code snippets provide a good example of these kinds of changes.

**web3**

```text
import Web3 from 'web3';

// "Web3.givenProvider" will be set in a Ethereum supported browser.
const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546', net, options);

web3.version
```

**meterify**

```text
const meter = require("meterify").meterify;
const Web3 = require("web3");
const meterify = meter(new Web3(), "http://test.meter.io:8669");

meterify.version
```

Another example, where `web3` content might read:

```text
For `web3.eth.subscribe` see the [`subscribe`](web3.eth.subscribe.html) reference documentation.
```

Modify it to read:

```text
For `meterify.eth.subscribe` see the [`subscribe`](meterify.eth.subscribe.html) reference documentation.
```

