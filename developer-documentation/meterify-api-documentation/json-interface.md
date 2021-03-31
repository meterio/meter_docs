# json interface

The json interface is a json object describing the Application Binary Interface \(ABI\) for a smart contract. Using this json interface, web3.js is able to create JavaScript object representing the smart contract and its methods and events using the web3.eth.Contract object.

## Specification

**Functions:**

1. `type`: `"function"`, `"constructor"` \(can be omitted, defaulting to `"function"`; `"fallback"` also possible but not relevant in web3.js\).
2. `name`: the name of the function \(only present for function types\).
3. `constant`: `true` if function is specified to not modify the blockchain state.
4. `payable`: `true` if function accepts ether, defaults to `false`
5. `stateMutability`: a string with one of the following values: 
   1. `pure` \(specified to not read blockchain state\)
   2. `view` \(same as `constant` above\)
   3. `nonpayable` and `payable` \(same as `payable` above\)
6. `inputs`: an array of objects, each of which contains:
   1. `name`: the name of the parameter
   2. `type`: the canonical type of the parameter
7. `outputs`: an array of objects same as `inputs`, can be omitted if no outputs exist.

**Events:**

1. `type`: always `"event"`
2. `name`: the name of the event**.**
3. `inputs`: an array of objects, each of which contains:
   1. `name`: the name of the parameter.
   2. `type`: the canonical type of the parameter.
   3. `indexed`: `true` if the field is part of the log's topics, `false` if it one of the log's data segment.
4. `anonymous`: `true` if the event was declared as `anonymous`.

**Example:**

```javascript
contract Test {
        uint a;
        address d = 0x12345678901234567890123456789012;

        function Test(uint testInt)  { a = testInt;}

        event Event(uint indexed b, bytes32 c);

        event Event2(uint indexed b, bytes32 c);

        function foo(uint b, bytes32 c) returns(address) {
            Event(b, c);
            return d;
        }
    }

    // would result in the JSON:
    [{
        "type":"constructor",
        "payable":false,
        "stateMutability":"nonpayable"
        "inputs":[{"name":"testInt","type":"uint256"}],
      },{
        "type":"function",
        "name":"foo",
        "constant":false,
        "payable":false,
        "stateMutability":"nonpayable",
        "inputs":[{"name":"b","type":"uint256"}, {"name":"c","type":"bytes32"}],
        "outputs":[{"name":"","type":"address"}]
      },{
        "type":"event",
        "name":"Event",
        "inputs":[{"indexed":true,"name":"b","type":"uint256"}, {"indexed":false,"name":"c","type":"bytes32"}],
        "anonymous":false
      },{
        "type":"event",
        "name":"Event2",
        "inputs":[{"indexed":true,"name":"b","type":"uint256"},{"indexed":false,"name":"c","type":"bytes32"}],
        "anonymous":false
    }]
```

