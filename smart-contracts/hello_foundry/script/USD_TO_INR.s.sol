// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {USD_TO_INR} from "../src/USD_TO_INR.sol";

contract USD_TO_INR_Script is Script {
    function run() public returns (USD_TO_INR) {
        vm.startBroadcast();

        USD_TO_INR usd_to_inr = new USD_TO_INR();

        vm.stopBroadcast();

        return usd_to_inr;
    }
}
