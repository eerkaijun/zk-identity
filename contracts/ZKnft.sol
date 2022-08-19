// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZKnft is ERC721, Ownable {

    uint256 public currentTokenID = 0;

    constructor() ERC721("ZK NFT", "ZID") {}

    function mintZKID(address account) public onlyOwner {
        _mint(account, currentTokenID);
        currentTokenID++;
    }

}