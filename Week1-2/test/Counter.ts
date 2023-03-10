import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {

  async function deployCounter() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    return { counter };
  }

  describe("Counter", function () {
    it("Counter msg.sender owner ", async function () {
      const { counter } = await loadFixture(deployCounter);
      const counts = await counter.count();
    });
  });
});
