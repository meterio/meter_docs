# Callbacks Promises Events

## PromiEvent

To help web3 integrate into all kind of projects with different standards, we provide multiple ways to act on asynchronous functions.

Most web3.js objects allow a callback as the last parameter, as well as returning promises to chain functions.

Meter as a blockchain has different levels of finality and therefore needs to return multiple "stages" of an action.

To cope with this requirement, we return a "PromiEvent" for functions like [`web3.eth.sendTransaction`](meterify.eth.md#sendtransaction) or contract methods. These stages are encapsulated into a "PromiEvent", which combines a promise with an event emitter.

The event emitter fires an event for each of the finality stages.

An example of a function that benefits from a PromiEvent is the [`web3.eth.sendTransaction`](meterify.eth.md#sendtransaction) method:

```text

    web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
    .once('transactionHash', function(hash){ ... })
    .once('receipt', function(receipt){ ... })
    .on('confirmation', function(confNumber, receipt){ ... })
    .on('error', function(error){ ... })
    .then(function(receipt){
        // will be fired once the receipt is mined
    });
```

