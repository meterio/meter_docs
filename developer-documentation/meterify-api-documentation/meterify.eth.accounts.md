# meterify.eth.accounts

The `meterify.eth.accounts` contains functions to generate Meter accounts and sign transactions and data.&#x20;

Note: Take precautions to clear memory properly, store the private keys safely, and test transaction receiving and sending functionality properly before using in production!

```javascript
import {Accounts} from 'web3-eth-accounts';

    // Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
    // for accounts.signTransaction().
    const accounts = new Accounts('ws://wstest.meter.io', null, options);
```

## create   &#x20;

```
meterify.eth.accounts.create([entropy]);
```

Generates an account object with private key and public key.

**Examples:**

```javascript
meterify.eth.accounts.create();
    > {
        address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
        privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }

    meterify.eth.accounts.create('2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567');
    > {
        address: "0xF2CD2AA0c7926743B1D4310b2BC984a0a453c3d4",
        privateKey: "0xd7325de5c2c1cf0009fac77d3d04a9c004b038883446b065871bc3e831dcd098",
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }

    meterify.eth.accounts.create(web3.utils.randomHex(32));
    > {
        address: "0xe78150FaCD36E8EB00291e251424a0515AA1FF05",
        privateKey: "0xcc505ee6067fba3f6fc2050643379e190e087aeffe5d958ab9f2f3ed3800fa4e",
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }
```

**Parameters:**

