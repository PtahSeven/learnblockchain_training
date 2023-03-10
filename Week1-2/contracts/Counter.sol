// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Counter {
    uint256 public counter;
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    function count() public {
        require(owner == msg.sender, " invalid call");
        counter = 1 + 1;

        console.log("contract log: count msg.sender %s to %s", msg.sender, counter);
    }
}
