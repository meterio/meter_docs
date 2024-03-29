# meterify.eth

This module allows you to interact with a Meter blockchain and any deployed smart contracts on it.

Although the `meterify.eth` module inherits from `web.eth`, there are some feature differences between the two. The following is a list of extended features in `meterify.eth`

## Extended Properties

* currentProvider
* givenProvider

## Extended Methods

* getBlockRef
* getBlockUncleCount
* getChainTag
* getEnergy

## Note on checksum addresses

All addresses returned by functions of this package are returned as checksum addresses. This means some letters are uppercase and some are lowercase. Based on that it will calculate a checksum for the address and prove its correctness. Incorrect checksum addresses will throw an error when passed into functions. If you want to circumvent the checksum check you can make an address all lower- or uppercase.

**Checksum Example:**

```javascript
    meterify.eth.getAccounts(console.log);
```

```javascript
    > ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe" ,"0x85F43D8a49eeB85d32Cf465507DD71d507100C1d"]
```

## Contract

For `meterify.eth.Contract` see the [`Contract`](meterify.eth.contract.md) reference documentation.

## accounts

For `meterify.eth.accounts` see the [`accounts`](meterify.eth.accounts.md) reference documentation.

## options

For `meterify.eth.options` see the [`options`](meterify.module.options.md) reference documentation.

## getProtocolVersion

```javascript
    meterify.eth.getProtocolVersion([callback])
```

Returns the protocol version of the node.

**Example:**

```javascript
    meterify.eth.getProtocolVersion().then(console.log);
    > "63"
```

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The protocol version. |

## isSyncing

```javascript
    meterify.eth.isSyncing([callback])
```

Checks if the node is currently syncing and returns either a syncing object, or `false`.

**Returns:**

| Type | Description |
| :--- | :--- |
| Promise &lt;objectboolean&gt; |  |

| Property | Type | Description |
| :--- | :--- | :--- |
| `startingBlock` | `Number` | The block number where the sync started. |
| `currentBlock` | `Number` | The block number where at which block the node currently synced to already. |
| `highestBlock` | `Number` | The estimated block number to sync to. |
| `knownStates` | `Number` | The estimated states to download |
| `pulledStates` | `Number` | The already downloaded states |

**Example:**

```javascript
meterify.eth.isSyncing()
    .then(console.log);

    > {
        startingBlock: 100,
        currentBlock: 312,
        highestBlock: 512,
        knownStates: 234566,
        pulledStates: 123455
    }
```

## getCoinbase    

```javascript
meterify.eth.getCoinbase([callback])
```

Returns the Coinbase address to which mining rewards will go.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The Coinbase address set in the node for mining rewards. |

**Example:**

```javascript
meterify.eth.getCoinbase().then(console.log);  
> "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"  
```

## isMining    

```javascript
meterify.eth.isMining([callback])
```

Checks whether the node is mining or not.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<boolean>` | Returns `true` if the node is mining, otherwise `false`. |

**Example:**    

```javascript
meterify.eth.isMining().then(console.log);    
> true
```

## getHashrate    

```javascript
meterify.eth.getHashrate([callback])
```

Returns the number of hashes per second that the node is mining with.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<number>` | The number of hashes per second. |

**Example:**    

```javascript
meterify.eth.getHashrate().then(console.log);    
> 493736
```

## getGasPrice

```javascript
meterify.eth.getGasPrice([callback])
```

Returns the current gas price oracle. The gas price is determined by the last few blocks median gas price. GasPrice is the wei per unit of gas.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | Number string of the current gas price in `wei.` |

