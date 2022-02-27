# Hardhat tutorial

## Introduction
In this tutorial you will learn how to use Hardhat. You will be deploying two ERC20 tokens to simulate Meter's MTRG & VOLT tokens. ETH is the equivalent to MTR in Meter's blockchain.

## Installation
```shell
npm install -g hardhat
```

## Compilation
```shell
npx hardhat compile
```

## Testing
```shell
npx hardhat test
```

## Running a node
```shell
npx hardhat node
```

## Using the command line tools to interact with the contracts

```shell
npx hardhat run --network localhost scripts/deploy.js
```

Once deployed you will see the deployed contract addresses.

Deploying Greeter...
Greeter deployed to: 0x610178dA211FEF7D417bC0e6FeD39F05609AD788
Deploying TEST Mtrg token...
TEST Mtrg token deployed to: 0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e
Deploying TEST Volt token...
TEST Volt token deployed to: 0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0

### Run the hardhat console
```shell
npx hardhat console --network localhost
```

### Interact with the Greeter contract
```shell
const Greeter = await ethers.getContractFactory('Greeter');
const greeter = await Greeter.attach('0x610178dA211FEF7D417bC0e6FeD39F05609AD788');
await greeter.greet();
```

### Get account balance
```shell
const accounts = await ethers.provider.listAccounts();
const { ethers, waffle} = require("hardhat");
const provider = waffle.provider;
const balance = await provider.getBalance(accounts[0]);
console.log(balance);
```

### Using a different account
```shell
const addresses = await ethers.getSigners();
console.log(addresses[3]);
console.log(addresses[3].address);
await greeter.connect(addresses[3]).setGreeting("Hola!");
await greeter.greet();
```

### Sending MTRG
```shell
const token = await ethers.getContractAt("Mtrg", "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e");
await token.symbol();

owner = addresses[0].address;
toAddress = addresses[1].address;

await token.transfer(toAddress,ethers.utils.parseEther('100'))

ownerBalance = await token.balanceOf(owner);
ethers.utils.formatEther(ownerBalance);

toBalance = await token.balanceOf(toAddress);
ethers.utils.formatEther(toBalance);
```

## Metamask configuration
Add network:

  Network Name: Hardhat
  New RPC URL: http://localhost:8545
  Chain ID: 31337

Import both VOLT Test token & MTRG Test token ERC20 tokens

## Clear cache & delete artifacts 
npx hardhat clean

## Deploy to Meter Testnet & Mainnet
export METER_TESTNET_PRIVATE_KEY=PRIVATE_KEY
npx hardhat run scripts/deploy.js --network meter_testnet

export METER_MAINNET_PRIVATE_KEY=PRIVATE_KEY
npx hardhat run scripts/deploy.js --network meter_mainnet