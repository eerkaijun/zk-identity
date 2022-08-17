// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import { Verifier } from "./Verifier.sol";

contract ZKIdentity is Verifier {

    /// @dev verify that the user holds a signature of credit score higher than 600 issued by a trusted provider
    function verifyCreditScore(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[5] memory input
    ) public view returns(bool) {
        return verifyProof(a, b, c, input);
    }

}


