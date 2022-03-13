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
