export const challengeTokenSignatureAndAddressSample = `
import { ExtensionProvider } from "@terradharitri/sdk-extension-provider/out";

const provider = ExtensionProvider.getInstance();
await provider.init();
await provider.login({ token: challengeToken });

const address = provider.account.address;
const signature = provider.account.signature;
`;

export const signTransactionSample = `
import { ExtensionProvider } from "@terradharitri/sdk-extension-provider/out";
import { Transaction, TransactionPayload, Address } from "@terradharitri/sdk-core";

const provider = ExtensionProvider.getInstance();
const sender = await provider.getAddress();

const transaction = new Transaction({
  nonce: account.nonce,
  value: "1",
  sender: new Address(sender),
  receiver: new Address(
    "drt1uv40ahysflse896x4ktnh6ecx43u7cmy9wnxnvcyp7deg299a4sq8s28dr"
  ),
  gasPrice: 1000000000,
  gasLimit: 50000,
  data: new TransactionPayload(),
  chainID: "D",
  version: 1,
});

const signedTransactions = await provider.signTransactions([transaction]);
`;

export const signMessageSample = `
import { ExtensionProvider } from "@terradharitri/sdk-extension-provider";
import { Address, SignableMessage } from "@terradharitri/sdk-core";

const provider = ExtensionProvider.getInstance();
const address = await provider.getAddress();
const message = new SignableMessage({
  message: Buffer.from("hello"),
  address: new Address(address),
});
await provider.signMessage(message);
const signedMessage = JSON.stringify(message.toJSON(), null, 4);
`;

export const getAccountFromNetworkSample = `
import { ExtensionProvider } from "@terradharitri/sdk-extension-provider";
import { Address } from "@terradharitri/sdk-core";
import { ApiNetworkProvider } from "@terradharitri/sdk-network-providers";

const provider = ExtensionProvider.getInstance();
const address = new Address(await provider.getAddress());
const networkProvider = new ApiNetworkProvider(
  "https://devnet-api.dharitri.org"
);

const accountOnNetwork = await networkProvider.getAccount(address);
const account = new Account(address);
account.update({
  nonce: accountOnNetwork.nonce,
  balance: accountOnNetwork.balance,
});
`;
