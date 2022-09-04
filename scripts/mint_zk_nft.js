const fs = require("fs");
const { ethers } = require("hardhat");
const { deployContracts } = require("./deploy"); 

async function mintIdentity() {
    // initialize accounts
    let admin, user;
    [admin, user] = await ethers.getSigners();

    // read public inputs of zero knowledge circuit
    const data = fs.readFileSync("./public.json", {encoding:'utf8', flag:'r'});

    const { create } = await import('ipfs-core');
    const node = await create({
        // ... config here
    });
    // store these public inputs into ipfs
    let { cid } = await node.add(data);
    console.log(cid.toString());
    node.stop();    

    // Create ZK NFT ID
    let zknft = await deployContracts();
    console.log(zknft.address);
    await zknft.mintZKID(user.address, "ipfs://"+cid.toString());

    console.log("Stored token URI: ", await zknft.tokenURI(0));
}

mintIdentity();