See the [A note on dealing with big numbers in JavaScript](meterify.utils.md#bn).

**Example:**

```javascript
    meterify.eth.getGasPrice().then(console.log);
    > "20000000000"
```

## getAccounts

```javascript
    meterify.eth.getAccounts([callback])
```

Will return a list of the unlocked accounts in the Web3 wallet or it will return the accounts from the currently connected node.

This means you can add accounts with [`meterify.eth.accounts.create()`](meterify.eth.accounts.md#create) and you will get them returned here.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<Array>` | An array of addresses controlled by node. |

**Example:**

```javascript
    meterify.eth.getAccounts().then(console.log);
    > ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
```

## getBlockNumber

```javascript
    meterify.eth.getBlockNumber([callback])
```

Returns the current block number.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<number>` | The number of the most recent block. |

**Example:**

```javascript
    meterify.eth.getBlockNumber().then(console.log);
    > 2744
```

## getBalance

```javascript
    meterify.eth.getBalance(address [, defaultBlock] [, callback])
```

Get the Meter MTRG balance of an address at a given block.

| Property | Type | Description |
| :--- | :--- | :--- |
| address | `String` | The address to get the balance of. |
| defaultBlock | `Number` or `String` | \(optional\) If you pass this parameter it will not use the default block set with [`meterify.eth.defaultBlock`](meterify.module.options.md#defaultblock). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The current Meter balance for the given address in `wei`. |

See the [\`A note on dealing with big numbers in JavaScript'](meterify.utils.md#bn).

**Example:**

```javascript
    meterify.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
    > "1000000000000"
```

## getEnergy

```javascript
    meterify.eth.getEnergy(address [, defaultBlock] [, callback])
```

Get the Meter MTR \(energy\) balance of an address at a given block.

| Property | Type | Description |
| :--- | :--- | :--- |
| address | `String` | The address to get the balance of. |
| defaultBlock | `Number` or `String` | \(optional\) If you pass this parameter it will not use the default block set with [`meterify.eth.defaultBlock`](meterify.module.options.md#defaultblock). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The current Meter MTR balance for the given address in `wei <what-is-wei>`. |

See the [A note on dealing with big numbers in JavaScript](meterify.utils.md#bn).

**Example:**

```javascript
    meterify.eth.getEnergy("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
    > "1000000000000"
```

## getStorageAt

```javascript
    meterify.eth.getStorageAt(address, position [, defaultBlock] [, callback])
```

Get the storage at a specific position of an address.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| address | `String` | The address to get the storage from. |
| position | `Number` | The index position of the storage. |
| defaultBlock | `Number` or `String` | \(optional\) If you pass this parameter it will not use the default block set with [`meterify.eth.defaultBlock`](meterify.module.options.md#defaultblock). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The value in storage at the given position. |

**Example:**

```javascript
    meterify.eth.getStorageAt("0x407d73d8a49eeb85d32cf465507dd71d507100c1", 0).then(console.log);
    > "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
```

## getCode

```javascript
    meterify.eth.getCode(address [, defaultBlock] [, callback])
```

Get the code at a specific address.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| address | `String` | The address to get the code from. |
| defaultBlock | `Number` or `String` | \(optional\) If you pass this parameter it will not use the default block set with [`meterify.eth.defaultBlock`](meterify.module.options.md#defaultblock). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The data at given address `address`. |

**Example:**

```javascript
    meterify.eth.getCode("0xd5677cf67b5aa051bb40496e68ad359eb97cfbf8").then(console.log);
    > "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
```

## getBlock

```javascript
     meterify.eth.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])
```

Returns a block matching the block number or block hash.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| blockHashOrBlockNumber | `String` or `Number` | The block number or block hash. Or the string `"genesis"`, `"latest"` or `"pending"` as in the [`default block parameter`](https://docs.meter.io/meterify.eth.html#eth-defaultblock). |
| returnTransactionObjects | `Boolean` | \(optional, default `false`\) If `true`, the returned block will contain all transactions as objects, if `false` it will only contains the transaction hashes. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<object>` | The block object. |

**The block object:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `number` | `Number` | The block number. `null` when its pending block. |
| `hash` 32 Bytes | `String` | Hash of the block. `null` when its pending block. |
| `parentHash` 32 Bytes | `String` | Hash of the parent block. |
| `nonce` 8 Bytes | `String` | Hash of the generated proof-of-work. `null` when its pending block. |
| `sha3Uncles` 32 Bytes | `String` | SHA3 of the uncles data in the block. |
| `logsBloom` 256 Bytes | `String` | The bloom filter for the logs of the block. `null` when its pending block. |
| `transactionsRoot` 32 Bytes | `String` | The root of the transaction trie of the block |
| `stateRoot` 32 Bytes | `String` | The root of the final state trie of the block. |
| `receiptsRoot` 32 Bytes | `String` | Transaction receipts are used to store the state after a transaction has been executed and are kept in an index-keyed trie. The hash of its root is placed in the block header as the receipts root. |
| `miner` | `String` | The address of the beneficiary to whom the mining rewards were given. |
| `difficulty` | `String` | Integer of the difficulty for this block. |
| `totalDifficulty` | `String` | Integer of the total difficulty of the chain until this block. |
| `extraData` | `String` | The "extra data" field of this block. |
| `size` | `Number` | Integer the size of this block in bytes. |
| `gasLimit` | `Number` | The maximum gas allowed in this block. |
| `gasUsed` | `Number` | The total used gas by all transactions in this block. |
| `timestamp` | `Number` or `String` | The unix timestamp for when the block was collated \(returns a string if a overflow got detected\). |
| `transactions` | `Array` | Array of transaction objects, or 32 Bytes transaction hashes depending on the `returnTransactionObjects` parameter. |
| `uncles` | `Array` | Array of uncle hashes. |

**Example:**

```javascript
    meterify.eth.getBlock(3150).then(console.log);
    > {
        "number": 3,
        "hash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
        "parentHash": "0x2302e1c0b972d00932deb5dab9eb2982f570597d9d42504c05d9c2147eaf9c88",
        "nonce": "0xfb6e1a62d119228b",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "transactionsRoot": "0x3a1b03875115b79539e5bd33fb00d8f7b7cd61929d5a3c574f507b8acf415bee",
        "stateRoot": "0xf1133199d44695dfa8fd1bcfe424d82854b5cebef75bddd7e40ea94cda515bcb",
        "receiptsRoot": '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
        "miner": "0x8888f1f195afa192cfee860698584c030f4c9db1",
        "difficulty": '21345678965432',
        "totalDifficulty": '324567845321',
        "size": 616,
        "extraData": "0x",
        "gasLimit": 3141592,
        "gasUsed": 21662,
        "timestamp": 1429287689,
        "transactions": [
            "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b"
        ],
        "uncles": []
    }
```

## getBlockTransactionCount

```javascript
    meterify.eth.getBlockTransactionCount(blockHashOrBlockNumber [, callback])
```

Returns the number of transaction in a given block.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| blockHashOrBlockNumber | `String` or `Number` | The block number or hash. Or the string `"genesis"`, `"latest"` or `"pending"` as in the [`default block parameter`](https://docs.meter.io/meterify.eth.html#eth-defaultblock). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<number>` | The number of transactions in the given block. |

**Example:**

```javascript
    meterify.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
    > 1
```

## getUncle

```javascript
    meterify.eth.getUncle(blockHashOrBlockNumber, uncleIndex [, callback])
```

Returns a blocks uncle by a given uncle index position.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| blockHashOrBlockNumber | `String` or `Number` | The block number or hash. Or the string `"genesis"`, `"latest"` or `"pending"` as in the [`default block parameter`](https://docs.meter.io/meterify.eth.html#eth-defaultblock). |
| uncleIndex | `Number` | The index position of the uncle. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<object>` | The returned uncle. For a return value see [`meterify.eth.getBlock()`](https://docs.meter.io/meterify.eth.html#eth-getblock). |

Note: An uncle doesn't contain individual transactions.

**Example:**

```javascript
    meterify.eth.getUncle(500, 0).then(console.log);
    > // see meterify.eth.getBlock
```

## getTransaction

```javascript
    meterify.eth.getTransaction(transactionHash [, callback])
```

Returns a transaction matching the given transaction hash.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| transactionHash | `String` | The transaction hash. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<object>` | A transaction object its hash `transactionHash`: |

**The object:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `hash` 32 Bytes | `String` | Hash of the transaction. |
| `nonce` | `Number` | The number of transactions made by the sender prior to this one. |
| `blockHash` 32 Bytes | `String` | Hash of the block where this transaction was in. `null` when its pending. |
| `blockNumber` | `Number` | Block number where this transaction was in. `null` when its pending. |
| `transactionIndex` | `Number` | Integer of the transactions index position in the block. `null` when its pending. |
| `from` | `String` | Address of the sender. |
| `to` | `String` | Address of the receiver. `null` when its a contract creation transaction. |
| `value` | `String` | Value transferred in `wei`. |
| `gasPrice` | `String` | The wei per unit of gas provided by the sender in `wei`. |
| `gas` | `Number` | Gas provided by the sender. |
| `input` | `String` | The data sent along with the transaction. |

**Example:**

```javascript
    meterify.eth.getTransaction('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b§234').then(console.log);
    > {
        "hash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
        "nonce": 2,
        "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
        "blockNumber": 3,
        "transactionIndex": 0,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x6295ee1b4f6dd65047762f924ecd367c17eabf8f",
        "value": '123450000000000000',
        "gas": 314159,
        "gasPrice": '2000000000000',
        "input": "0x57cb2fc4"
    }
```

## getPendingTransactions

```javascript
    meterify.eth.getPendingTransactions([, callback])
```

Returns a list of pending transactions.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<object[]>` | Array of pending transactions: |

**The object:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `hash` 32 Bytes | `String` | Hash of the transaction. |
| `nonce` | `Number` | The number of transactions made by the sender prior to this one. |
| `blockHash` 32 Bytes | `String` | Hash of the block where this transaction was in. `null` when its pending. |
| `blockNumber` | `Number` | Block number where this transaction was in. `null` when its pending. |
| `transactionIndex` | `Number` | Integer of the transactions index position in the block. `null` when its pending. |
| `from` | `String` | Address of the sender. |
| `to` | `String` | Address of the receiver. `null` when its a contract creation transaction. |
| `value` | `String` | Value transferred in `wei`. |
| `gasPrice` | `String` | The wei per unit of gas provided by the sender in `wei`. |
| `gas` | `Number` | Gas provided by the sender. |
| `input` | `String` | The data sent along with the transaction. |

**Example:**

```javascript
    meterify.eth.getPendingTransactions().then(console.log);
    >  [
        {
            hash: '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
            nonce: 2,
            blockHash: '0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46',
            blockNumber: 3,
            transactionIndex: 0,
            from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
            to: '0x6295ee1b4f6dd65047762f924ecd367c17eabf8f',
            value: '123450000000000000',
            gas: 314159,
            gasPrice: '2000000000000',
            input: '0x57cb2fc4'
            v: '0x3d',
            r: '0xaabc9ddafffb2ae0bac4107697547d22d9383667d9e97f5409dd6881ce08f13f',
            s: '0x69e43116be8f842dcd4a0b2f760043737a59534430b762317db21d9ac8c5034'
        },....,{
            hash: '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
            nonce: 3,
            blockHash: '0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46',
            blockNumber: 4,
            transactionIndex: 0,
            from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
            to: '0x6295ee1b4f6dd65047762f924ecd367c17eabf8f',
            value: '123450000000000000',
            gas: 314159,
            gasPrice: '2000000000000',
            input: '0x57cb2fc4'
            v: '0x3d',
            r: '0xaabc9ddafffb2ae0bac4107697547d22d9383667d9e97f5409dd6881ce08f13f',
            s: '0x69e43116be8f842dcd4a0b2f760043737a59534430b762317db21d9ac8c5034'
        }
   ]
```

## getTransactionFromBlock

```javascript
    getTransactionFromBlock(hashStringOrNumber, indexNumber [, callback])
```

Returns a transaction based on a block hash or number and the transactions index position.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| hashStringOrNumber | `String` | A block number or hash. Or the string `"genesis"`, `"latest"` or `"pending"` as in the [`default block parameter`](https://docs.meter.io/meterify.eth.html#eth-defaultblock). |
| indexNumber | `Number` | The transactions index position. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<object>` | A transaction object, see[`meterify.eth.getTransaction`](https://docs.meter.io/meterify.eth.html#eth-gettransaction-return) |

**Example:**

```javascript
    const transaction = meterify.eth.getTransactionFromBlock('0x4534534534', 2).then(console.log);
    > // see meterify.eth.getTransaction
```

## getTransactionReceipt

```javascript
    meterify.eth.getTransactionReceipt(hash [, callback])
```

Returns the receipt of a transaction by transaction hash.

Note: The receipt is not available for pending transactions and returns `null`.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| hash | `String` | The transaction hash. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise` returns `Object` | A transaction receipt object, or `null` when no receipt was found: |

**The object:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `status` | `Boolean` | `TRUE` if the transaction was successful, `FALSE`, if the EVM reverted the transaction. |
| `blockHash` 32 Bytes | `String` | Hash of the block where this transaction was in. |
| `blockNumber` | `Number` | Block number where this transaction was in. |
| `transactionHash` 32 Bytes | `String` | Hash of the transaction. |
| `transactionIndex` | `Number` | Integer of the transactions index position in the block. |
| `from` | `String` | Address of the sender. |
| `to` | `String` | Address of the receiver. `null` when its a contract creation transaction. |
| `contractAddress` | `String` | The contract address created, if the transaction was a contract creation, otherwise `null`. |
| `cumulativeGasUsed` | `Number` | The total amount of gas used when this transaction was executed in the block. |
| `gasUsed` | `Number` | The amount of gas used by this specific transaction alone. |
| `logs` | `Array` | Array of log objects, which this transaction generated. |

**Example:**

```javascript
    const receipt = meterify.eth.getTransactionReceipt('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b')
                            .then(console.log);
    > {
      "status": true,
      "transactionHash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
      "transactionIndex": 0,
      "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
      "blockNumber": 3,
      "contractAddress": "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
      "cumulativeGasUsed": 314159,
      "gasUsed": 30234,
      "logs": [{
             // logs as returned by getPastLogs, etc.
         }, ...]
    }
```

## getTransactionCount

```javascript
    meterify.eth.getTransactionCount(address [, defaultBlock] [, callback])
```

Get the numbers of transactions sent from this address.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| address | `String` | The address to get the numbers of transactions from. |
| defaultBlock | `Number` or `String` | \(optional\) If you pass this parameter it will not use the default block set with [`meterify.eth.defaultBlock`](meterify.module.options.md#defaultblock). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<number>` | The number of transactions sent from the given address. |

**Example:**

```javascript
    meterify.eth.getTransactionCount("0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
    > 1
```

## sendTransaction    

```javascript
meterify.eth.sendTransaction(transactionObject [, callback])
```

Sends a transaction to the network.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| transactionObject | `Object` | The transaction object to send. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**The `transactionObject`**

| Property | Type | Description |
| :--- | :--- | :--- |
| `from` | `String` or `Number` | The address for the sending account. Uses the [`meterify.eth.defaultAccount`](https://docs.meter.io/meterify.eth.html#eth-defaultaccount) property, if not specified. Or an address or index of a local wallet in [`meterify.eth.accounts.wallet`](https://docs.meter.io/meterify.eth.accounts.html#eth_accounts_wallet). |
| `to` | `String` | \(optional\) The destination address of the message, left undefined for a contract-creation transaction. |
| `value` | `Number`, `String`, `BN`, or `BigNumber` | \(optional\) The value transferred for the transaction in `wei`, also the endowment if it's a contract-creation transaction. |
| `gas` | `Number` | \(optional, default: To-Be-Determined\) The amount of gas to use for the transaction \(unused gas is refunded\). |
| `gasPrice` | `Number`, `String`, `BN`, or `BigNumber` | \(optional\) The price of gas for this transaction in `wei`, defaults to [`meterify.eth.gasPrice`](https://docs.meter.io/meterify.eth.html#eth-gasprice). |
| `data` | `String` | \(optional\) Either a `ABI byte string <http://solidity.readthedocs.io/en/latest/abi-spec.html>`\_ containing the data of the function call on a contract, or in the case of a contract-creation transaction the initialization code. |
| `nonce` | `Number` | \(optional\) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce. |

Note: The `from` property can also be an address or index from the [`meterify.eth.accounts.wallet`](meterify.eth.accounts.md#wallet). It will then sign locally using the private key of that account, and send the transaction via [`meterify.eth.sendSignedTransaction()`](meterify.eth.md#sendsignedtransaction).

**Returns:**

The **callback** will return the 32 bytes transaction hash.

| Name | Description |
| :--- | :--- |
| `PromiEvent` | A [promise combined event emitter](callbacks-promises-events.md#promievent). Will be resolved when the transaction [`receipt`](https://docs.meter.io/meterify.eth.html#eth-gettransactionreceipt-return) is available. Additionally the following events are available: |

| Event | Returns | Description |
| :--- | :--- | :--- |
| `"transactionHash"` | `String` | Is fired right after the transaction is sent and a transaction hash is available. |
| `"receipt"` | `Object` | Is fired when the transaction receipt is available. |
| `"confirmation"` | `Number`, `Object` | Is fired for every confirmation up to the 12th confirmation. Receives the confirmation number as the first and the [receipt](meterify.eth.md#gettransactionreceipt) as the second argument. Fired from confirmation 0 on, which is the block where it's mined. |
| `"error"` | `Error` | Is fired if an error occurs during sending. If a out of gas error, the second parameter is the receipt. |

**Example:**    

```javascript
// compiled solidity source code using https://remix.ethereum.org
    const code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";

    // using the callback
    meterify.eth.sendTransaction({
        from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
        data: code // deploying a contract
    }, function(error, hash){
        ...
    });

    // using the promise
    meterify.eth.sendTransaction({
        from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        value: '1000000000000000'
    })
    .then(function(receipt){
        ...
    });

    // using the event emitter
    meterify.eth.sendTransaction({
        from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        value: '1000000000000000'
    })
    .on('transactionHash', function(hash){
        ...
    })
    .on('receipt', function(receipt){
        ...
    })
    .on('confirmation', function(confirmationNumber, receipt){ ... })
    .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
```

## sendSignedTransaction    

```javascript
meterify.eth.sendSignedTransaction(signedTransactionData [, callback])
```

Sends an already signed transaction, generated for example using [`meterify.eth.accounts.signTransaction`](meterify.eth.md#signtransaction).

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| signedTransactionData | `String` | Signed transaction data in HEX format |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Name | Returns | Description |
| :--- | :--- | :--- |
| `PromiEvent` | A [promise combined event emitter](callbacks-promises-events.md#promievent) | Will be resolved when the transaction [`receipt`](meterify.eth.md#gettransactionreceipt) is available. |

Please see the return values for [`meterify.eth.sendTransaction`](meterify.eth.md#sendtransaction) for details.

**Example:**

```javascript
    const Tx = require('ethereumjs-tx');
    const privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')

    const rawTx = {
      nonce: '0x00',
      gasPrice: '0x09184e72a000',
      gasLimit: '0x2710',
      to: '0x0000000000000000000000000000000000000000',
      value: '0x00',
      data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
    }

    const tx = new Tx(rawTx);
    tx.sign(privateKey);

    const serializedTx = tx.serialize();

    // console.log(serializedTx.toString('hex'));
    // 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

    meterify.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    .on('receipt', console.log);

    > // see eth.getTransactionReceipt() for details
```

## sign

```javascript
    meterify.eth.sign(dataToSign, address [, callback])
```

Signs data using a specific account. This account needs to be unlocked.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| dataToSign | `String` | Data to sign. If String it will be converted using [`meterify.utils.utf8ToHex`](meterify.utils.md#utf-8-tohex). |
| address | `String` or `Number` | Address to sign data with. Or an address or index of a local wallet in [`meterify.eth.accounts.wallet`](meterify.eth.accounts.md#wallet). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

Note: The 2. `address` parameter can also be an address or index from the [`meterify.eth.accounts.wallet`](meterify.eth.accounts.md#wallet). It will then sign locally using the private key of this account.

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The signature. |

**Example:**

```javascript
    meterify.eth.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
    .then(console.log);
    > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"

    // the below is the same
    meterify.eth.sign(meterify.utilsutf8ToHex("Hello world"), "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
    .then(console.log);
    > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
```

## signTransaction

```javascript
    meterify.eth.signTransaction(transactionObject [, address,] [, callback])
```

Signs a transaction with the private key of the given address. If the given address is a local unlocked account, the transaction will be signed locally.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| transactionObject | `Object` | The transaction data to sign [`meterify.eth.sendTransaction()`](meterify.eth.md#sendtransaction) for more. |
| address | `string` | The address of the account. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<object>` | The RLP encoded transaction. The `raw` property can be used to send the transaction using [`meterify.eth.sendSignedTransaction`](meterify.eth.md#sendsignedtransaction). |

**Example:**

```javascript
    meterify.eth.signTransaction({
        from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
        gasPrice: "20000000000",
        gas: "21000",
        to: '0x3535353535353535353535353535353535353535',
        value: "1000000000000000000",
        data: ""
    }).then(console.log);
    > {
        raw: '0xf86c808504a817c800825208943535353535353535353535353535353535353535880de0b6b3a76400008025a04f4c17305743700648bc4f6cd3038ec6f6af0df73e31757007b7f59df7bee88da07e1941b264348e80c78c4027afc65a87b0a5e43e86742b8ca0823584c6788fd0',
        tx: {
            nonce: '0x0',
            gasPrice: '0x4a817c800',
            gas: '0x5208',
            to: '0x3535353535353535353535353535353535353535',
            value: '0xde0b6b3a7640000',
            input: '0x',
            v: '0x25',
            r: '0x4f4c17305743700648bc4f6cd3038ec6f6af0df73e31757007b7f59df7bee88d',
            s: '0x7e1941b264348e80c78c4027afc65a87b0a5e43e86742b8ca0823584c6788fd0',
            hash: '0xda3be87732110de6c1354c83770aae630ede9ac308d9f7b399ecfba23d923384'
        }
    }
```

## call

```javascript
    meterify.eth.call(callObject [, defaultBlock] [, callback])
```

Executes a message call transaction, which is directly executed in the VM of the node, but never mined into the blockchain.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| callObject | `Object` | A transaction object see [`meterify.eth.sendTransaction`](meterify.eth.md#sendtransaction), with the difference that for calls the `from` property is optional as well. |
| defaultBlock | `Number` or `String` | \(optional\) If you pass this parameter it will not use the default block set with [`meterify.eth.defaultBlock`](meterify.eth.md). |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<string>` | The returned data of the call, e.g. a smart contract functions return value. |

**Example:**

```javascript
    meterify.eth.call({
        to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", // contract address
        data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
    }).then(console.log);
    > "0x000000000000000000000000000000000000000000000000000000000000000a"
```

## estimateGas

```text
    meterify.eth.estimateGas(callObject [, callback])
```

Executes a message call or transaction and returns the amount of the gas used.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| callObject  | `Object` | A transaction object see [`meterify.eth.sendTransaction`](meterify.eth.md#sendtransaction), with the difference that for calls the `from` property is optional as well. |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<number>` | The used gas for the simulated call/transaction. |

**Example:**

```javascript
    meterify.eth.estimateGas({
        to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
        data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
    }).then(console.log);
    > "0x0000000000000000000000000000000000000000000000000000000000000015"
```

## getPastLogs

```javascript
    meterify.eth.getPastLogs(options [, callback])
```

Gets past logs, matching the given options.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| options | `Object`  | The filter options as follows: |
| callback | `Function` | \(optional\) Optional callback, |

**The `options` object:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `fromBlock` | `Number` or `String` | The number of the earliest block \(`"latest"` may be given to mean the most recent and `"pending"` currently mining, block\). By default `"latest"`. |
| `toBlock` | `Number` or `String` | The number of the latest block \(`"latest"` may be given to mean the most recent and `"pending"` currently mining, block\). By default `"latest"`. |
| `address` | `String` or `Array` | An address or a list of addresses to only get logs from particular account\(s\). |
| `topics` | `Array` | An array of values which must each appear in the log entries. The order is important, if you want to leave topics out use `null`, e.g. `[null, '0x12...']`. You can also pass an array for each topic with options for that topic e.g. `[null, ['option1', 'option2']]` |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<Array>` | Array of log objects. |

**The structure of the returned event `Object` in the `Array` looks as follows:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | `String` | From which this event originated from. |
| `data` | `String` | The data containing non-indexed log parameter. |
| `topics` | `Array` | An array with max 4 32 Byte topics, topic 1-3 contains indexed parameters of the log. |
| `logIndex` | `Number` | Integer of the event index position in the block. |
| `transactionIndex` | `Number` | Integer of the transaction's index position, the event was created in. |
| `transactionHash` 32 Bytes | `String` | Hash of the transaction this event was created in. |
| `blockHash` 32 Bytes | `String` | Hash of the block where this event was created in. `null` when its still pending. |
| `blockNumber` | `Number` | The block number where this log was created in. `null` when still pending. |

**Example:**

```javascript
    meterify.eth.getPastLogs({
        address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
        topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
    }).then(console.log);
    > [{
        data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
        topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
        logIndex: 0,
        transactionIndex: 0,
        transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
        blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
        blockNumber: 1234,
        address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
    },{...}]
```

## getWork

```javascript
    meterify.eth.getWork([callback])
```

Gets work for miners to mine on. Returns the hash of the current block, the seedHash, and the boundary condition to be met \("target"\).

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<Array>` | The mining work with the following structure: |

| Type | Description |
| :--- | :--- |
| `String` 32 Bytes - at **index 0** | current block header pow-hash |
| `String` 32 Bytes - at **index 1** | the seed hash used for the DAG. |
| `String` 32 Bytes - at **index 2** | the boundary condition \("target"\), 2^256 / difficulty. |

**Example:**

```javascript
    meterify.eth.getWork().then(console.log);
    > [
      "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
      "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
      "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
    ]
```

## submitWork

```text
    meterify.eth.submitWork(nonce, powHash, digest, [callback])
```

Used for submitting a proof-of-work solution.

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| nonce | `String` 8 Bytes | The nonce found \(64 bits\) |
| powHash | `String` 32 Bytes | The header's pow-hash \(256 bits\) |
| digest | `String` 32 Bytes | The mix digest \(256 bits\) |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<boolean>` | Returns `true` if the provided solution is valid, otherwise false. |

**Example:**

```javascript
    meterify.eth.submitWork([
        "0x0000000000000001",
        "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
    ])
    .then(console.log);
    > true
```

## requestAccounts

```javascript
    meterify.eth.requestAccounts([callback])
```

This method will request/enable the accounts from the current environment it is running \(Metamask, Status or Mist\). It doesn't work if you're connected to a node with a default Web3.js provider \(WebsocketProvider, HttpProvidder and IpcProvider\). This method will only work if you're using the injected provider from an application like Status, Mist or Metamask.

For further information about the behavior of this method please read the EIP of it: [`EIP-1102`](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md)

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<Array>` | Returns an array of enabled accounts. |

**Example:**

```javascript
    meterify.eth.requestAccounts().then(console.log);
    > ['0aae0B295369a9FD31d5F28D9Ec85E40f4cb692BAf', 0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe]
```

## getChainId

```javascript
    meterify.eth.getChainId([callback])
```

Returns the chain ID of the current connected node as described in [`EIP-695`](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-695.md).

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<Number>` | Returns chain ID. |

**Example:**

```javascript
    meterify.eth.getChainId().then(console.log);
    > 61
```

## getNodeInfo

```javascript
    meterify.eth.getNodeInfo([callback])
```

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<String>` | The current client version. |

**Example:**

```javascript
    meterify.eth.getNodeInfo().then(console.log);
    > "Mist/v0.9.3/darwin/go1.4.1"
```

## getProof

```javascript
    meterify.eth.getProof(address, storageKey, blockNumber, [callback])
```

Returns the account and storage-values of the specified account including the Merkle-proof as described in [`EIP-1186`](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1186.md).

**Parameters:**

| Property | Type | Description |
| :--- | :--- | :--- |
| address | `String` 20 Bytes | The Address of the account or contract. |
| storageKey | `Array` 32 Bytes | Array of storage-keys which should be proofed and included. See [`meterify.eth.getStorageAt`](meterify.eth.md#getstorageat). |
| blockNumber | `Number` or `String` or `"latest"` or `"earliest"` | Integer block number, or the string "latest" or "earliest". |
| callback | `Function` | \(optional\) Optional callback, returns an error object as first parameter and the result as second. |

**Returns:**

| Type | Description |
| :--- | :--- |
| `Promise<Object>` | A account object. |

**The account object:**

| Property | Description |
| :--- | :--- |
| `balance` | The balance of the account. See [`meterify.eth.getBalance`](meterify.eth.md#getbalance). |
| `codeHash` | Hash of the code of the account. For a simple Account without code it will return "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" |
| `nonce` | Nonce of the account. |
| `storageHash` | SHA3 of the StorageRoot. All storage will deliver a MerkleProof starting with this rootHash. |
| `accountProof` | Array of rlp-serialized MerkleTree-Nodes, starting with the stateRoot-Node, following the path of the SHA3 \(address\) as key. |
| `storageProof` | Array of storage-entries as requested. |
| `key` | The requested storage key. |
| `value` | The storage value. |

**Example:**

```javascript
    meterify.eth.getProof(
        "0x1234567890123456789012345678901234567890",
        ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
        "latest"
    ).then(console.log);
    > {
        "address": "0x1234567890123456789012345678901234567890",
        "accountProof": [
            "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
            "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
            "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
            "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
            ],
            "balance": 0,
            "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
            "nonce": 0,
            "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
            "storageProof": [
            {
                "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
                "value": '0',
                "proof": []
            },
            {
                "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
                "value": '0',
                "proof": []
            }
        ]
    }
```

