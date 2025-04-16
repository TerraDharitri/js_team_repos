/**
 * A minimalistic framework for writing & executing the cookbook.
 */

import { AbiRegistry, Account, Address, ApiNetworkProvider, Transaction } from "@terradharitri/sdk-core";
import { promises } from "fs"; // md-ignore

export const addressOfAlice = new Address("drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf");

export const addressOfBob = new Address("drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c");

export const addressOfCarol = new Address("drt1k2s324ww2g0yj38qn2ch2jwctdy8mnfxep94q9arncc6xecg3xaq889n6e");

export const completedTransactionsHashes = [
    "930e9e1a687602522f9b0803eae8d5f0a07ac6721ef5bb455a989e38b2681e5f",
    "9a4cce1b5e1c6edbd06aa509b09e02596b42afbdfa3f43db1245fd4634fc6815",
    "7d7d05f141026aa461154b52476a5a78bd3dd9b0dc29bedc66b0de54c55a41d5",
];

export const accounts = {
    alice: new Account(addressOfAlice),
    bob: new Account(addressOfBob),
    carol: new Account(addressOfCarol),
};

export const addressOfFirstDevnetDelegator = new Address(
    "drt1s0us936aku52uxyvnhxspcaj4f4sp7d9azuyw7kf32ggm88ynlpsryc8qm"
);

export const apiNetworkProvider = new ApiNetworkProvider("https://devnet-api.dharitri.com", { clientName: "dharitri-sdk-js-examples" }); // md-ignore

export function getNotYetSignedTx() {
    return new Transaction({
        value: 1n,
        gasLimit: 70000n,
        gasPrice: 1000000000n,
        sender: addressOfAlice.toBech32(),
        receiver: addressOfBob.toBech32(),
        data: Buffer.from("hello"),
        chainID: "D",
        version: 1,
    });
}

export function getReadyToBroadcastTx() {
    const tx = new Transaction({
        nonce: 42n,
        value: 1000000000000000000n,
        receiver: "drt1testnlersh4z0wsv8kjx39me4rmnvjkwu8dsaea7ukdvvc9z396qe2mapq",
        sender: "drt1ej69d0509akc7vwh9kfeew5hp8gm8u2fxrd7066mmphs8029da6smw07a5",
        gasLimit: 50000n,
        gasPrice: 1000000000n,
        chainID: "D",
    });

    const signature = Buffer.from(
        "69d5cb5ce7a380cfd8bf6ebebbf70a45a5119791aa27b30e48e4a9f61a81afdfaf17b16368b8149039b84aa0bbaa3e1ee975eed9a07d196b6f480655fe40be09",
        "hex"
    );
    tx.signature = signature;
    return tx;
}

export async function syncAccounts() {
    for (const account of Object.values(accounts)) {
        const accountOnNetwork = await apiNetworkProvider.getAccount(account.address);
        account.update(accountOnNetwork);
    }

    return accounts;
}

export async function loadAbi(abiPath) {
    const abiJson = await promises.readFile(abiPath, { encoding: "utf8" });
    const abi = AbiRegistry.create(JSON.parse(abiJson));
    return abi;
}
