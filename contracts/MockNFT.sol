//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MockNFT is ERC1155 {
    uint256 public constant GOLD = 0;

    constructor() ERC1155("https://mock.example/api/item/{id}.json") {
        _mint(msg.sender, GOLD, 10000, "");
    }
}
