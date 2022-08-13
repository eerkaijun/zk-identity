include "../node_modules/circomlib/circuits/eddsamimc.circom";

template VerifySignature() {

    signal input from_x;
    signal input from_y;
    signal input R8x;
    signal input R8y;
    signal input S;
    signal input M;

    component verifier = EdDSAMiMCVerifier();
    verifier.enabled <== 1;
    verifier.Ax <== from_x;
    verifier.Ay <== from_y;
    verifier.R8x <== R8x;
    verifier.R8y <== R8y;
    verifier.S <== S;
    verifier.M <== M;
}

component main {public [from_x, from_y, R8x, R8y, S, M]}= VerifySignature();