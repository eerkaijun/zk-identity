// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import { Verifier } from "./Verifier.sol";

contract ZKIdentity is Verifier {

    // an array of all the trusted public keys
    uint256[][2] public trustedPublicKeys;

    constructor() {
        trustedPublicKeys[0] = [
            1891156797631087029347893674931101305929404954783323547727418062433377377293,
            14780632341277755899330141855966417738975199657954509255716508264496764475094
        ];
    }

    /// @dev verify that the user holds a signature of credit score higher than 600 issued by a trusted provider
    function verifyCreditScore(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[5] memory input
    ) public view returns(bool) {
        bool validPublicKey = false;
        for (uint i=0; i<trustedPublicKeys.length; i++) {
            if (input[0] == trustedPublicKeys[i][0] && input[1] == trustedPublicKeys[i][1]) {
                validPublicKey = true;
                break;
            }
        }
        if (validPublicKey) {
            return verifyProof(a, b, c, input);
        } else {
            return false;
        }
    }

}


