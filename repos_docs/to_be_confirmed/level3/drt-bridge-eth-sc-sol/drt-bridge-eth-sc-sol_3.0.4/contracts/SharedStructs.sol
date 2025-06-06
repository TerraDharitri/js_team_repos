//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

enum DepositStatus {
    None,
    Pending,
    InProgress, //This is not used. It is here to have 1on1 mapping with statuses of deposits on the smartcontracts from DharitrI
    Executed,
    Rejected
}

struct Deposit {
    uint112 nonce;
    address tokenAddress;
    uint256 amount;
    address depositor;
    bytes32 recipient;
    DepositStatus status;
}

struct CrossTransferStatus {
    DepositStatus[] statuses;
    uint256 createdBlockNumber;
}

struct Batch {
    uint112 nonce;
    uint64 blockNumber;
    uint64 lastUpdatedBlockNumber;
    uint16 depositsCount;
}

struct DepositSCExtension {
    string depositData;
}
