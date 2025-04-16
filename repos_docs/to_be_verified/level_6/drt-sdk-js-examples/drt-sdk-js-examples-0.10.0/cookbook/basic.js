import { addressOfAlice, getNotYetSignedTx } from "./framework.js"; // md-ignore

const notYetSignedTx = getNotYetSignedTx(); // md-ignore

// ## Creating network providers

// Creating an API provider:

// ```js
import { ApiNetworkProvider } from "@terradharitri/sdk-core";

const apiNetworkProvider = new ApiNetworkProvider("https://devnet-api.dharitri.com", { clientName: "dharitri-your-client-name" });
// ```

// Creating a Proxy provider:

// ```js
import { ProxyNetworkProvider } from "@terradharitri/sdk-core";

const proxyNetworkProvider = new ProxyNetworkProvider("https://devnet-gateway.dharitri.com", { clientName: "dharitri-your-client-name" });
// ```

// md-insert:customNetworkProviders

// On this topic, please see [extending sdk-js](https://docs.dharitri.com/sdk-and-tools/sdk-js/extending-sdk-js).

// ## Fetching network parameters

// ```js
const networkConfig = await apiNetworkProvider.getNetworkConfig();
console.log(networkConfig.MinGasPrice);
console.log(networkConfig.ChainID);
// ```

// ## Working with accounts

// ### Synchronizing an account object

// The following snippet fetches (from the Network) the **nonce** and the **balance** of an account, and updates the local representation of the account.

// ```js
import { Account } from "@terradharitri/sdk-core";

const alice = new Account(addressOfAlice);
const aliceOnNetwork = await apiNetworkProvider.getAccount(addressOfAlice);
alice.update(aliceOnNetwork);

console.log("Nonce:", alice.nonce);
console.log("Balance:", alice.balance.toString());
// ```

// ### Managing the sender nonce locally

// When sending a bunch of transactions, you usually have to first fetch the account nonce from the network (see above), then manage it locally (e.g. increment upon signing & broadcasting a transaction):

// ```js
alice.incrementNonce();
console.log("Nonce:", alice.nonce);
// ```

// md-insert:transactionLegacyVsNext

// If you are using `sdk-core v13` or later, use `tx.nonce = ` to apply the nonce to a transaction.
// For `sdk-core v12` or earlier, use the legacy `tx.setNonce()` to apply the nonce to a transaction.

// ```js
notYetSignedTx.nonce = alice.getNonceThenIncrement();
// ```

// For further reference, please see [nonce management](https://docs.dharitri.com/integrators/creating-transactions/#nonce-management).
