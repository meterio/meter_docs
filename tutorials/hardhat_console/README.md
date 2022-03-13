# Hardhat debugging

## Introduction
Debugging solidity contracts can be quite difficult. Our friends from Hardhat developed a solidity contract that allows us to write console messages that can be viewed in the node console. In this tutorial you will learn how to use this great utility.

## Create a new Hardhat project
```shell
npx hardhat
```
Select "Create a basic sample project" from the menu. Choose the default values for the next configuration questions.

## The contract
Open the contracts/Greeter.sol contract file that hardhat created.
Hardhat already added the import in order to be able to use the console.log function.

```solidity
import "hardhat/console.sol";
```

Line 10 has the following solidity code. This line will print the text "Deploying a Greeter with greeting:" in the console where the node is being executed.

```solidity
console.log("Deploying a Greeter with greeting:", _greeting);
```

## Run a local node
```shell
npx hardhat node
```

## Deploy the contracts
Open a new terminal and run the following command

```shell
npx hardhat run --network localhost scripts/sample-script.js
```

## Check the console.log text being printed
Head back to the console where the node is running. You will see the following text near the end:
```shell
  console.log:
    Deploying a Greeter with greeting: Hello, Hardhat!
```

## Conclusion
Wiht Hardhat's console.log you can debug your solidity contracts easily. You can add as many console.log() calls as you wish to.