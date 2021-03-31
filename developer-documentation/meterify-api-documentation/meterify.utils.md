# meterify.utils

This package provides utility functions for dapps and other packages.

## randomHex

```javascript
    meterify.utils.randomHex(size)
```

The [randomHex](https://github.com/frozeman/randomHex) library to generate cryptographically strong pseudo-random HEX strings from a given byte size.

**Example:**

```javascript

    meterify.utils.randomHex(32)
    > "0xa5b9d60f32436310afebcfda832817a68921beb782fabf7915cc0460b443116a"

    meterify.utils.randomHex(4)
    > "0x6892ffc6"

    meterify.utils.randomHex(2)
    > "0x99d6"

    meterify.utils.randomHex(1)
    > "0x9a"

    meterify.utils.randomHex(0)
    > "0x"
```

**Parameters:**

1. `size` - `Number`: The byte size for the HEX string, e.g. `32` will result in a 32 bytes HEX string with 64 characters preficed with "0x".

**Returns:**

`String`: The generated random HEX string.

## BN    

```text
meterify.utils.BN(mixed)
```

The [BN.js](https://github.com/indutny/bn.js/) library for calculating with big numbers in JavaScript. See the [BN.js documentation](https://github.com/indutny/bn.js/) for details.

**Example:**

```javascript

    const BN = meterify.utils.BN;

    new BN(1234).toString();
    > "1234"

    new BN('1234').add(new BN('1')).toString();
    > "1235"

    new BN('0xea').toString();
    > "234"
```

Note: For safe conversion of many types, including [BigNumber.js](http://mikemcl.github.io/bignumber.js/), use [`utils.toBN`](meterify.utils.md#tobn).

**Parameters:**

1. `value` - `String|Number`: A number, number string or HEX string to convert to a BN object.

**Returns:**

`Object`: The [`BN.js`](https://github.com/indutny/bn.js/)\_ instance.

## isBN

```javascript

    meterify.utils.isBN(bn)
```

Checks if a given value is a [`BN.js`](https://github.com/indutny/bn.js/) instance.

**Example:**

```javascript

    const number = new BN(10);

    meterify.utils.isBN(number);
    > true
```

**Parameters:**

1. `bn` - `Object`: An [`BN.js`](https://github.com/indutny/bn.js/) instance.

**Returns:**

`Boolean`

## isBigNumber

```javascript
    meterify.utils.isBigNumber(bignumber)
```

Checks if a given value is a [BigNumber.js](http://mikemcl.github.io/bignumber.js/) instance.

**Example:**

```javascript

    const number = new BigNumber(10);

    meterify.utils.isBigNumber(number);
    > true
```

**Parameters:**

1. `BigNumber` - `Object`: A [BigNumber.js](http://mikemcl.github.io/bignumber.js/) instance.

**Returns:**

`Boolean`

## keccak256

```javascript

    meterify.utils.keccak256(string)
    meterify.utils.sha3(string) // ALIAS
```

Will calculate the keccak256 of the input.

**Example:**

```javascript

    meterify.utils.keccak256('234'); // taken as string
    > "0xc1912fee45d61c87cc5ea59dae311904cd86b84fee17cc96966216f811ce6a79"

    meterify.utils.keccak256(new BN('234'));
    > "0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a"

    meterify.utils.keccak256(234);
    > null // can't calculate the hash of a number

    meterify.utils.keccak256(0xea); // same as above, just the HEX representation of the number
    > null

    meterify.utils.keccak256('0xea'); // will be converted to a byte array first, and then hashed
    > "0x2f20677459120677484f7104c76deb6846a2c071f9b3152c103bb12cd54d1a4a"
```

Note: To mimic the keccak256 behavior of Solidity, use [soliditySha3](meterify.utils.md#soliditysha3).

**Parameters:**

1. `string` - `String`: A string to hash.

**Returns:**

`String`: the result hash.

## soliditySha3    

```javascript
meterify.utils.soliditySha3(param1 [, param2, ...])
```

Will calculate the sha3 of given input parameters in the same way solidity would. This means arguments will be ABI converted and tightly packed before being hashed.

**Example:**

```javascript
meterify.utils.soliditySha3('234564535', '0xfff23243', true, -10);
    // auto detects:        uint256,      bytes,     bool,   int256
    > "0x3e27a893dc40ef8a7f0841d96639de2f58a132be5ae466d40087a2cfa83b7179"

    meterify.utils.soliditySha3('Hello!%'); // auto detects: string
    > "0x661136a4267dba9ccdf6bfddb7c00e714de936674c4bdb065a531cf1cb15c7fc"

    meterify.utils.soliditySha3('234'); // auto detects: uint256
    > "0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

    meterify.utils.soliditySha3(0xea); // same as above
    > "0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

    meterify.utils.soliditySha3(new BN('234')); // same as above
    > "0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

    meterify.utils.soliditySha3({type: 'uint256', value: '234'})); // same as above
    > "0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

    meterify.utils.soliditySha3({t: 'uint', v: new BN('234')})); // same as above
    > "0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

    meterify.utils.soliditySha3('0x407D73d8a49eeb85D32Cf465507dd71d507100c1');
    > "0x4e8ebbefa452077428f93c9520d3edd60594ff452a29ac7d2ccc11d47f3ab95b"

    meterify.utils.soliditySha3({t: 'bytes', v: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1'});
    > "0x4e8ebbefa452077428f93c9520d3edd60594ff452a29ac7d2ccc11d47f3ab95b" // same result as above

    meterify.utils.soliditySha3({t: 'address', v: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1'});
    > "0x4e8ebbefa452077428f93c9520d3edd60594ff452a29ac7d2ccc11d47f3ab95b" // same as above, but will do a checksum check, if its multi case

    meterify.utils.soliditySha3({t: 'bytes32', v: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1'});
    > "0x3c69a194aaf415ba5d6afca734660d0a3d45acdc05d54cd1ca89a8988e7625b4" // different result as above

    meterify.utils.soliditySha3({t: 'string', v: 'Hello!%'}, {t: 'int8', v:-23}, {t: 'address', v: '0x85F43D8a49eeB85d32Cf465507DD71d507100C1d'});
    > "0xa13b31627c1ed7aaded5aecec71baf02fe123797fffd45e662eac8e06fbe4955"
```

**Parameters:**

1. `paramX` - `Mixed`: Any type, or an object with `{type: 'uint', value: '123456'}` or `{t: 'bytes', v: '0xfff456'}`. Basic types are autodetected as follows:
   1. `String` non numerical UTF-8 string is interpreted as `string`.
   2. `String|Number|BN|HEX` positive number is interpreted as `uint256`.
   3. `String|Number|BN` negative number is interpreted as `int256`. 
   4. `Boolean` as `bool`. 
   5. `String` HEX string with leading `0x` is interpreted as `bytes`. 
   6. `HEX` HEX number representation is interpreted as `uint256`.

**Returns:**

`String`: the result hash.

## isHex    

```javascript
meterify.utils.isHex(hex)
```

Checks if a given string is a HEX string.

**Example:**

```javascript
    meterify.utils.isHex('0xc1912');
    > true

    meterify.utils.isHex(0xc1912);
    > true

    meterify.utils.isHex('c1912');
    > true

    meterify.utils.isHex(345);
    > true // this is tricky, as 345 can be a a HEX representation or a number, be careful when not having a 0x in front!

    meterify.utils.isHex('0xZ1912');
    > false

    meterify.utils.isHex('Hello');
    > false
```

**Parameters:**

1. `hex` - `String|HEX`: The given HEX string.

**Returns:**

`Boolean`

## isHexStrict    

```javascript
meterify.utils.isHexStrict(hex)
```

Checks if a given string is a HEX string. Difference to `meterify.utils.isHex()` is that it expects HEX to be prefixed with `0x`.

**Example:**

```javascript
    meterify.utils.isHexStrict('0xc1912');
    > true

    meterify.utils.isHexStrict(0xc1912);
    > false

    meterify.utils.isHexStrict('c1912');
    > false

    meterify.utils.isHexStrict(345);
    > false // this is tricky, as 345 can be a a HEX representation or a number, be careful when not having a 0x in front!

    meterify.utils.isHexStrict('0xZ1912');
    > false

    meterify.utils.isHex('Hello');
    > false
```

**Parameters:**

1. `hex` - `String|HEX`: The given HEX string.

**Returns:**

`Boolean`

## isAddress    

```javascript
meterify.utils.isAddress(address,  [, chainId])
```

Checks if a given string is a valid Meter address. It will also check the checksum, if the address has upper and lowercase letters.

**Example:**

```javascript
    meterify.utils.isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d');
    > true

    meterify.utils.isAddress('c1912fee45d61c87cc5ea59dae31190fffff232d');
    > true

    meterify.utils.isAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D');
    > true // as all is uppercase, no checksum will be checked

    meterify.utils.isAddress('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
    > true

    meterify.utils.isAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
    > false // wrong checksum

    meterify.utils.isAddress('0x5aaEB6053f3e94c9b9a09f33669435E7ef1bEAeD', 30);
    > true
```

**Parameters:**

1. `address` - `String`: An address string.
2. `chainId` - `number` \(optional\): Chain id where checksummed address should be valid, defaults to `null`. [RSKIP-60](https://github.com/rsksmart/RSKIPs/blob/master/IPs/RSKIP60.md) for details.

**Returns:**

`Boolean`

## toChecksumAddress

```javascript
    meterify.utils.toChecksumAddress(address[, chainId])
```

Will convert an upper or lowercase Meter address to a checksum address.

**Example:**

```javascript

    meterify.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d');
    > "0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d"

    meterify.utils.toChecksumAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D');
    > "0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d" // same as above

    meterify.utils.toChecksumAddress('0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed', 30);
    > "0x5aaEB6053f3e94c9b9a09f33669435E7ef1bEAeD"
```

**Parameters:**

1. `address` - `String`: An address string.
2. `chainId` - `number` \(optional\): Chain id where checksummed address should be valid, defaults to `null`. [RSKIP-60](https://github.com/rsksmart/RSKIPs/blob/master/IPs/RSKIP60.md) for details.

**Returns:**

`String`: The checksum address.

## stripHexPrefix

```javascript
     meterify.utils.stripHexPrefix(address)
```

Removes the prefix `0x` from a given hex if it exists.

**Example:**

```javascript
      meterify.utils.stripHexPrefix('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
     > "c1912fEE45d61C87Cc5EA59DaE31190FFFFf232d"
```

**Parameters:**

1. `hex` - `String`: Hex

**Returns:**

`String`: Hex without prefix.

## checkAddressChecksum

```javascript

    meterify.utils.checkAddressChecksum(address [, chainId])
```

Checks the checksum of a given address. Will also return false on non-checksum addresses.

**Example:**

```javascript

    meterify.utils.checkAddressChecksum('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
    > true

    meterify.utils.checkAddressChecksum('0x5aAeb6053F3e94c9b9A09F33669435E7EF1BEaEd', 31);
    > true
```

**Parameters:**

1. `address` - `String`: An address string.
2. `chainId` - `number` \(optional\): Chain id where checksummed address should be valid, defaults to `null`. [RSKIP-60](https://github.com/rsksmart/RSKIPs/blob/master/IPs/RSKIP60.md) for details.

**Returns:**

`Boolean`: `true` when the checksum of the address is valid, `false` if its not a checksum address, or the checksum is invalid.

## toHex

```javascript

    meterify.utils.toHex(mixed)
```

Will auto convert any given value to HEX. Number strings will interpreted as numbers. Text strings will be interpreted as UTF-8 strings.

**Example:**

```javascript

    meterify.utils.toHex('234');
    > "0xea"

    meterify.utils.toHex(234);
    > "0xea"

    meterify.utils.toHex(new BN('234'));
    > "0xea"

    meterify.utils.toHex(new BigNumber('234'));
    > "0xea"

    meterify.utils.toHex('I have 100€');
    > "0x49206861766520313030e282ac"
```

**Parameters:**

1. `value` - `String|Number|BN|BigNumber`: The input to convert to HEX.

**Returns:**

`String`: The resulting HEX string.

## toBN    

```text
meterify.utils.toBN(number)
```

Will safely convert any given value \(including [BigNumber.js](http://mikemcl.github.io/bignumber.js/) instances\) into a [BN.js](https://github.com/indutny/bn.js/) instance, for handling big numbers in JavaScript.

**Example:**

```javascript

    meterify.utils.toBN(1234).toString();
    > "1234"

    meterify.utils.toBN('1234').add(meterify.utils.toBN('1')).toString();
    > "1235"

    meterify.utils.toBN('0xea').toString();
    > "234"
```

Note: For just the [BN.js](https://github.com/indutny/bn.js/) class use [utils.BN](https://docs.meter.io/meterify.utils.html#utils-bn).

**Parameters:**

1. `number` - `String|Number|HEX`: Number to convert to a big number.

**Returns:**

`Object`: The [BN.js](https://github.com/indutny/bn.js/) instance.

## hexToNumberString

```javascript
    meterify.utils.hexToNumberString(hex)
```

Returns the number representation of a given HEX value as a string.

**Example:**

```javascript
    meterify.utils.hexToNumberString('0xea');
    > "234"
```

**Parameters:**

1. `hexString` - `String|HEX`: A string to hash.

**Returns:**

`String`: The number as a string.

## hexToNumber

```javascript

    meterify.utils.hexToNumber(hex)
    meterify.utils.toDecimal(hex) // ALIAS, deprecated
```

Returns the number representation of a given HEX value.

**Example:**

```javascript

    meterify.utils.hexToNumber('0xea');
    > 234
```

Note: This is not useful for big numbers, use [utils.toBN](meterify.utils.md#tobn) instead.

**Parameters:**

1. `hexString` - `String|HEX`: A string to hash.

**Returns:**

`Number`

## numberToHex

```javascript

    meterify.utils.numberToHex(number)
    meterify.utils.fromDecimal(number) // ALIAS, deprecated
```

Returns the HEX representation of a given number value.

**Example:**

```javascript

    meterify.utils.numberToHex('234');
    > '0xea'
```

**Parameters:**

1. `number` - `String|Number|BN|BigNumber`: A number as string or number.

**Returns:**

`String`: The HEX value of the given number.

## hexToUtf8

```javascript

    meterify.utils.hexToUtf8(hex)
    meterify.utils.hexToString(hex) // ALIAS
    meterify.utils.toUtf8(hex) // ALIAS, deprecated
```

Returns the UTF-8 string representation of a given HEX value.

**Example:**

```javascript

    meterify.utils.hexToUtf8('0x49206861766520313030e282ac');
    > "I have 100€"
```

**Parameters:**

1. `hex` - `String`: A HEX string to convert to a UTF-8 string.

**Returns:**

`String`: The UTF-8 string.

## hexToAscii

```javascript

    meterify.utils.hexToAscii(hex)
    meterify.utils.toAscii(hex) // ALIAS, deprecated
```

Returns the ASCII string representation of a given HEX value.

**Example:**

```javascript

    meterify.utils.hexToAscii('0x4920686176652031303021');
    > "I have 100!"
```

**Parameters:**

1. `hex` - `String`: A HEX string to convert to a ASCII string.

**Returns:**

`String`: The ASCII string.

## utf8ToHex    

```javascript
    meterify.utils.utf8ToHex(string)
    meterify.utils.stringToHex(string) // ALIAS
    meterify.utils.fromUtf8(string) // ALIAS, deprecated
```

Returns the HEX representation of a given UTF-8 string.

**Example:**

```javascript
    meterify.utils.utf8ToHex('I have 100€');
    > "0x49206861766520313030e282ac"
```

**Parameters:**

1. `string` - `String`: A UTF-8 string to convert to a HEX string.

**Returns:**

`String`: The HEX string.

## asciiToHex   

```javascript
    meterify.utils.asciiToHex(string)
    meterify.utils.fromAscii(string) // ALIAS, deprecated
```

Returns the HEX representation of a given ASCII string. If you would like to transform an ASCII string into a valid `bytes4`, `bytes8` etc. value then please pass the correct length as the second parameter.

**Example:**

```javascript
    meterify.utils.asciiToHex('I have 100!');
    > "0x4920686176652031303021000000000000000000000000000000000000000000"

    // transforming to a bytes4 value:
    meterify.utils.asciiToHex('yes', 4);

    // transforming to a bytes8 value:
    meterify.utils.asciiToHex('yes', 8);

    //etc.
```

**Parameters:**

1. `string` - `String`: A ASCII string to convert to a HEX string.
2. `length` - `Number`: The length of the returned hex string. The default size is `32` e.g.: `bytes32`.

**Returns:**

`String`: The HEX string.

## hexToBytes    

```javascript
meterify.utils.hexToBytes(hex)
```

Returns a byte array from the given HEX string.

**Example:**

```javascript
    meterify.utils.hexToBytes('0x000000ea');
    > [ 0, 0, 0, 234 ]

    meterify.utils.hexToBytes(0x000000ea);
    > [ 234 ]
```

**Parameters:**

`hex` - `String|HEX`: A HEX to convert.

**Returns:**

`Array`: The byte array.

## bytesToHex

```javascript
meterify.utils.bytesToHex(byteArray)
```

Returns a HEX string from a byte array.

**Example:**

```javascript
    meterify.utils.bytesToHex([ 72, 101, 108, 108, 111, 33, 36 ]);
    > "0x48656c6c6f2125"
```

**Parameters:**

`byteArray` - `Array`: A byte array to convert.

**Returns:**

`String`: The HEX string.

## toWei    

```javascript
meterify.utils.toWei(number [, unit])
```

Converts a Meter value into `wei`.

**Example:**

```javascript
    meterify.utils.toWei('1', 'ether');
    > "1000000000000000000"

    meterify.utils.toWei('1', 'finney');
    > "1000000000000000"

    meterify.utils.toWei('1', 'szabo');
    > "1000000000000"

    meterify.utils.toWei('1', 'shannon');
    > "1000000000"
```

Note: `wei` are the smallest conversion unit, and you should always make calculations in `wei` and convert only for display reasons.

**Parameters:**

1. `number` - `String|BN`: The value.
2. `unit` - `String` \(optional, defaults to `"ether"`\): The ether to convert from. Possible units are:
   1. `noether`: '0'
   2. `wei`: '1'
   3. `kwei`: '1000'
   4. `Kwei`: '1000'
   5. `babbage`: '1000'
   6. `femtoether`: '1000'
   7. `mwei`: '1000000'
   8. `Mwei`: '1000000'
   9. `lovelace`: '1000000'
   10. `picoether`: '1000000'
   11. `gwei`: '1000000000'
   12. `Gwei`: '1000000000'
   13. `shannon`: '1000000000'
   14. `nanoether`: '1000000000'
   15. `nano`: '1000000000'
   16. `szabo`: '1000000000000'
   17. `microether`: '1000000000000'
   18. `micro`: '1000000000000'
   19. `finney`: '1000000000000000'
   20. `milliether`: '1000000000000000'
   21. `milli`: '1000000000000000'
   22. `ether`: '1000000000000000000'
   23. `kether`: '1000000000000000000000'
   24. `grand`: '1000000000000000000000'
   25. `mether`: '1000000000000000000000000'
   26. `gether`: '1000000000000000000000000000'
   27. `tether`: '1000000000000000000000000000000'

**Returns:**

`String|BN`: If a string is given it returns a number string, otherwise a [BN.js](https://github.com/indutny/bn.js/) instance.

## fromWei

```javascript
    meterify.utils.fromWei(number [, unit])
```

Converts any `wei` value into another value.

**Example:**

```javascript

    meterify.utils.fromWei('1', 'ether');
    > "0.000000000000000001"

    meterify.utils.fromWei('1', 'finney');
    > "0.000000000000001"

    meterify.utils.fromWei('1', 'szabo');
    > "0.000000000001"

    meterify.utils.fromWei('1', 'shannon');
    > "0.000000001"
```

Note: `wei` are the smallest conversion unit, and you should always make calculations in wei and convert only for display reasons.

**Parameters:**

1. `number` - `String|BN`: The value in wei.
2. `unit` - `String` \(optional, defaults to `"ether"`\): The ether to convert to. Possible units are:
   * `noether`: '0'
   * `wei`: '1'
   * `kwei`: '1000'
   * `Kwei`: '1000'
   * `babbage`: '1000'
   * `femtoether`: '1000'
   * `mwei`: '1000000'
   * `Mwei`: '1000000'
   * `lovelace`: '1000000'
   * `picoether`: '1000000'
   * `gwei`: '1000000000'
   * `Gwei`: '1000000000'
   * `shannon`: '1000000000'
   * `nanoether`: '1000000000'
   * `nano`: '1000000000'
   * `szabo`: '1000000000000'
   * `microether`: '1000000000000'
   * `micro`: '1000000000000'
   * `finney`: '1000000000000000'
   * `milliether`: '1000000000000000'
   * `milli`: '1000000000000000'
   * `ether`: '1000000000000000000'
   * `kether`: '1000000000000000000000'
   * `grand`: '1000000000000000000000'
   * `mether`: '1000000000000000000000000'
   * `gether`: '1000000000000000000000000000'
   * `tether`: '1000000000000000000000000000000'

**Returns:**

`String`: It always returns a string number.

## unitMap

```javascript

    meterify.utils.unitMap
```

Shows all possible values and their amount in `wei`.

**Example:**

```javascript

    meterify.utils.unitMap
    > {
        noether: '0',
        wei:        '1',
        kwei:       '1000',
        Kwei:       '1000',
        babbage:    '1000',
        femtoether: '1000',
        mwei:       '1000000',
        Mwei:       '1000000',
        lovelace:   '1000000',
        picoether:  '1000000',
        gwei:       '1000000000',
        Gwei:       '1000000000',
        shannon:    '1000000000',
        nanoether:  '1000000000',
        nano:       '1000000000',
        szabo:      '1000000000000',
        microether: '1000000000000',
        micro:      '1000000000000',
        finney:     '1000000000000000',
        milliether: '1000000000000000',
        milli:      '1000000000000000',
        ether:      '1000000000000000000',
        kether:     '1000000000000000000000',
        grand:      '1000000000000000000000',
        mether:     '1000000000000000000000000',
        gether:     '1000000000000000000000000000',
        tether:     '1000000000000000000000000000000'
    }
```

**Return value:**

* `Object` with the following properties:
  * `noether`: '0'
  * `wei`: '1'
  * `kwei`: '1000'
  * `Kwei`: '1000'
  * `babbage`: '1000'
  * `femtoether`: '1000'
  * `mwei`: '1000000'
  * `Mwei`: '1000000'
  * `lovelace`: '1000000'
  * `picoether`: '1000000'
  * `gwei`: '1000000000'
  * `Gwei`: '1000000000'
  * `shannon`: '1000000000'
  * `nanoether`: '1000000000'
  * `nano`: '1000000000'
  * `szabo`: '1000000000000'
  * `microether`: '1000000000000'
  * `micro`: '1000000000000'
  * `finney`: '1000000000000000'
  * `milliether`: '1000000000000000'
  * `milli`: '1000000000000000'
  * `ether`: '1000000000000000000'
  * `kether`: '1000000000000000000000'
  * `grand`: '1000000000000000000000'
  * `mether`: '1000000000000000000000000'
  * `gether`: '1000000000000000000000000000'
  * `tether`: '1000000000000000000000000000000'

## padLeft

```javascript

    meterify.utils.padLeft(string, characterAmount [, sign])
    meterify.utils.leftPad(string, characterAmount [, sign]) // ALIAS
```

Adds a padding on the left of a string. Useful for adding paddings to HEX strings.

**Example:**

```javascript

    meterify.utils.padLeft('0x3456ff', 20);
    > "0x000000000000003456ff"

    meterify.utils.padLeft(0x3456ff, 20);
    > "0x000000000000003456ff"

    meterify.utils.padLeft('Hello', 20, 'x');
    > "xxxxxxxxxxxxxxxHello"
```

**Parameters:**

1. `string` - `String`: The string to add padding on the left.
2. `characterAmount` - `Number`: The number of characters the total string should have.
3. `sign` - `String` \(optional\): The character sign to use, defaults to `"0"`.

**Returns:**

`String`: The padded string.

## padRight

```javascript

    meterify.utils.padRight(string, characterAmount [, sign])
    meterify.utils.rightPad(string, characterAmount [, sign]) // ALIAS
```

Adds a padding on the right of a string, Useful for adding paddings to HEX strings.

**Example:**

```javascript

    meterify.utils.padRight('0x3456ff', 20);
    > "0x3456ff00000000000000"

    meterify.utils.padRight(0x3456ff, 20);
    > "0x3456ff00000000000000"

    meterify.utils.padRight('Hello', 20, 'x');
    > "Helloxxxxxxxxxxxxxxx"
```

**Parameters:**

1. `string` - `String`: The string to add padding on the right.
2. `characterAmount` - `Number`: The number of characters the total string should have.
3. `sign` - `String` \(optional\): The character sign to use, defaults to `"0"`.

**Returns:**

`String`: The padded string.

## toTwosComplement

```javascript

    meterify.utils.toTwosComplement(number)
```

Converts a negative number into a two's complement.

**Example:**

```javascript

    meterify.utils.toTwosComplement('-1');
    > "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

    meterify.utils.toTwosComplement(-1);
    > "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

    meterify.utils.toTwosComplement('0x1');
    > "0x0000000000000000000000000000000000000000000000000000000000000001"

    meterify.utils.toTwosComplement(-15);
    > "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1"

    meterify.utils.toTwosComplement('-0x1');
    > "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
```

**Parameters:**

1. `number` - `Number|String|BigNumber`: The number to convert.

**Returns:**

`String`: The converted hex string.

## getSignatureParameters

```javascript

    meterify.utils.getSignatureParameters(string)
```

Gets the r, s and v values of an ECDSA signature

**Example**

```javascript

    meterify.utils.getSignatureParameters('0x5763ab346198e3e6cc4d53996ccdeca0c941cb6cb70d671d97711c421d3bf7922c77ef244ad40e5262d1721bf9638fb06bab8ed3c43bfaa80d6da0be9bbd33dc1b');
    > "{ r: '0x5763ab346198e3e6cc4d53996ccdeca0c941cb6cb70d671d97711c421d3bf792', s: '0x2c77ef244ad40e5262d1721bf9638fb06bab8ed3c43bfaa80d6da0be9bbd33dc', v: 27 }"
```

**Parameters:**

1. `string` - `String`: An ECDSA signature.

**Returns:**

`Object`: Object containing r,s,v values.

