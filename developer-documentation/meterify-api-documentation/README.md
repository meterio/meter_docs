# Meterify API Documentation

The `meterify` package is a wrapper to house all Meter-related modules, and depends on the `web3.js` library. If you are writing applications or scripts executing in Node.js or a browser environment, you should use Meterify.

| Property     | Type     | Description                                  |
| ------------ | -------- | -------------------------------------------- |
| web3Instance | `object` | A `web3` instance                            |
| host         | `string` | The Meter host URL (and port, if applicable) |
| timeout      | `number` | Request timeout value                        |

Parameters of the `meterify` return object

| Property         | Type        | Description                                                 |
| ---------------- | ----------- | ----------------------------------------------------------- |
| BatchRequest     | `function`  | Sets a `RequestManager` object and initiates batch requests |
| currentProvider  | `function`  | Get or set the current provider.                            |
| timeout          | `number`    | Request timeout value                                       |
| eth              | `object`    | An Eth object (see: eth (insert link))                      |
| extension        | `extension` |                                                             |
| givenProvider    | `object`    | Return the given provider object.                           |
| providers        | `object`    | A list of providers.                                        |
| provider         | `object`    | The current provider object.                                |
| \_requestManager | `object`    | A RequestManager object.                                    |
| setProvider      | `function`  | Set the current provider.                                   |
| utils            | `object`    | A `utils` object (see: (insert link))                       |

## Example

This code...

```javascript
const meter = require("meterify").meterify;
const Web3 = require("web3");
const meterify = meter(new Web3(), "http://test.meter.io:8669");
```

...returns an object:

```javascript
{
  eth: {
    _requestManager: RequestManager,
    givenProvider: MetamaskInpageProvider,
    providers: {…},
    _provider: MeterProvider, 
    …
  },
  givenProvider: {
    mux: ObjectMultiplex,
    publicConfigStore: ObservableStore,
    rpcEngine: RpcEngine,
    send: ƒ
  },
  providers: {
    WebsocketProvider: ƒ,
    HttpProvider: ƒ,
    IpcProvider: ƒ
  },
  utils: {
    _fireError: ƒ,
    _jsonInterfaceMethodToString: ƒ,
    _flattenTypes: ƒ,
    randomHex: ƒ,
    _: ƒ, 
    …
  },
  version: "1.0.0-beta.37",
  _provider: {
    _events: Events,
    _eventsCount: 1,
    RESTHost: "http://test.meter.io:8669",
    WSHost: "ws://test.meter.io:8669",
    timeout: 0, 
    …
  },
  _requestManager: {
    provider: MeterProvider,
    providers: {…},
    subscriptions: {…}
  }
  ...
}
```

## Notes on `meterify` and `web3`

The RESTful API of Meter differs from Ethereum's JSON-RPC, and there are some methods in `web3` are not supported by `meterify`.

_Supported Web3 Methods_

web3 instance\
├── eth\
│ ├── getBlockNumber\
│ ├── getBalance\
│ ├── getStorageAt\
│ ├── getCode\
│ ├── getBlock\
│ ├── getTransaction\
│ ├── getTransactionReceipt\
│ ├── sendTransaction\
│ ├── sendSignedTransaction\
│ ├── call\
│ ├── estimateGas\
│ ├── getPastLogs\
│ ├── subscribe\
│ ├── clearSubscriptions\
│ ├── getEnergy\
│ ├── getChainTag\
│ ├── getBlockRef\
│ ├── accounts\
│ └── Contract\
│ ├── Constructor(new Contract())\
│ ├── clone\
│ ├── deploy\
│ ├── methods\
│ ├── methods.myMethod.call\
│ ├── methods.myMethod.send\
│ ├── methods.myMethod.estimateGas\
│ ├── methods.myMethod.encodeABI\
│ ├── events\
│ ├── once\
│ ├── events.myEvent\
│ ├── events.allEvents\
│ └── getPastEvents\
└── utils\


## MODULES <a href="modules" id="modules"></a>

### eth <a href="eth" id="eth"></a>

For `meterify.eth` see the [`eth`](meterify.eth.md) reference documentation.

### utils <a href="utils" id="utils"></a>

For `meterify.utils` see the [`utils`](meterify.utils.md) reference documentation.

### module.options <a href="module-options" id="module-options"></a>

A module does provide several options for configuring the transaction confirmation workflow, or for defining default values.

For the currently available option properties on a module: see the [`options`](meterify.module.options.md) reference documentation.
