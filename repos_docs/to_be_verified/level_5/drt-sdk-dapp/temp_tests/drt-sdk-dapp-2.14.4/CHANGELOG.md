# Change Log

All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[v2.14.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/812)] - 2023-05-29
- [Added datatestids to toast elements](https://github.com/TerraDharitri/drt-sdk-dapp/pull/811)
- [Fixed DCDTNFTTransaction parsedTransaction not assigning multiTxData on return object](https://github.com/TerraDharitri/drt-sdk-dapp/pull/810)


## [[v2.14.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/809)] - 2023-05-27

- [Fixed batch transactions state after sending](https://github.com/TerraDharitri/drt-sdk-dapp/pull/808)

- [Fixed default sign step title override](https://github.com/TerraDharitri/drt-sdk-dapp/pull/807)

## [[v2.14.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/806)] - 2023-05-26

- [Fixed/window location for RN](https://github.com/TerraDharitri/drt-sdk-dapp/pull/805)

- [Fixed toast progress for batch transactions when navigate across the app](https://github.com/TerraDharitri/drt-sdk-dapp/pull/804)

- [Fixed failed transaction error message](https://github.com/TerraDharitri/drt-sdk-dapp/pull/802)

- [Added sign steps indexing to distinguish multiple transaction signing](https://github.com/TerraDharitri/drt-sdk-dapp/pull/803)

## [[v2.14.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/801)] - 2023-05-24

- [Fixed SignStepBody modularization](https://github.com/TerraDharitri/drt-sdk-dapp/pull/800)

## [[v2.14.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/796)] - 2023-05-22

- [Fixed websocket reconnect issue](https://github.com/TerraDharitri/drt-sdk-dapp/pull/797)
- [Updated layout for the sign transaction flow](https://github.com/TerraDharitri/drt-sdk-dapp/pull/795)

## [[v2.13.8]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/794)] - 2023-05-18

- [Fixed early check mechanism for batch transactions (batch transactions tracker)](https://github.com/TerraDharitri/drt-sdk-dapp/pull/793)

## [[v2.13.7]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/792)] - 2023-05-17

- [Added `type` to token data on sign screen, `getEconomicsInfo`, and `useGetRewaPrice` hook](https://github.com/TerraDharitri/drt-sdk-dapp/pull/791)
- [Fix batch transactions fallbacks](https://github.com/TerraDharitri/drt-sdk-dapp/pull/779)

## [[v2.13.6]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/790)] - 2023-05-17

- [Fix nonce management](https://github.com/TerraDharitri/drt-sdk-dapp/pull/788)
- [Guarded account `gasLimit` update in `s` helper](https://github.com/TerraDharitri/drt-sdk-dapp/pull/789)
- [Added flag `preventNonceUpdate` to prevent nonce update](https://github.com/TerraDharitri/drt-sdk-dapp/pull/786)

## [[v2.13.5]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/784)] - 2023-05-13

- [Revert nonce management solution](https://github.com/TerraDharitri/drt-sdk-dapp/pull/781)

## [[v2.13.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/782)] - 2023-05-12

- [Improve transaction nonce update management](https://github.com/TerraDharitri/drt-sdk-dapp/pull/781)
- [Prevent updating transaction nonce during signing if nonce is present](https://github.com/TerraDharitri/drt-sdk-dapp/pull/780)

## [[v2.13.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/773)] - 2023-05-10

- [Stop ledger double signing before leaving sign screen to 2FA hook](https://github.com/TerraDharitri/drt-sdk-dapp/pull/777)
- [Fixed `dappConfig` not saved in redux store](https://github.com/TerraDharitri/drt-sdk-dapp/pull/776)
- [Fixed cancel transactions flow with web wallet provider](https://github.com/TerraDharitri/drt-sdk-dapp/pull/774)

## [[v2.13.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/773)] - 2023-05-09

- [Fixed ledger guardian error activation condition in SignStep](https://github.com/TerraDharitri/drt-sdk-dapp/pull/746)

## [[v2.13.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/772)] - 2023-05-09

- [Prevent ledger signing of guarded transactions when Dharitri App is too old](https://github.com/TerraDharitri/drt-sdk-dapp/pull/746)
- [Add batch transactions tracking mechanism](https://github.com/TerraDharitri/drt-sdk-dapp/pull/745)

## [[v2.13.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/770)] - 2023-05-09

- [Added `getLedgerVersionOptions` helper](https://github.com/TerraDharitri/drt-sdk-dapp/pull/769)
- [Added `getWebviewToken` helper](https://github.com/TerraDharitri/drt-sdk-dapp/pull/768)

## [[v2.12.9]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/767)] - 2023-05-08

- [Fixed redirect to 2FA hook when `skipGuardian` is set](https://github.com/TerraDharitri/drt-sdk-dapp/pull/766)
- [Fixed incorrect returns of `signMessage`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/765)

## [[v2.12.8]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/762)] - 2023-05-08

- [Fixed setting `skipGuardian` condtion](https://github.com/TerraDharitri/drt-sdk-dapp/pull/761)

## [[v2.12.7]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/762)] - 2023-05-05

- [Allow skip guradian for change guardian transaction](https://github.com/TerraDharitri/drt-sdk-dapp/pull/761)

## [[v2.12.6]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/758)] - 2023-05-05

- [Increment extension provider version](https://github.com/TerraDharitri/drt-sdk-dapp/pull/758)

## [[v2.12.5]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/757)] - 2023-05-05

- [Added `ledgerSignature` to assets in `TokenType`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/756)
- [Fixed checking of base64 encoding in transaction data field](https://github.com/TerraDharitri/drt-sdk-dapp/pull/755)

## [[v2.12.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/750)] - 2023-05-03

- [Fixed setting `hasGuardianScreen` flag in `useSignTransactionsWithDevice`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/749)

## [[v2.12.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/751)] - 2023-05-03

- [Added `hashSign` option to ledger guarded transactions`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/750)
- [Fixed `signMessage` and `verifyMessage` did not receive correct params and did not clear state `onAbort`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/749)

## [[v2.12.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/748)] - 2023-04-28

- [Extend `GuardianScreenType` with `address`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/747)
- [Fixed transaction data parsing in `newTransaction` method](https://github.com/TerraDharitri/drt-sdk-dapp/pull/744)
- [Fixed setting `webviewProvider` overriding `externalProvider`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/746)
- [Remove duplicate `applySignature` from `newTransaction`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/740)

## [[v2.12.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/739)] - 2023-04-25

- [Revert transaction data](https://github.com/TerraDharitri/drt-sdk-dapp/pull/738)]

## [[v2.12.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/737)] - 2023-04-25

- [Added `dappConfig` slice to control setting `webViewLogin`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/731)]
- [Guardian screen pre-release](https://github.com/TerraDharitri/drt-sdk-dapp/pull/739)
- [Fixed transactions data and signature parsing](https://github.com/TerraDharitri/drt-sdk-dapp/pull/738)

## [[v2.11.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/737)] - 2023-04-21

- [Added support for decoding login token within `decodeNativeAuthToken](https://github.com/TerraDharitri/drt-sdk-dapp/pull/736)
- [Fixed transactions signing to prevent unnecessary clearing of URL search params](https://github.com/TerraDharitri/drt-sdk-dapp/pull/735)

## [[v2.11.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/730)] - 2023-04-13

- [Fixed access to window by checking type](https://github.com/TerraDharitri/drt-sdk-dapp/pull/730)

## [[v2.11.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/729)] - 2023-04-13

- [Fixed access to window object](https://github.com/TerraDharitri/drt-sdk-dapp/pull/728)

## [[v2.11.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/725)] - 2023-04-12

- [Added Batch transactions support](https://github.com/TerraDharitri/drt-sdk-dapp/pull/722)
- [Updated WalletConnect provider package](https://github.com/TerraDharitri/drt-sdk-dapp/pull/726)

## [[v2.10.17]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/721)] - 2023-04-04

- [WalletConnect V2 Updated Dharitri Namespace](https://github.com/TerraDharitri/drt-sdk-dapp/pull/720)

## [[v2.10.16]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/718)] - 2023-03-30

- [Fixed sanitizing VsCode callbackUrl](https://github.com/TerraDharitri/drt-sdk-dapp/pull/717)
- [Added missing endpoints](https://github.com/TerraDharitri/drt-sdk-dapp/pull/716)

## [[v2.10.15]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/715)] - 2023-03-28

- [Added missing component for `DappProvider` instead of `index`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/715)

## [[v2.10.14]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/714)] - 2023-03-28

- [Added missing component files instead of `index`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/713)

## [[v2.10.13]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/708)] - 2023-03-27

- [Optimized sign-message reducers](https://github.com/TerraDharitri/drt-sdk-dapp/pull/707)
- [Fixed commonJS compilation to suit Jest testing](https://github.com/TerraDharitri/drt-sdk-dapp/pull/711)
- [Changed `ExplorerLink` icon](https://github.com/TerraDharitri/drt-sdk-dapp/pull/710)
- [Improved `Trim` debounce](https://github.com/TerraDharitri/drt-sdk-dapp/pull/709)

## [[v2.10.12]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/703)] - 2023-03-16

- [Added existing params to clearing URL after signing with web-wallet](https://github.com/TerraDharitri/drt-sdk-dapp/pull/705)

## [[v2.10.11]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/703)] - 2023-03-15

- [Fixed clearing URL after signing with web-wallet](https://github.com/TerraDharitri/drt-sdk-dapp/pull/702)
- [Fixed accessing wallet without keystore index in `AddressTable`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/701)

## [[v2.10.10]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/700)] - 2023-03-15

- [Fix imports from native auth calling imports connected to redux store](https://github.com/TerraDharitri/drt-sdk-dapp/pull/699)

## [[v2.10.9]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/698)] - 2023-03-15

- [Fixed interpreting DCDT in `parseMultiDcdtTransferData`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/697)

## [[v2.10.8]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/696)] - 2023-03-14

- [Fixed guard for undefined window object and type imports. Moved `getIsExtensionAvailable` to `utils/platform`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/695)

## [[v2.10.7]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/694)] - 2023-03-10

- [Added `data-testid` to Sign fields](https://github.com/TerraDharitri/drt-sdk-dapp/pull/693)

## [[v2.10.6]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/692)] - 2023-03-09

- [Changed `TransactionDetailsBody` to always show `ExplorerLink`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/691)

## [[v2.10.5]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/690)] - 2023-03-07

- [Fixed `sanitizeCallbackUrl` return value](https://github.com/TerraDharitri/drt-sdk-dapp/pull/690)
- [Fixed pending transaction toast animation](https://github.com/TerraDharitri/drt-sdk-dapp/pull/681)

## [[v2.10.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/686)] - 2023-03-02

- [Added `useGetLastPendingTransactionHash` hook](https://github.com/TerraDharitri/drt-sdk-dapp/pull/666)

## [[v2.10.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/685)] - 2023-03-01

- [Remove Bootstrap dependency for the 'authorizationInfo' text](https://github.com/TerraDharitri/drt-sdk-dapp/pull/684)

## [[v2.10.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/682)] - 2023-03-01

- [Added `decodeLoginToken` helper; Added `authorizationInfo` in `LedgerLoginContainer` and `WalletConnectLoginContainer`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/680)

## [[v2.10.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/679)] - 2023-02-27

- [Changed `hostname` to `origin` in `defaultNativeAuthConfig`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/678)

## [[v2.10.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/677)] - 2023-02-27

- [Changed `useVerifyMessage` into `verifyMessage` and update return value](https://github.com/TerraDharitri/drt-sdk-dapp/pull/676)
- [Updated `sdk-core` version](https://github.com/TerraDharitri/drt-sdk-dapp/pull/675)
- [Changed `host` and `hostname` to `origin` in `decodeNativeAuthToken` and `getNativeAuthConfig` return types. Added `authorizationInfo` prop in `ScamPhishinAlert` component](https://github.com/TerraDharitri/drt-sdk-dapp/pull/674)

## [[v2.9.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/673)] - 2023-02-26

- [Fixed message listening for Android](https://github.com/TerraDharitri/drt-sdk-dapp/pull/672)

## [[v2.9.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/670)] - 2023-02-25

- [Fixed postMessage usage for Android](https://github.com/TerraDharitri/drt-sdk-dapp/pull/671)
- [Fixed npm version displayed in readme](https://github.com/TerraDharitri/drt-sdk-dapp/pull/669)
- [Fixed SSR support](https://github.com/TerraDharitri/drt-sdk-dapp/pull/667)

## [[v2.9.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/666)] - 2023-02-24

- [Rewrite block hash logic to fix timing edge cases](https://github.com/TerraDharitri/drt-sdk-dapp/pull/666)

## [[v2.9.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/665)] - 2023-02-24

- [Removed Extension button styling](https://github.com/TerraDharitri/drt-sdk-dapp/pull/664)

## [[v2.9.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/663)] - 2023-02-24

- [Fixed data decode methods](https://github.com/TerraDharitri/drt-sdk-dapp/pull/662)
- [Walletconnect V2 Multiple Namespaces](https://github.com/TerraDharitri/drt-sdk-dapp/pull/657)

## [[v2.8.10]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/661)] - 2023-02-23

- [Fix husky crashing build](https://github.com/TerraDharitri/drt-sdk-dapp/pull/661)

## [[v2.8.9]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/656)] - 2023-02-23

- [Fixed native auth block hash race condition](https://github.com/TerraDharitri/drt-sdk-dapp/pull/656)
- [Fixed transaction toast progress animation](https://github.com/TerraDharitri/drt-sdk-dapp/pull/654)

## [[v2.8.8]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/652)] - 2023-02-22

- [Added retry mechanism for block hash request](https://github.com/TerraDharitri/drt-sdk-dapp/pull/651)

## [[v2.8.7]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/649)] - 2023-02-20

- [Added block hash shard to native auth config](https://github.com/TerraDharitri/drt-sdk-dapp/pull/650)
- [Changed persist config to local configuration](https://github.com/TerraDharitri/drt-sdk-dapp/pull/648)

## [[v2.8.6]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/647)] - 2023-02-20

- [Updated `nativeAuth` last block hash caching mechanism](https://github.com/TerraDharitri/drt-sdk-dapp/pull/645)
- [Fixed `getScamFlag` method to skip uris and if verified](https://github.com/TerraDharitri/drt-sdk-dapp/pull/646)

## [[v2.8.5]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/644)] - 2023-02-16

## [[v2.8.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/643)] - 2023-02-16

- [Added additional exports for redux store helpers](https://github.com/TerraDharitri/drt-sdk-dapp/pull/643)
- [Changed `broadcastLogoutAcrossTabs` function to prevent tab logout for different address](https://github.com/TerraDharitri/drt-sdk-dapp/pull/642)
- [Changed transaction toast message displayed for 1 transaction](https://github.com/TerraDharitri/drt-sdk-dapp/pull/641)
- [Added additional class support for ledger](https://github.com/TerraDharitri/drt-sdk-dapp/pull/639)

## [[v2.8.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/638)] - 2023-02-14

- [Fixed `stringIsFloat` function](https://github.com/TerraDharitri/drt-sdk-dapp/pull/638)

## [[v2.8.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/637)] - 2023-02-14

- [Fix mainnet REWA Label](https://github.com/TerraDharitri/drt-sdk-dapp/pull/635)

## [[v2.8.]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/634)] - 2023-02-14

- [Upgrade fontawesome](https://github.com/TerraDharitri/drt-sdk-dapp/pull/633)

## [[v2.7.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/632)] - 2023-02-13

- [Fixed ledger issues link](https://github.com/TerraDharitri/drt-sdk-dapp/pull/632)

## [[v2.7.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/631)] - 2023-02-13

- [Added the ability to relogin into dapps from xPortal](https://github.com/TerraDharitri/drt-sdk-dapp/pull/629)
- [Breaking change: **xPortal authentication panel layout and Sign Transaction panel layout**.

  Migration guide:

- Use `InnerWalletConnectComponentsClassesType` for styling xPortal screens and `signStepInnerClasses` for styling Sign Transaction modals.](https://github.com/TerraDharitri/drt-sdk-dapp/pull/628)

## [[v2.6.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/626)] - 2023-02-10

- [Added caching mechanism for block hash](https://github.com/TerraDharitri/drt-sdk-dapp/pull/625)

## [[v2.6.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/624)] - 2023-02-09

- [Fixed NFT display in Sign screen](https://github.com/TerraDharitri/drt-sdk-dapp/pull/623)

## [[v2.6.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/622)] - 2023-02-08

- [Fixed addressTable component balance fetch](https://github.com/TerraDharitri/drt-sdk-dapp/pull/621)

## [[v2.6.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/622)] - 2023-02-08

- [Fixed addressTable component balance fetch](https://github.com/TerraDharitri/drt-sdk-dapp/pull/621)

## [[v2.6.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/620)] - 2023-02-06

- [Breaking change: **Ledger authentication panel layout**.

  Migration guide:

- Use `innerLedgerComponentsClasses` for styling Ledger screens.
- Addresses will trim if container is < 730px, needs to be at least that size.](https://github.com/TerraDharitri/drt-sdk-dapp/pull/619)

## [[v2.5.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/618)] - 2023-02-04

- [Fixed ledger cancelled transactions state](https://github.com/TerraDharitri/drt-sdk-dapp/pull/617)

## [[v2.5.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/615)] - 2023-02-04

- [Fixed sign transactions with web wallet when data field is empty](https://github.com/TerraDharitri/drt-sdk-dapp/pull/614)
- [Added missing attributes of transaction types](https://github.com/TerraDharitri/drt-sdk-dapp/pull/613)
- [Added Opera Crypto wallet provider - Beta](https://github.com/TerraDharitri/drt-sdk-dapp/pull/600)
- [Added default SignTransactionModal for extra provider](https://github.com/TerraDharitri/drt-sdk-dapp/pull/612)

## [[v2.4.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/610)] - 2023-02-03

- [Added support for webview provider automatic login](https://github.com/TerraDharitri/drt-sdk-dapp/pull/609)
- [Extension and WalletConnect login rebranding](https://github.com/TerraDharitri/drt-sdk-dapp/pull/611)

## [[v2.3.5]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/604)] - 2023-02-02

- [Skip login when address is prefilled](https://github.com/TerraDharitri/drt-sdk-dapp/pull/607)

## [[v2.3.4]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/604)] - 2023-02-01

- [Sanitize web wallet login callback URL](https://github.com/TerraDharitri/drt-sdk-dapp/pull/605)

## [[v2.3.3]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/604)] - 2023-01-31

- [Fixed erronated publish 2.3.2](https://github.com/TerraDharitri/drt-sdk-dapp/pull/604)

## [[v2.3.2]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/603)] - 2023-01-31

- [Extracted ledger address screens control to separate hook](https://github.com/TerraDharitri/drt-sdk-dapp/pull/602)

## [[v2.3.1]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/599)] - 2023-01-26

- [Added support to not show meridiem by default in `getHumanReadableTimeFormat` util function](https://github.com/TerraDharitri/drt-sdk-dapp/pull/597)
- [Fixed web wallet cancelled login](https://github.com/TerraDharitri/drt-sdk-dapp/pull/598)

## [[v2.3.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/596)] - 2023-01-20

- [Added support for autoLogout callback url](https://github.com/TerraDharitri/drt-sdk-dapp/pull/594)
- [Fixed imports for React Native support](https://github.com/TerraDharitri/drt-sdk-dapp/pull/595)

## [[v2.2.12]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/592)] - 2023-01-17

- [Created `useSignMessage` hook to support message signing](https://github.com/TerraDharitri/drt-sdk-dapp/pull/578)

## [[v2.2.11]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/591)] - 2023-01-17

- [Fixed ledger address table display issue](https://github.com/TerraDharitri/drt-sdk-dapp/pull/590)

## [[v2.2.10](https://github.com/TerraDharitri/drt-sdk-dapp/pull/586)] - 2023-01-17

- [Revert "increase hw-provider package version"](https://github.com/TerraDharitri/drt-sdk-dapp/pull/585)

## [[v2.2.10-alpha.0]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/584)] - 2023-01-17

- [Increase hw-provider package version](https://github.com/TerraDharitri/drt-sdk-dapp/pull/583)
- [Change dharitri defi wallet store urls](https://github.com/TerraDharitri/drt-sdk-dapp/pull/582)

## [[v2.2.9]](https://github.com/TerraDharitri/drt-sdk-dapp/pull/577)] - 2023-01-12

- [Added partial support for Next.js](https://github.com/TerraDharitri/drt-sdk-dapp/pull/559)

## [[2.2.8]](https://api.github.com/repos/TerraDharitri/drt-dapp/pulls/557)] - 2023-01-12

- [Created first version of @terradharitri/sdk-dapp](https://github.com/TerraDharitri/drt-sdk-dapp/pull/538)

## [[2.2.7](https://api.github.com/repos/TerraDharitri/drt-dapp/pulls/554)] - 2023-01-10

- [Changed branding from numbat to dharitri](https://github.com/TerraDharitri/drt-sdk-dapp/pull/538)

## [[2.2.6](https://github.com/TerraDharitri/drt-sdk-dapp/pull/531)] - 2023-01-09

- [Fixed cancel transaction toast position](https://github.com/TerraDharitri/drt-sdk-dapp/pull/537)
- [Reverted WalletConnect provider to 2.1.0-beta.5 and stability fixes](https://github.com/TerraDharitri/drt-sdk-dapp/pull/539)

## [[2.2.5](https://github.com/TerraDharitri/drt-sdk-dapp/pull/531)] - 2023-01-05

- [Fixed fetching account twice on login. Populate shard from account.](https://github.com/TerraDharitri/drt-sdk-dapp/pull/530)
- [Updated WalletConnect provider to 2.1.0-beta.6 and stability fixes](https://github.com/TerraDharitri/drt-sdk-dapp/pull/529)
- [Refetch account data on network change](https://github.com/TerraDharitri/drt-sdk-dapp/pull/526)

## [[2.2.4](https://github.com/TerraDharitri/drt-sdk-dapp/pull/525)] - 2022-12-28

- [Fixed extension plain login](https://github.com/TerraDharitri/drt-sdk-dapp/pull/523)

## [[2.2.3](https://github.com/TerraDharitri/drt-sdk-dapp/pull/510)] - 2022-12-16

- [Fixed login on nativeAuth block failed](https://github.com/TerraDharitri/drt-sdk-dapp/pull/516)
- [Changed CSS to exclude `!important;` and added className to transaction info components](https://github.com/TerraDharitri/drt-sdk-dapp/pull/517)
- [Added missing actions to TransactionActionsEnum `AxiosInterceptorContext` response](https://github.com/TerraDharitri/drt-sdk-dapp/pull/518)

## [[2.2.2](https://github.com/TerraDharitri/drt-sdk-dapp/pull/512)] - 2022-12-16

- [Fixed loginHooks to have same response and changed `AxiosInterceptorContext` response](https://github.com/TerraDharitri/drt-sdk-dapp/pull/511)

## [[2.2.1](https://github.com/TerraDharitri/drt-sdk-dapp/pull/510)] - 2022-12-16

- [Changed logging in logic to allow signing custom token](https://github.com/TerraDharitri/drt-sdk-dapp/pull/509)
- [Security issue fixed by substituting `anchorme` with linkify.js and fixed `getScamFlag` logic](https://github.com/TerraDharitri/drt-sdk-dapp/pull/508)

## [[2.2.0](https://github.com/TerraDharitri/drt-sdk-dapp/pull/507)] - 2022-12-14

- [Added Axios interceptor wrapper to be used with `nativeAuth`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/506)
- [Changed `signTransactions.ts` import to resolve Next.js support](https://github.com/TerraDharitri/drt-sdk-dapp/pull/505)
- [Upgraded `@terradharitri/drtjs-web-wallet-provider` to vesion 2.1.2](https://github.com/TerraDharitri/drt-sdk-dapp/pull/503)
- [Added `nativeAuth` and Storybook](https://github.com/TerraDharitri/drt-sdk-dapp/pull/504)

## [[2.1.20](https://github.com/TerraDharitri/drt-sdk-dapp/pull/500)] - 2022-12-07

- [Allow compatible versions of peer deps](https://github.com/TerraDharitri/drt-sdk-dapp/pull/499)

## [[2.1.19](https://github.com/TerraDharitri/drt-sdk-dapp/pull/498)] - 2022-12-05

- [Fixed web-wallet login on FireFox](https://github.com/TerraDharitri/drt-sdk-dapp/pull/497)

## [[2.1.18](https://github.com/TerraDharitri/drt-sdk-dapp/pull/495)] - 2022-12-01

- [Updated WalletConnect provider to 2.1.0-beta.5](https://github.com/TerraDharitri/drt-sdk-dapp/pull/494)

## [[2.1.17](https://github.com/TerraDharitri/drt-sdk-dapp/pull/493)] - 2022-12-01

- [Fixed setting incremental nonces when signing with ledger](https://github.com/TerraDharitri/drt-sdk-dapp/pull/492)

## [[2.1.16](https://github.com/TerraDharitri/drt-sdk-dapp/pull/490)] - 2022-11-29

- [Fixed logging out with wallet provider](https://github.com/TerraDharitri/drt-sdk-dapp/pull/489)
- [Added `status` param to `getTransactions` API](https://github.com/TerraDharitri/drt-sdk-dapp/pull/488)

## [[2.1.15](https://github.com/TerraDharitri/drt-sdk-dapp/pull/486)] - 2022-11-21

- [Fixed sign new transaction with Ledger after cancelling transaction](https://github.com/TerraDharitri/drt-sdk-dapp/pull/485)

## [[2.1.14](https://github.com/TerraDharitri/drt-sdk-dapp/pull/482)] - 2022-11-21

- [Added custom toast to for displaying components](https://github.com/TerraDharitri/drt-sdk-dapp/pull/481)

## [[2.1.13](https://github.com/TerraDharitri/drt-sdk-dapp/pull/479)] - 2022-11-17

- [Changed custom toast to display transaction objects](https://github.com/TerraDharitri/drt-sdk-dapp/pull/478)
- [Fixed the toast progress bar exceeding boundaries](https://github.com/TerraDharitri/drt-sdk-dapp/pull/477)

## [[2.1.12](https://github.com/TerraDharitri/drt-sdk-dapp/pull/476)] - 2022-11-16

- [Added icon functionality to custom toast](https://github.com/TerraDharitri/drt-sdk-dapp/pull/475)

## [[2.1.11](https://github.com/TerraDharitri/drt-sdk-dapp/pull/474)] - 2022-11-15

- [Changed `ConfirmationScreen` calling sign hooks depeding on device](https://github.com/TerraDharitri/drt-sdk-dapp/pull/461)
- [Updated legacy peers type definitions](https://github.com/TerraDharitri/drt-sdk-dapp/pull/460)

## [[2.1.10](https://github.com/TerraDharitri/drt-sdk-dapp/pull/473)] - 2022-11-11

- [Fixed `getTrimmedHash` helper](https://github.com/TerraDharitri/drt-sdk-dapp/pull/473)

## [[2.1.9](https://github.com/TerraDharitri/drt-sdk-dapp/pull/472)] - 2022-11-11

- [Added `getTransactionLinkWithLabel` helper](https://github.com/TerraDharitri/drt-sdk-dapp/pull/471)

## [[2.1.8](https://github.com/TerraDharitri/drt-sdk-dapp/pull/470)] - 2022-11-10

- [Added fix for missing `transaction.operations`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/468)
- [Added `search` param to get transactions API](https://github.com/TerraDharitri/drt-sdk-dapp/pull/467)

## [[2.1.7](https://github.com/TerraDharitri/drt-sdk-dapp/pull/465)] - 2022-11-04

- [Added `window` and `document` guards for undefined](https://github.com/TerraDharitri/drt-sdk-dapp/pull/464)

## [[2.1.6](https://github.com/TerraDharitri/drt-sdk-dapp/pull/463)] - 2022-11-03

- [Removed `signTransactionsCancelMessage` from persisted state](https://github.com/TerraDharitri/drt-sdk-dapp/pull/462)
- [Changed `useSignTransactions` being called for ledger and extra provider](https://github.com/TerraDharitri/drt-sdk-dapp/pull/461)

## [[2.1.5](https://github.com/TerraDharitri/drt-sdk-dapp/pull/459)] - 2022-11-02

- [Changed `useSignTransaction` hook to prevent multiple sign requests on same transactions](https://github.com/TerraDharitri/drt-sdk-dapp/pull/458)

## [[2.1.4](https://github.com/TerraDharitri/drt-sdk-dapp/pull/457)] - 2022-11-01

- [Changed `Notification` component to render only of content is present](https://github.com/TerraDharitri/drt-sdk-dapp/pull/456)

## [[2.1.3](https://github.com/TerraDharitri/drt-sdk-dapp/pull/455)] - 2022-10-31

- [Changed `onLoginRedirect` callback logic to overwrite callbackRoute navigation](https://github.com/TerraDharitri/drt-sdk-dapp/pull/454)
- [Changed `onLoginRedirect` function to allow sending signature and address params](https://github.com/TerraDharitri/drt-sdk-dapp/pull/453)

## [[2.1.2](https://github.com/TerraDharitri/drt-sdk-dapp/pull/451)] - 2022-10-27

- [Fixed throwing console exception on searching for transaction](https://github.com/TerraDharitri/drt-sdk-dapp/pull/449)
- [Updated WalletConnect provider to 2.1.0-beta.3](https://github.com/TerraDharitri/drt-sdk-dapp/pull/450)

## [[2.1.1](https://github.com/TerraDharitri/drt-sdk-dapp/pull/448)] - 2022-10-20

- [Fixed transaciton signing with extra provider](https://github.com/TerraDharitri/drt-sdk-dapp/pull/444)
- [Changed TimeAgo `div` tag to `span`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/445)
- [Updated WalletConnect provider to 2.1.0-beta.2, added ping helper, show only latest pairing per app](https://github.com/TerraDharitri/drt-sdk-dapp/pull/446)

## [[2.1.0](https://github.com/TerraDharitri/drt-sdk-dapp/pull/443)] - 2022-10-14

- [Fix Trim Component on Safari on iOS 16](https://github.com/TerraDharitri/drt-sdk-dapp/pull/435)
- [Removed moment dependency](https://github.com/TerraDharitri/drt-sdk-dapp/pull/439)
- [Fixed type definitions](https://github.com/TerraDharitri/drt-sdk-dapp/pull/406)

## [[2.1.0-rc3](https://github.com/TerraDharitri/drt-sdk-dapp/pull/433)] - 2022-09-26

- [Added logic to extract transaction value for staking operations](https://github.com/TerraDharitri/drt-sdk-dapp/pull/432)
- [Fixed `UsdValue` intelisense](https://github.com/TerraDharitri/drt-sdk-dapp/pull/431)
- [Delegate redirecting after signing to `TreansactionSender`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/430)

## [[2.1.0-rc2](https://github.com/TerraDharitri/drt-sdk-dapp/pull/428)] - 2022-09-22

- [Added interfaces for `getTransactionValue`](https://github.com/TerraDharitri/drt-sdk-dapp/pull/427)

## [[2.1.0-rc1](https://github.com/TerraDharitri/drt-sdk-dapp/pull/424)] - 2022-09-21

- [Added documentation about registering a websocket listener](https://github.com/TerraDharitri/drt-sdk-dapp/pull/423)
- [Updated @terradharitri/drtjs-wallet-connect-provider to 2.1.0-beta.1 with @walletconnect 2.0.0-rc.3](https://github.com/TerraDharitri/drt-sdk-dapp/pull/422)
- [Added option for showing equal sign in front of computed USD value by `getUsdValue` function](https://github.com/TerraDharitri/drt-sdk-dapp/pull/421)
- [Fixed fetching transaction count and smart contract results count from accounts endpoint](https://github.com/TerraDharitri/drt-sdk-dapp/pull/420)
- [Added extra actions names](https://github.com/TerraDharitri/drt-sdk-dapp/pull/419)
- [Added transaction interpreter functions and UI components (rc1)](https://github.com/TerraDharitri/drt-sdk-dapp/pull/418)

## [[2.0.4](https://github.com/TerraDharitri/drt-sdk-dapp/pull/416)] - 2022-09-12

- [Fixed navigating after pressing Cancel on sign modal](https://github.com/TerraDharitri/drt-sdk-dapp/pull/415)
- [Added hook allowing to check for dapp modal visibility](https://github.com/TerraDharitri/drt-sdk-dapp/pull/416)

## [[2.0.3](https://github.com/TerraDharitri/drt-sdk-dapp/pull/414)] - 2022-09-09

- [Added second login attempt error](https://github.com/TerraDharitri/drt-sdk-dapp/pull/408)
- [Fixed `AuthenticatedRoutesWrapper` not detecting pattern routes](https://github.com/TerraDharitri/drt-sdk-dapp/pull/409)
- [Fixed invalidating signed transactions after sign flow was canceled](https://github.com/TerraDharitri/drt-sdk-dapp/pull/413)

## [2.0.2] - 2022-09-01

- [Changed saving account information by using address namespacing](https://github.com/TerraDharitri/drt-sdk-dapp/pull/402)
- [Added ledger login default zero index selection on address table](https://github.com/TerraDharitri/drt-sdk-dapp/pull/403)
- [Changed internal file imports](https://github.com/TerraDharitri/drt-sdk-dapp/pull/404)
- [Fixed setting and rehydrating redux account information](https://github.com/TerraDharitri/drt-sdk-dapp/pull/406)
