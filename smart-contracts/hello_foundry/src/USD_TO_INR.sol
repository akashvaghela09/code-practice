// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract USD_TO_INR {
    uint256 public price = 75;

    function setPrice(uint256 _price) public {
        price = _price;
    }

    function getPrice() public view returns (uint256) {
        return price;
    }
}
