//SPDX-License_Identifier: MIT
// License to build trust with the community.
pragma solidity ^0.8.0; // Compiler directive

import "hardhat/console.sol";

// A contract that holds state and has methods
contract Counter {
    uint256 count; // declare persistent contract storage

    // Function that is invoked when the smart contract is created or an object constructor
    constructor(uint256 _count) {
        count = _count;
    }

    // A function that writes to the blockdchain(costs money to be executed) hence a transaction
    function increment() public {
        count += 1;
        console.log("The count value after increment", count);
    }

    // A function that only reads on the blockdchain
    function getCount() public view returns (uint256) {
        console.log("The count value on getCOunt", count);
        return count;
    }
}
