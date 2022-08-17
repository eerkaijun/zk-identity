pragma circom 2.0.6;

include "../node_modules/circomlib/circuits/eddsamimc.circom";
include "../node_modules/circomlib/circuits/comparators.circom";

template VerifySignature() {

    // public key
    signal input from_x;
    signal input from_y;
    // signature
    signal input R8x;
    signal input R8y;
    signal input S;
    // message
    signal input M;

    component verifier = EdDSAMiMCVerifier();
    verifier.enabled <== 1;
    verifier.Ax <== from_x;
    verifier.Ay <== from_y;
    verifier.R8x <== R8x;
    verifier.R8y <== R8y;
    verifier.S <== S;
    verifier.M <== M;

    // constraint generation that M has to be larger than 600
    component compare = GreaterThan(16); // 16 bits number comparison
    compare.in[0] <== M;
    compare.in[1] <== 600;
    compare.out === 1;
}

component main {public [from_x, from_y, R8x, R8y, S]} = VerifySignature();