const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BBW", function () {
  it("Test", async function () {
    const BBW = await ethers.getContractFactory("BBW");
    const bbw = await BBW.deploy();
    await bbw.deployed();
  });
});
