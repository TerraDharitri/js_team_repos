import { Address, Transaction, TransactionPayload } from "@terradharitri/sdk-core";
import { assert } from "chai";
import { WalletProvider } from "./walletProvider";

declare global {
  namespace NodeJS {
    interface Global {
      window?: {
        location: {
          href: string
        }
      };
    }
  }
}

describe("test wallet provider", () => {
  beforeEach(function () {
    let window: any = {
      location: {
        href: "http://return-to-wallet"
      }
    };

    global.window = window;
  });

  it('login redirects correctly', async () => {
    const walletProvider = new WalletProvider("http://mocked-wallet.com");

    const returnUrl = await walletProvider.login();
    assert.equal(decodeURI(returnUrl), "http://mocked-wallet.com/hook/login?callbackUrl=http://return-to-wallet");

    const returnUrlWithCallback = await walletProvider.login({ callbackUrl: "http://another-callback" });
    assert.equal(returnUrlWithCallback, "http://mocked-wallet.com/hook/login?callbackUrl=http://another-callback");

    const returnUrlWithToken = await walletProvider.login({ callbackUrl: "http://another-callback", token: "test-token" });
    assert.equal(returnUrlWithToken, "http://mocked-wallet.com/hook/login?token=test-token&callbackUrl=http://another-callback");
  });

  it('logout redirects correctly', async () => {
    const walletProvider = new WalletProvider("http://mocked-wallet.com");

    await walletProvider.logout();
    assert.equal(window.location.href, "http://mocked-wallet.com/hook/logout?callbackUrl=http://return-to-wallet");

    await walletProvider.logout({ callbackUrl: "http://another-callback" });
    assert.equal(window.location.href, "http://mocked-wallet.com/hook/logout?callbackUrl=http://another-callback");
  });

  it('sign transaction redirects correctly (with data field)', async () => {
    const walletProvider = new WalletProvider("http://mocked-wallet.com");
    const transaction = new Transaction({
      sender: Address.fromBech32("drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf"),
      receiver: Address.fromBech32("drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c"),
      value: "0",
      gasLimit: 50000,
      data: new TransactionPayload("hello"),
      gasPrice: 1000000000,
      chainID: "D"
    });

    await walletProvider.signTransaction(transaction);
    assert.equal(decodeURI(window.location.href), "http://mocked-wallet.com/hook/sign?nonce[0]=0&value[0]=0&receiver[0]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasLimit[0]=50000&data[0]=hello&chainID[0]=D&version[0]=1&callbackUrl=http://return-to-wallet");

    await walletProvider.signTransaction(transaction, { callbackUrl: "http://another-callback" });
    assert.equal(decodeURI(window.location.href), "http://mocked-wallet.com/hook/sign?nonce[0]=0&value[0]=0&receiver[0]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasLimit[0]=50000&data[0]=hello&chainID[0]=D&version[0]=1&callbackUrl=http://another-callback");
  });

  it('sign transaction redirects correctly (without data field)', async () => {
    const walletProvider = new WalletProvider("http://mocked-wallet.com");

    const transaction = new Transaction({
      sender: Address.fromBech32("drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf"),
      receiver: Address.fromBech32("drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c"),
      value: "0",
      gasLimit: 50000,
      gasPrice: 1000000000,
      chainID: "D"
    });

    await walletProvider.signTransaction(transaction);
    assert.equal(decodeURI(window.location.href), "http://mocked-wallet.com/hook/sign?nonce[0]=0&value[0]=0&receiver[0]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasLimit[0]=50000&data[0]=&chainID[0]=D&version[0]=1&callbackUrl=http://return-to-wallet");

    await walletProvider.signTransaction(transaction, { callbackUrl: "http://another-callback" });
    assert.equal(decodeURI(window.location.href), "http://mocked-wallet.com/hook/sign?nonce[0]=0&value[0]=0&receiver[0]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasLimit[0]=50000&data[0]=&chainID[0]=D&version[0]=1&callbackUrl=http://another-callback");
  });


  it('sign multiple transactions redirects correctly', async () => {
    const walletProvider = new WalletProvider("http://mocked-wallet.com");
    const transactions = [
      new Transaction({
        sender: Address.fromBech32("drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf"),
        receiver: Address.fromBech32("drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c"),
        value: "0",
        gasLimit: 50000,
        gasPrice: 1000000000,
        chainID: "T",
        nonce: 42
      }),
      new Transaction({
        sender: Address.fromBech32("drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf"),
        receiver: Address.fromBech32("drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c"),
        value: "0",
        gasLimit: 50000,
        gasPrice: 1000000000,
        chainID: "T",
        nonce: 43
      }),
    ];

    await walletProvider.signTransactions(transactions);
    assert.equal(decodeURI(window.location.href), `http://mocked-wallet.com/hook/sign?nonce[0]=42&nonce[1]=43&value[0]=0&value[1]=0&receiver[0]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&receiver[1]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&sender[1]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasPrice[1]=1000000000&gasLimit[0]=50000&gasLimit[1]=50000&data[0]=&data[1]=&chainID[0]=T&chainID[1]=T&version[0]=1&version[1]=1&callbackUrl=http://return-to-wallet`);

    await walletProvider.signTransactions(transactions, { callbackUrl: "http://another-callback" });
    assert.equal(decodeURI(window.location.href), `http://mocked-wallet.com/hook/sign?nonce[0]=42&nonce[1]=43&value[0]=0&value[1]=0&receiver[0]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&receiver[1]=drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&sender[1]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasPrice[1]=1000000000&gasLimit[0]=50000&gasLimit[1]=50000&data[0]=&data[1]=&chainID[0]=T&chainID[1]=T&version[0]=1&version[1]=1&callbackUrl=http://another-callback`);
  });
});

