// SPDX-License-identifier: MIT

pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {Bank} from "../src/Bank.sol";

contract DeployBank is Script {

    function run() external returns (Bank) {
        vm.startBroadcast();
        Bank bank = new Bank();
        vm.stopBroadcast();

        return bank;
    }
}
