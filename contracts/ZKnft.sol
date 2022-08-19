// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZKnft is ERC721URIStorage, Ownable {

    uint256 public currentTokenID = 0;

    constructor() ERC721("ZK NFT", "ZID") {}

    function mintZKID(address account, string memory tokenURI) public onlyOwner {
        _mint(account, currentTokenID);
        _setTokenURI(currentTokenID, tokenURI);
        currentTokenID++;
    }

}