describe("test getTransactionsFromWalletUrl", () => {
  beforeEach(function () {
    let window: any = {
      location: {
        search:
          "?signSession=1693313444978&nonce[0]=127&value[0]=100000000000000000&receiver[0]=drt1qqqqqqqqqqqqqpgq7ykazrzd905zvnlr88dpfw06677lxe9w0n4sp7cvlf&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf&gasPrice[0]=1000000000&gasLimit[0]=4200000&data[0]=wrapRewa&chainID[0]=D&version[0]=1&signature[0]=414dcd2541ecdc1a41cafdd1ef4aff2ba7248402854478ee13c5a21968bd8dd4ab884335ea35c1404f85b0305f11df21615fecc9062e4668e74e8bb6a1e96c0d&walletProviderStatus=transactionsSigned",
        href: "https://mocked-wallet.com/dashboard",
      },
    };

    global.window = window;
  });

  it("gets transactions from wallet url", async () => {
    const walletProvider = new WalletProvider("http://mocked-wallet.com");
    const signedTransactions = walletProvider.getTransactionsFromWalletUrl();

    assert.equal(
      JSON.stringify(signedTransactions),
      JSON.stringify([
        {
          nonce: 127,
          value: "100000000000000000",
          receiver:
            "drt1qqqqqqqqqqqqqpgq7ykazrzd905zvnlr88dpfw06677lxe9w0n4sp7cvlf",
          sender:
            "drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf",
          gasPrice: 1000000000,
          gasLimit: 4200000,
          data: "wrapRewa",
          chainID: "D",
          version: 1,
          signature:
            "414dcd2541ecdc1a41cafdd1ef4aff2ba7248402854478ee13c5a21968bd8dd4ab884335ea35c1404f85b0305f11df21615fecc9062e4668e74e8bb6a1e96c0d",
        },
      ])
    );
  });
});

describe("test getTransactionsFromWalletUrl with mandatory fields only", () => {


  it("gets transactions from wallet url with mandatory fields only", async () => {
    window.location.search = 
          "?signSession=1693313444978" +
          "&nonce[0]=127" +
          "&value[0]=100000000000000000" +
          "&receiver[0]=drt1qqqqqqqqqqqqqpgq7ykazrzd905zvnlr88dpfw06677lxe9w0n4sp7cvlf" +
          "&sender[0]=drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf" +
          "&gasPrice[0]=1000000000" +
          "&gasLimit[0]=4200000" +
          // data missing
          "&chainID[0]=D" +
          "&version[0]=1" +
          "&signature[0]=414dcd2541ecdc1a41cafdd1ef4aff2ba7248402854478ee13c5a21968bd8dd4ab884335ea35c1404f85b0305f11df21615fecc9062e4668e74e8bb6a1e96c0d&walletProviderStatus=transactionsSigned";
        
    const walletProvider = new WalletProvider("http://mocked-wallet.com");
    const signedTransactions = walletProvider.getTransactionsFromWalletUrl();

    assert.equal(
      JSON.stringify(signedTransactions),
      JSON.stringify([
        {
          nonce: 127,
          value: "100000000000000000",
          receiver:
            "drt1qqqqqqqqqqqqqpgq7ykazrzd905zvnlr88dpfw06677lxe9w0n4sp7cvlf",
          sender:
            "drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf",
          gasPrice: 1000000000,
          gasLimit: 4200000,
          data: "",
          chainID: "D",
          version: 1,
          signature:
            "414dcd2541ecdc1a41cafdd1ef4aff2ba7248402854478ee13c5a21968bd8dd4ab884335ea35c1404f85b0305f11df21615fecc9062e4668e74e8bb6a1e96c0d",
        },
      ])
    );
  });
});