1. `entropy` - `String`(optional): A random string to increase entropy. If given it should be at least 32 characters. If none is given a random string will be generated using [`randomhex`](meterify.utils.md#randomhex).

**Returns:**

`Object` - The account object with the following structure:

1. `address` - `String`: The account address.&#x20;
2. `privateKey` - `String`: The accounts private key. This should never be shared or stored unencrypted in local storage! Also make sure to `null` the memory after usage.&#x20;
3. `signTransaction(tx [, callback])` - `Function`: The function to sign transactions. See [`meterify.eth.accounts.signTransaction()`](meterify.eth.accounts.md#signtransaction) for more.&#x20;
4. `sign(data)` - `Function`: The function to sign transactions. See [`meterify.eth.accounts.sign()`](meterify.eth.accounts.md#sign) for more.

## privateKeyToAccount <a href="#privatekeytoaccount" id="privatekeytoaccount"></a>

```javascript
meterify.eth.accounts.privateKeyToAccount(privateKey);
```

Creates an account object from a private key.



#### Parameters <a href="#parameters-2" id="parameters-2"></a>

```javascript

    meterify.eth.accounts.privateKeyToAccount('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709');
    > {
        address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
        privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }
```

**Parameters:**

1. `privateKey` - `String`: The private key hex string beginning with `0x`.

**Returns:**

`Object` - The account object with the [`structure seen here`](meterify.eth.accounts.md#create).

## signTransaction

```javascript
meterify.eth.accounts.signTransaction(tx, privateKey [, callback]);
```

Signs a Meter transaction with a given private key.

#### Parameters <a href="#parameters-2" id="parameters-2"></a>

```javascript
meterify.eth.accounts.signTransaction({
        to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
        value: '1000000000',
        gas: 2000000,
        gasPrice: '234567897654321',
        nonce: 0,
        chainId: 1
    }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
    .then(console.log);
```

#### Parameters <a href="#parameters-2" id="parameters-2"></a>

```javascript
> {
        messageHash: '0x6893a6ee8df79b0f5d64a180cd1ef35d030f3e296a5361cf04d02ce720d32ec5',
        r: '0x9ebb6ca057a0535d6186462bc0b465b561c94a295bdb0621fc19208ab149a9c',
        s: '0x440ffd775ce91a833ab410777204d5341a6f9fa91216a6f3ee2c051fea6a0428',
        v: '0x25',
        rawTransaction: '0xf86a8086d55698372431831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a009ebb6ca057a0535d6186462bc0b465b561c94a295bdb0621fc19208ab149a9ca0440ffd775ce91a833ab410777204d5341a6f9fa91216a6f3ee2c051fea6a0428',
        transactionHash: '0xd8f64a42b57be0d565f385378db2f6bf324ce14a594afc05de90436e9ce01f60'
    }
```

#### Parameters <a href="#parameters-2" id="parameters-2"></a>

1. `tx` - `Object`: The transaction's properties object as follows:
   1. `nonce` - `String`: (optional) The nonce to use when signing this transaction. Default will use [`meterify.eth.getTransactionCount()`](meterify.eth.md#gettransactioncount).
   2. `chainId` - `String`: (optional) The chain id to use when signing this transaction. Default will use [`meterify.eth.net.getChainId()`](meterify.eth.md#getchainid).
   3. `to` - `String`: (optional) The receiver of the transaction, can be empty when deploying a contract.
   4. `data` - `String`: (optional) The call data of the transaction, can be empty for simple value transfers.
   5. `value` - `String`: (optional) The value of the transaction in wei.
   6. `gasPrice` - `String`: (optional) The gas price set by this transaction. If empty, it will use [`meterify.eth.getGasPrice()`](meterify.eth.md#getgasprice)``
   7. `gas` - `String`: The gas provided by the transaction.
2. `privateKey` - `String`: The private key to sign with.
3. `callback` - `Function`: (optional) Optional callback, returns an error object as first parameter and the result as second.

Returns

`Promise` returning `Object`: The signed data RLP encoded transaction, or if `returnSignature` is `true` the signature values as follows:&#x20;

1. `messageHash` - `String`: The hash of the given message.&#x20;
2. `r` - `String`: First 32 bytes of the signature
3. `s` - `String`: Next 32 bytes of the signature
4. `v` - `String`: Recovery value + 27
5. `rawTransaction` - `String`: The RLP encoded transaction, ready to be send using [`meterify.eth.sendSignedTransaction`](meterify.eth.md#sendsignedtransaction).
6. `transactionHash` - `String`: The transaction hash for the RLP encoded transaction.

## recoverTransaction <a href="#recovertransaction" id="recovertransaction"></a>

```javascript
    meterify.eth.accounts.recoverTransaction(rawTransaction);
```

Recovers the Meter address which was used to sign the given RLP encoded transaction.

**Example:**

```javascript
    meterify.eth.accounts.recoverTransaction('0xf86180808401ef364594f0109fc8df283027b6285cc889f5aa624eac1f5580801ca031573280d608f75137e33fc14655f097867d691d5c4c44ebe5ae186070ac3d5ea0524410802cdc025034daefcdfa08e7d2ee3f0b9d9ae184b2001fe0aff07603d9');
    > "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55"
```

**Parameters:**

1. `signature` - `String`: The RLP encoded transaction.

**Returns:**

`String`: The Meter address used to sign this transaction.

## hashMessage <a href="#hashmessage" id="hashmessage"></a>

```javascript
    meterify.eth.accounts.hashMessage(message);
```

Hashes the given message to be passed [`meterify.eth.accounts.recover()`](meterify.eth.accounts.md#recover) function.&#x20;

The data will be UTF-8 HEX decoded and enveloped as follows: `"\x19Ethereum Signed Message:\n" + message.length + message` and hashed using keccak256.

**Example:**

```javascript

    meterify.eth.accounts.hashMessage("Hello World")
    > "0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"

    // the below results in the same hash
    meterify.eth.accounts.hashMessage(web3.utils.utf8ToHex("Hello World"))
    > "0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"
```

**Parameters:**

1. `message` - `String`: A message to hash, if it's HEX it will be UTF8 decoded before.

**Returns:**

`String`: The hashed message

## sign   &#x20;

```javascript
meterify.eth.accounts.sign(data, privateKey);
```

Signs arbitrary data. This data is before UTF-8 HEX decoded and enveloped as follows: `"\x19Ethereum Signed Message:\n" + message.length + message`.

#### Parameters <a href="#parameters-2" id="parameters-2"></a>

```javascript
meterify.eth.accounts.sign('Some data', '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');
    > {
        message: 'Some data',
        messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
        v: '0x1c',
        r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
        s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
        signature: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c'
    }
```

**Parameters:**

1. `data` - `String`: The data to sign.&#x20;
2. `privateKey` - `String`: The private key to sign with.

**Returns:**

`Object`: The signed data RLP encoded signature, or if `returnSignature` is `true` the signature values as follows:&#x20;

1. `message` - `String`: The the given message.&#x20;
2. `messageHash` - `String`: The hash of the given message.
3. `r` - `String`: First 32 bytes of the signature.
4. `s` - `String`: Next 32 bytes of the signature.
5. `v` - `String`: Recovery value + 27.

## recover   &#x20;

```javascript
meterify.eth.accounts.recover(signatureObject);    
meterify.eth.accounts.recover(message, signature [, preFixed]);    
meterify.eth.accounts.recover(message, v, r, s [, preFixed]);
```

Recovers the Meter address which was used to sign the given data.

#### Parameters <a href="#parameters-2" id="parameters-2"></a>

```javascript
meterify.eth.accounts.recover({
        messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
        v: '0x1c',
        r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
        s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029'
    })
    > "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"

    // message, signature
    meterify.eth.accounts.recover('Some data', '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c');
    > "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"

    // message, v, r, s
    meterify.eth.accounts.recover('Some data', '0x1c', '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd', '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029');
    > "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"
```

#### Parameters: <a href="#parameters-2" id="parameters-2"></a>

1. `message` or `signatureObject` - `String` or `Object`: Either signed message or hash, or the signature object as following values:
   1. `messageHash` - `String`: The hash of the given message already prefixed with `"\x19Ethereum Signed Message:\n" + message.length + message`.
   2. `r` - `String`: First 32 bytes of the signature.
   3. `s` - `String`: Next 32 bytes of the signature.
   4. `v` - `String`: Recovery value + 27
2. `signature` - `String`: The raw RLP encoded signature, OR parameter 2-4 as v, r, s values.
3. `preFixed` - `Boolean` (optional, default: `false`): If the last parameter is `true`, the given message will NOT automatically be prefixed with `"\x19Ethereum Signed Message:\n" + message.length + message`, and assumed to be already prefixed.

**Returns:**

`String`: The Meter address used to sign this data.

## encrypt   &#x20;

```javascript
meterify.eth.accounts.encrypt(privateKey, password);
```

Encrypts a private key to the web3 keystore v3 standard.

**Example:**

```javascript
meterify.eth.accounts.encrypt('0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318', 'test!')
    > {
        version: 3,
        id: '04e9bcbb-96fa-497b-94d1-14df4cd20af6',
        address: '2c7536e3605d9c16a7a3d7b1898e529396a65c23',
        crypto: {
            ciphertext: 'a1c25da3ecde4e6a24f3697251dd15d6208520efc84ad97397e906e6df24d251',
            cipherparams: { iv: '2885df2b63f7ef247d753c82fa20038a' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams: {
                dklen: 32,
                salt: '4531b3c174cc3ff32a6a7a85d6761b410db674807b2d216d022318ceee50be10',
                n: 262144,
                r: 8,
                p: 1
            },
            mac: 'b8b010fff37f9ae5559a352a185e86f9b9c1d7f7a9f1bd4e82a5dd35468fc7f6'
        }
    }
```

**Parameters:**

1. `privateKey` - `String`: The private key to encrypt.`password`&#x20;
2. `String`: The password used for encryption.

**Returns:**

`Object`: The encrypted keystore v3 JSON.

## decrypt   &#x20;

```javascript
meterify.eth.accounts.decrypt(keystoreJsonV3, password);
```

Decrypts a keystore v3 JSON, and creates the account.

**Example:**

```javascript
meterify.eth.accounts.decrypt({
        version: 3,
        id: '04e9bcbb-96fa-497b-94d1-14df4cd20af6',
        address: '2c7536e3605d9c16a7a3d7b1898e529396a65c23',
        crypto: {
            ciphertext: 'a1c25da3ecde4e6a24f3697251dd15d6208520efc84ad97397e906e6df24d251',
            cipherparams: { iv: '2885df2b63f7ef247d753c82fa20038a' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams: {
                dklen: 32,
                salt: '4531b3c174cc3ff32a6a7a85d6761b410db674807b2d216d022318ceee50be10',
                n: 262144,
                r: 8,
                p: 1
            },
            mac: 'b8b010fff37f9ae5559a352a185e86f9b9c1d7f7a9f1bd4e82a5dd35468fc7f6'
        }
    }, 'test!');
    > {
        address: "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23",
        privateKey: "0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318",
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }
```

**Parameters:**

1. `keystoreJsonV3` - `String`: The encrypted keystore v3 JSON.
2. `password` - `String`: The password used for encryption.

**Returns:**

`Object`: The decrypted account.

## wallet   &#x20;

```javascript
meterify.eth.accounts.wallet;
```

Contains an in memory wallet with multiple accounts. These accounts can be used when using [`meterify.eth.sendTransaction()`](meterify.eth.md#sendtransaction).

**Example:**

```javascript

    meterify.eth.accounts.wallet;
    > Wallet {
        0: {...}, // account by index
        "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},  // same account by address
        "0xf0109fc8df283027b6285cc889f5aa624eac1f55": {...},  // same account by address lowercase
        1: {...},
        "0xD0122fC8DF283027b6285cc889F5aA624EaC1d23": {...},
        "0xd0122fc8df283027b6285cc889f5aa624eac1d23": {...},

        add: function(){},
        remove: function(){},
        save: function(){},
        load: function(){},
        clear: function(){},

        length: 2,
    }
```

### wallet.create <a href="#wallet-create" id="wallet-create"></a>

```javascript
meterify.eth.accounts.wallet.create(numberOfAccounts [, entropy]);
```

Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.

**Example:**

```javascript

    meterify.eth.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');
    > Wallet {
        0: {...},
        "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},
        "0xf0109fc8df283027b6285cc889f5aa624eac1f55": {...},
        ...
    }
```

**Parameters:**

1. `numberOfAccounts` - `Number`: Number of accounts to create. Leave empty to create an empty wallet.
2. `entropy` - `String`(optional): A string with random characters as additional entropy when generating accounts. If given it should be at least 32 characters.

**Returns:**

`Object`: The wallet object.

### wallet.add <a href="#wallet-add" id="wallet-add"></a>

```javascript
meterify.eth.accounts.wallet.add(account);
```

Adds an account using a private key or account object to the wallet.

**Example:**

```javascript

    meterify.eth.accounts.wallet.add('0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');
    > {
        index: 0,
        address: '0x2c7536E3605D9C16a7a3D7b1898e529396a65c23',
        privateKey: '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318',
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }

    meterify.eth.accounts.wallet.add({
        privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
        address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01'
    });
    > {
        index: 0,
        address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
        privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
        signTransaction: function(tx){...},
        sign: function(data){...},
        encrypt: function(password){...}
    }
```

**Parameters:**

1. `account` - `String` or `Object`: A private key or account object created with [`meterify.eth.accounts.create()`](meterify.eth.accounts.md#create).

**Returns:**

`Object`: The added account.

### wallet.remove <a href="#wallet-remove" id="wallet-remove"></a>

```javascript
    meterify.eth.accounts.wallet.remove(account);
```

Removes an account from the wallet.

**Example:**

```javascript

    meterify.eth.accounts.wallet;
    > Wallet {
        0: {...},
        "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...}
        1: {...},
        "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01": {...}
        ...
    }

    meterify.eth.accounts.wallet.remove('0xF0109fC8DF283027b6285cc889F5aA624EaC1F55');
    > true

    meterify.eth.accounts.wallet.remove(3);
    > false
```

**Parameters:**

1. `account` - `String` or `Number`: The account address, or index in the wallet.

**Returns:**

`Boolean`: `true` if the wallet was removed. `false` if it couldn't be found.

### wallet.clear <a href="#wallet-clear" id="wallet-clear"></a>

```javascript
    meterify.eth.accounts.wallet.clear();
```

Securely empties the wallet and removes all its accounts.

**Example:**

```javascript

    meterify.eth.accounts.wallet.clear();
    > Wallet {
        add: function(){},
        remove: function(){},
        save: function(){},
        load: function(){},
        clear: function(){},

        length: 0
    }
```

**Parameters:**

none

**Returns:**

`Object`: The wallet object.

### wallet.encrypt <a href="#wallet-encrypt" id="wallet-encrypt"></a>

```javascript
    meterify.eth.accounts.wallet.encrypt(password);
```

Encrypts all wallet accounts to an array of encrypted keystore v3 objects.

**Example:**

```javascript

    meterify.eth.accounts.wallet.encrypt('test');
    > [ { version: 3,
        id: 'dcf8ab05-a314-4e37-b972-bf9b86f91372',
        address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
        crypto:
         { ciphertext: '0de804dc63940820f6b3334e5a4bfc8214e27fb30bb7e9b7b74b25cd7eb5c604',
           cipherparams: [Object],
           cipher: 'aes-128-ctr',
           kdf: 'scrypt',
           kdfparams: [Object],
           mac: 'b2aac1485bd6ee1928665642bf8eae9ddfbc039c3a673658933d320bac6952e3' } },
      { version: 3,
        id: '9e1c7d24-b919-4428-b10e-0f3ef79f7cf0',
        address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
        crypto:
         { ciphertext: 'd705ebed2a136d9e4db7e5ae70ed1f69d6a57370d5fbe06281eb07615f404410',
           cipherparams: [Object],
           cipher: 'aes-128-ctr',
           kdf: 'scrypt',
           kdfparams: [Object],
           mac: 'af9eca5eb01b0f70e909f824f0e7cdb90c350a802f04a9f6afe056602b92272b' } }
    ]
```

**Parameters:**

1. `password` - `String`: The password which will be used for encryption.

**Returns:**

`Array`: The encrypted keystore v3.

### wallet.decrypt <a href="#wallet-decrypt" id="wallet-decrypt"></a>

```javascript
    meterify.eth.accounts.wallet.decrypt(keystoreArray, password);
```

Decrypts keystore v3 objects.

**Example:**

```javascript

    meterify.eth.accounts.wallet.decrypt([
      { version: 3,
      id: '83191a81-aaca-451f-b63d-0c5f3b849289',
      address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
      crypto:
       { ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
         cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
         cipher: 'aes-128-ctr',
         kdf: 'scrypt',
         kdfparams:
          { dklen: 32,
            salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
            n: 262144,
            r: 8,
            p: 1 },
         mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' } },
       { version: 3,
      id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
      address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
      crypto:
       { ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
         cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
         cipher: 'aes-128-ctr',
         kdf: 'scrypt',
         kdfparams:
          { dklen: 32,
            salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
            n: 262144,
            r: 8,
            p: 1 },
         mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0' } }
    ], 'test');
    > Wallet {
        0: {...},
        1: {...},
        "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},
        "0xD0122fC8DF283027b6285cc889F5aA624EaC1d23": {...}
        ...
    }
```

**Parameters:**

1. `keystoreArray` - `Array`: The encrypted keystore v3 objects to decrypt.
2. `password` - `String`: The password which will be used for encryption.

**Returns:**

`Object`: The wallet object.

### wallet.save <a href="#wallet-save" id="wallet-save"></a>

```javascript
    meterify.eth.accounts.wallet.save(password [, keyName]);
```

Stores the wallet encrypted and as string in local storage.

**Example:**

```javascript

    meterify.eth.accounts.wallet.save('test#!$');
    > true
```

Note: Browser only.

**Parameters:**

1. `password` - `String`: The password to encrypt the wallet.
2. `keyName` - `String`: (optional) The key used for the local storage position, defaults to `"web3js_wallet"`.

**Returns:**

`Boolean`

### wallet.load <a href="#wallet-load" id="wallet-load"></a>

```javascript
meterify.eth.accounts.wallet.load(password [, keyName]);
```

Loads a wallet from local storage and decrypts it.

**Example:**

```javascript

    meterify.eth.accounts.wallet.load('test#!$', 'myWalletKey');
    > Wallet {
        0: {...},
        1: {...},
        "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},
        "0xD0122fC8DF283027b6285cc889F5aA624EaC1d23": {...}
        ...
    }
```

Note: Browser only.

**Parameters:**

1. `password` - `String`: The password to decrypt the wallet.
2. `keyName` - `String`: (optional) The key used for the local storage position, defaults to `"web3js_wallet"`.

**Returns:**

`Object`: The wallet object.
