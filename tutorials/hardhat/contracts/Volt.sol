//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Volt is ERC20 {
  constructor() ERC20("Volt Token", "VOLT") {
    _mint(msg.sender, 100000000 * (10 ** decimals()));
  }
}