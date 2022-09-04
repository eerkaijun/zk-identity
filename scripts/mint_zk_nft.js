const fs = require("fs");

async function mintIdentity() {
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

    // TODO: save the cid as the metadata of the ZK ID
}

mintIdentity();