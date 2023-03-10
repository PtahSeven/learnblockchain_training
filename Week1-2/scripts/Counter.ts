import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();
  console.log("Counter deployed to:", Counter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//https://goerli.etherscan.io/address/0x155f06d70e0edb70431b39989b05843013e06049
//https://goerli.etherscan.io/tx/0xa989a4624144ae239fa80d37a0fb56794d31b1a04d5586d7ae5883e0da090e30
