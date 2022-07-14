// loading except and ethers from chai and ethers respectively.
const { expect } = require("chai");
const { ethers } = require("hardhat");

// logical blocks that create a structure for our counter tests
// help in identifying issues wen reported on the terminal
describe("Counter", function () {
  // logical block that creates more natural language and marks an inner block
  it("Should return 1 once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter"); // inject ethers globally in our tests. Tells ethers to create a factory so you can later instantiate it.
    const counter = await Counter.deploy(0); // calls constructor of our counter smart contract and code blockwithin constructor is executed
    await counter.deployed();

    expect(await counter.getCount().to.equal(0));

    const incrementTx = await counter.increment(); // calls increment method in our contract and updates the variable

    // wait until transaction is mined
    await incrementTx.wait();

    expect(await counter.getCount()).to.equal(1);
  });
});
