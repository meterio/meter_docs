//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Owned {
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier isOwner {
        require(msg.sender == owner);
        _;
    }
}

contract Mortal is Owned {
    function destroy() public isOwner {
        selfdestruct(owner);
    }
}

contract Faucet is Mortal {

    function withdraw(uint withdraw_amount) public {
        payable(msg.sender).transfer(withdraw_amount);
    }

    function balance() public view returns(uint) {
        return address(this).balance;
    }

    fallback() external payable {}
    receive() external payable {}
    
}