# Using web3 to transfer MTRG, MTR & VOLT tokens to a contract & vice versa

## Introduction

In this tutorial you will learn how to transfer tokens from an EOA (Externally Owned Account) using web3 & Metamask to a contract address. You will also learn how to transfer token funds from a contract to an EOA using solidity.

## Solidity Contract

### Token contract addresses

MTR is the native token of the Meter network, hence there is no token contract address needed.

MTRG contract addresses:
1. Test net: 0x8A419Ef4941355476cf04933E90Bf3bbF2F73814
2. Main net: 0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3

VOLT contract addresses:
1. Test net: There is no test net contract address for VOLT
2. Main net: 0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0


### Receive MTR function

To receive MTR in your contract balance you need to create a function that is payable. msg.value contains the amount of MTR that has been sent in the transaction.

````solidity
function receiveMTR() public payable {
  mtrBalance += msg.value;
}
````

### Receive MTRG function

To receive MTRG in your contract balance you need to create a function that is external payable. ERC20 tokens work different than the native MTR token. These tokens first need to be approved by the user (web3 + Metmask) in a two-step process. First the dApp will ask the user to sign a transaction to load the amount of tokens to send & once this transaction is confirmed a new signing petition will appear to transfer those tokens to the contract. Below is the solidity code to recieve the MTRG tokens.

````solidity
function receiveMTRG() external payable {
  address tokenMTRG = 0x8A419Ef4941355476cf04933E90Bf3bbF2F73814; // Test net
  IERC20 paymentToken = IERC20(tokenMTRG);

  uint amount = paymentToken.allowance(msg.sender,address(this));
  paymentToken.transferFrom(msg.sender,address(this),amount);

  mtrgBalance += amount;
}
```` 

### Receive VOLT function

To receive VOLT in your contract the steps are the same as with MTRG, exxcept that the contract address is different. Remember that there is no VOLT test net contract.

````solidity
function receiveVOLT() external payable {
  address voltMTRG = 0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0; // Main net
  IERC20 paymentToken = IERC20(voltMTRG);

  uint amount = paymentToken.allowance(msg.sender,address(this));
  paymentToken.transferFrom(msg.sender,address(this),amount);

  voltBalance += amount;
}
```` 

### Transfer MTR function

Transfering MTR is very straightforward, one line of code is all you need to transfer the desired amount to an EOA.

````solidity
function transferMTR(){
  payable(address).transfer(transferAmount);
}

````

### Transfer MTRG function

Transfering MTRG is similar to MTR, except that you need to specify the token contract address to use.

````solidity
function transferMTRG(){
  address tokenMTRG = 0x8A419Ef4941355476cf04933E90Bf3bbF2F73814; // Test net
  IERC20 paymentToken = IERC20(tokenMTRG);
  paymentToken.transfer(address, transferAmount);
}

````

### Transfer VOLT function

Transfering MTRG is similar to MTR, except that you need to specify the token contract address to use.

````solidity
function transferVOLT(){
  address voltMTRG = 0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0; // Main net
  IERC20 paymentToken = IERC20(voltMTRG);
  paymentToken.transfer(address, transferAmount);
}
````

## React dApp using web3

In the following functions you will see how sending MTR, MTRG & VOLT to a contract address works

### Transfer MTR to a contract address

Since this is not an ERC20 token only one signing petition will be required from Metamask.

````javascript
async sendMTR(amount) {
  let accounts = await web3.eth.getAccounts();
    
  try {
    await contract.methods.receiveMTR().send({
      from: accounts[0],
      value: web3.utils.toWei(amount, "ether"),
    });
  } catch(err)
  {
    console.log(err);
    return;
  }
}

````

### Transfer MTRG to a contract address

Since this is is an ERC20 token, two signing petitions will be required from Metamask. The first one is to approve spending the token balance.

````javascript
async sendMTRG(amount) {
  
  let accounts = await web3.eth.getAccounts();

  let contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS" //TESTNET
  let mtrgTokenAddress = "0x8A419Ef4941355476cf04933E90Bf3bbF2F73814"; //TESTNET
  //let mtrgTokenAddress = "0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3"; //MAINNET
    
  var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
  var token = new web3.eth.Contract(abi, mtrgTokenAddress);

  try {
    await token.methods.approve(contractAddress, web3.utils.toWei(amount, "ether")).send({
      from: accounts[0]
    });  
  } catch (error) {
    console.log(error);  
    return;
  }

  try {
    await token.methods.transferMTRG().send({
      from: accounts[0]
    });  
  } catch (error) {
    console.log(error);
    return;
  }

}

````

### Transfer VOLT to a contract address

Since this is is an ERC20 token, two signing petitions will be required from Metamask. The first one is to approve spending the token balance.

````javascript
async sendVOLT(amount) {
  
  let accounts = await web3.eth.getAccounts();

  let contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS" //TESTNET
  let voltTokenAddress = "0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0"; //MAINNET
    
  var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
  var token = new web3.eth.Contract(abi, voltTokenAddress);

  try {
    await token.methods.approve(contractAddress, web3.utils.toWei(amount, "ether")).send({
      from: accounts[0]
    });  
  } catch (error) {
    console.log(error);  
    return;
  }

  try {
    await token.methods.transferVOLT().send({
      from: accounts[0]
    });  
  } catch (error) {
    console.log(error);
    return;
  }

}

````

## Conclusion

In this tutorial you've learned how to transfer MTR, MTRG & VOLT tokens from an EOY to a contract address. You have also learned how to receive & transfer those funds from the solidity contract.
