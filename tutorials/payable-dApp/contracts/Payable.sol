pragma solidity ^0.8.9;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol";

contract Payable {
  uint public mtrBalance;
  uint public mtrgBalance;
  uint public voltBalance;

  function receiveMTR() public payable {
    mtrBalance += msg.value;
  }

  function receiveMTRG() external payable {
    address tokenMTRG = 0x8A419Ef4941355476cf04933E90Bf3bbF2F73814; // Test net
    IERC20 paymentToken = IERC20(tokenMTRG);

    uint amount = paymentToken.allowance(msg.sender,address(this));
    paymentToken.transferFrom(msg.sender,address(this),amount);

    mtrgBalance += amount;
  }

  function receiveVOLT() external payable {
    address voltMTRG = 0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0; // Main net
    IERC20 paymentToken = IERC20(voltMTRG);

    uint amount = paymentToken.allowance(msg.sender,address(this));
    paymentToken.transferFrom(msg.sender,address(this),amount);

    voltBalance += amount;
  }

  function transferMTR(address toAddress, uint transferAmount) public{
    mtrBalance -= transferAmount;
    payable(toAddress).transfer(transferAmount);
  }

  function transferMTRG(address toAddress, uint transferAmount) public{
    mtrgBalance -= transferAmount;
    address tokenMTRG = 0x8A419Ef4941355476cf04933E90Bf3bbF2F73814; // Test net
    IERC20 paymentToken = IERC20(tokenMTRG);
    paymentToken.transfer(toAddress, transferAmount);
  }

  function transferVOLT(address toAddress, uint transferAmount) public{
    voltBalance -= transferAmount;
    address voltMTRG = 0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0; // Main net
    IERC20 paymentToken = IERC20(voltMTRG);
    paymentToken.transfer(toAddress, transferAmount);
  }
}