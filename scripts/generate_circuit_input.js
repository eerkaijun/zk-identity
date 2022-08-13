import fs from "fs";
import { buildEddsa, buildBabyjub } from "circomlibjs";

const eddsa = await buildEddsa();
const babyjub = await buildBabyjub();
let F = babyjub.F;

const message = F.e(123);
const prvKey = Buffer.from('1'.toString().padStart(64,'0'), "hex");
const pubKey = eddsa.prv2pub(prvKey);

// sign using private key
const signature = eddsa.signMiMC(prvKey, message);

console.log("signature: ", signature);
console.log("verified: ", eddsa.verifyMiMC(message, signature, pubKey));

const inputs = {
    "from_x": F.toObject(pubKey[0]).toString(),
    "from_y": F.toObject(pubKey[1]).toString(),
    "R8x": F.toObject(signature['R8'][0]).toString(),
    "R8y": F.toObject(signature['R8'][1]).toString(),
    "S": signature['S'].toString(),
    "M": F.toObject(message).toString()
}

fs.writeFileSync(
    "./input.json",
    JSON.stringify(inputs),
    "utf-8"
);