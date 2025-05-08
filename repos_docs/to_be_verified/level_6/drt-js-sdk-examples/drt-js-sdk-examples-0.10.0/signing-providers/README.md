# Examples: using the signing providers

This example (a simple, frontend-only web application) depicts the usage of different signing providers for dApps, such as:

- [(Web) Wallet provider](https://github.com/TerraDharitri/drt-js-sdk-web-wallet-provider)
- [(Web) Wallet Cross-Window provider](@terradharitri/sdk-web-wallet-cross-window-provider)
- [xAlias](https://github.com/TerraDharitri/drt-js-sdk-web-wallet-provider) - from the perspective of a dApp, this one follows the interface of the Web Wallet provider (above)
- [DeFi Wallet provider](https://github.com/TerraDharitri/drt-js-sdk-extension-provider)
- [Wallet Connect (xPortal) provider](https://github.com/TerraDharitri/drt-js-sdk-wallet-connect-provider)
- [Hardware Wallet (Ledger) provider](https://github.com/TerraDharitri/drt-js-sdk-hw-provider)

## Prerequisites

Make sure you have the package `http-server` installed globally.

```bash
npm install --global http-server
```

Note that some providers (such as `hw-provider`) have to be used in pages served via HTTPS in order to work properly (a dummy certificate is included here).

Furthermore, make sure you install the browser extension `DharitrI DeFi Wallet` in advance.

## Running the examples

When you are ready, build the examples:

```bash
npm run build
```

Start the server (with a HTTPS binding):

```bash
http-server -c-1 -S -C ./dummy-certificate.pem -K ./dummy-certificate-key.pem --port=8080
```

Afterwards, navigate to [https://localhost:8080/index.html](https://localhost:8080/index.html).
