# drt-js-sdk-web-wallet-provider

Signing provider for dApps: DharitrI (Web) Wallet.

Documentation is available on [docs.DharitrI.org](https://docs.DharitrI.org/sdk-and-tools/drtjs/drtjs-signing-providers/), while an integration example can be found [here](https://github.com/TerraDharitri/drt-js-sdk-examples/tree/main/signing-providers).

Note that **we recommend using [dapp-core](https://github.com/TerraDharitri/drt-sdk-dapp)** instead of integrating the signing provider on your own.

## Distribution

[npm](https://www.npmjs.com/package/@terradharitri/sdk-web-wallet-provider)

## Installation

```
npm install @terradharitri/sdk-web-wallet-provider
```

### Building the library

In order to compile the library, run the following:

```
npm install
npm run compile
```

### Usage Examples

####Login
```
export async function login() {
let provider = createProvider();
await provider.login();
}
```

####Sign Transactions
```
export async function signTransactions() {
let provider = createProvider();

    let firstTransaction = {
        toPlainObject: function () {
            return {
                nonce: 42,
                value: "1",
                receiver: "drt1uv40ahysflse896x4ktnh6ecx43u7cmy9wnxnvcyp7deg299a4sq8s28dr",
                gasPrice: 1000000000,
                gasLimit: 70000,
                data: Buffer.from("hello").toString("base64"),
                chainID: "T",
                version: 1
            };
        }
    };

    let secondTransaction = {
        toPlainObject: function () {
            return {
                nonce: 43,
                value: "1",
                receiver: "drt1uv40ahysflse896x4ktnh6ecx43u7cmy9wnxnvcyp7deg299a4sq8s28dr",
                gasPrice: 1000000000,
                gasLimit: 70000,
                data: Buffer.from("world").toString("base64"),
                chainID: "T",
                version: 1
            };
        }
    };

    await provider.signTransactions([firstTransaction, secondTransaction]);
}
```


In production, if needed, one can use sdk-core' `Transaction.fromPlainObject()` to wrap the plain transaction objects returned by the provider.

For example:

```
let plainSignedTransactions = provider.getTransactionsFromWalletUrl();
let transactions = plainSignedTransactions.map(item => Transaction.fromPlainObject(item));
```


#### Show signed messages
```
export async function showSignedTransactions() {
    let provider = createProvider();
    let plainSignedTransactions = provider.getTransactionsFromWalletUrl();
    alert(JSON.stringify(plainSignedTransactions, null, 4));
}
```

#### Logout
```
export async function logout() {
    let provider = createProvider();
    await provider.logout({ callbackUrl: window.location.href, redirectDelayMilliseconds: 10 });
}

```
