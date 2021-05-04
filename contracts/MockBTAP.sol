//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MockBTAP is ERC20Burnable {
    constructor() ERC20("Mock BTAP", "MBTAP") {
        _mint(_msgSender(), 1000000 * 10**18);
    }
}
