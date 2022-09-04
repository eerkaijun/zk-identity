const { ethers } = require("hardhat");

async function deployContracts() {
    const ZK = await ethers.getContractFactory("ZKnft");
    const zknft = await ZK.deploy();
    console.log("ZK NFT deployed to: ", zknft.address);
    return zknft;
}

// deployContracts();

module.exports = {
    deployContracts: deployContracts
}