import { getPublicKey } from '@noble/ed25519';
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import {
  Message,
  UserSecretKey,
  UserSigner,
  Address,
  MessageComputer
} from '@terradharitri/sdk-core';
import { Transaction } from '@terradharitri/sdk-core/out/transaction';

import {
  AuthenticatorNotSupported,
  ErrCannotSignSingleTransaction
} from './errors';
import { client } from './lib/webauthn-prf';

interface IPasskeyAccount {
  address: string;
  name?: string;
  signature?: string;
}

interface SignMessageParams {
  message: string;
  address?: string;
  privateKey: string;
}

ed.etc.sha512Sync = sha512;

export class PasskeyProvider {
  public account: IPasskeyAccount = { address: '' };
  private initialized = false;
  private static _instance: PasskeyProvider = new PasskeyProvider();
  private keyPair: { privateKey: string; publicKey: string } | undefined =
    undefined;

  private constructor() {
    if (PasskeyProvider._instance) {
      throw new Error(
        'Error: Instantiation failed: Use PasskeyProvider.getInstance() instead of new.'
      );
    }
    PasskeyProvider._instance = this;
  }

  public static getInstance(): PasskeyProvider {
    return PasskeyProvider._instance;
  }

  public setAddress(address: string): PasskeyProvider {
    this.account.address = address;
    return PasskeyProvider._instance;
  }

  async init(): Promise<boolean> {
    this.initialized = true;
    return this.initialized;
  }

  async login(
    options: {
      callbackUrl?: string;
      token?: string;
    } = {}
  ): Promise<{ address: string; signature?: string }> {
    try {
      if (!this.initialized) {
        throw new Error(
          'Passkey provider is not initialised, call init() first'
        );
      }
      const { token } = options;
      await this.ensureConnected();
      if (!this.keyPair?.privateKey && !this.keyPair?.publicKey) {
        throw new Error('Could not retrieve key pair.');
      }
      this.account.address = this.keyPair.publicKey;

      if (token) {
        const signedToken = await this.signMessageWithPrivateKey({
          address: this.account.address,
          message: token,
          privateKey: this.keyPair.privateKey
        });

        if (!signedToken.signature) {
          throw new Error('Could not sign token');
        }

        this.account.signature = Buffer.from(signedToken.signature).toString(
          'hex'
        );
      }

      if (!this.keyPair.publicKey) {
        throw new Error('Login cancelled');
      }

      this.destroyKeyPair();

      return {
        address: this.account.address,
        signature: this.account.signature
      };
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }

  private destroyKeyPair() {
    this.keyPair = undefined;
  }

  private async signMessageWithPrivateKey({
    message,
    address,
    privateKey
  }: SignMessageParams): Promise<Message> {
    const signer = new UserSigner(UserSecretKey.fromString(privateKey));

    const msg = new Message({
      ...(address ? { address: new Address(address) } : {}),
      data: Buffer.from(message)
    });

    const messageComputer = new MessageComputer();

    const messageToSign = new Uint8Array(
      messageComputer.computeBytesForSigning(msg)
    );

    const signature = await signer.sign(Buffer.from(messageToSign));

    msg.signature = new Uint8Array(signature);

    return msg;
  }
  // Derive the private key seed using HKDF (Web Crypto API)
  private async derivePrivateKeySeed(
    prfOutput: Uint8Array
  ): Promise<Uint8Array> {
    // Import the PRF output as a CryptoKey
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      prfOutput.buffer,
      'HKDF',
      false,
      ['deriveBits']
    );

    //should be hardcoded in order to have deterministic output
    const salt = new Uint8Array([]); // Empty salt
    const info = new TextEncoder().encode('Ed25519 Key Generation');

    const derivedBitsBuffer = await window.crypto.subtle.deriveBits(
      {
        name: 'HKDF',
        hash: 'SHA-256',
        salt: salt.buffer,
        info: info.buffer
      },
      keyMaterial,
      256 // Length in bits
    );

    return new Uint8Array(derivedBitsBuffer);
  }

  // Generate the Ed25519 key pair
  private async generateEd25519KeyPair(privateKeySeed: Uint8Array) {
    const privateKey = privateKeySeed;
    const publicKey = await getPublicKey(privateKey);

    return {
      publicKey,
      privateKey
    };
  }

  public async setUserKeyPair(prfOutput: Uint8Array) {
    const privateKeySeed = await this.derivePrivateKeySeed(prfOutput);
    const { privateKey } = await this.generateEd25519KeyPair(privateKeySeed);

    const userSecretKey = new UserSecretKey(privateKey);
    const address = userSecretKey.generatePublicKey().toAddress();

    this.keyPair = {
      privateKey: userSecretKey.hex(),
      publicKey: address.bech32()
    };
  }

  public async createAccount({
    walletName,
    token
  }: {
    walletName: string;
    token?: string;
  }) {
    const challengeFromServer = window.crypto.randomUUID();
    const { extensionResults } = await client.register(
      walletName,
      challengeFromServer,
      {
        authenticatorType: 'extern'
      }
    );
    await this.setUserKeyPair(extensionResults);

    return this.login({ token });
  }

  public async isExistingUser(email: string) {
    return Boolean(window.localStorage.getItem(email));
  }

  async logout(): Promise<boolean> {
    if (!this.initialized) {
      throw new Error('Passkey provider is not initialised, call init() first');
    }
    try {
      this.disconnect();
    } catch (error) {
      console.warn('Passkey origin url is already cleared!', error);
    }

    return true;
  }

  private disconnect() {
    this.account = { address: '' };
  }

  async getAddress(): Promise<string> {
    if (!this.initialized) {
      throw new Error('Passkey provider is not initialised, call init() first');
    }
    return this.account ? this.account.address : '';
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  async isConnected(): Promise<boolean> {
    return Boolean(this.account.address);
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    await this.ensureConnected();

    const signedTransactions = await this.signTransactions([transaction]);

    if (signedTransactions.length != 1) {
      throw new ErrCannotSignSingleTransaction();
    }
    this.destroyKeyPair();
    return signedTransactions[0];
  }

  private async ensureConnected() {
    if (this.keyPair?.privateKey || this.keyPair?.publicKey) {
      return;
    }

    const challengeFromServer = window.crypto.randomUUID();
    let inputKeyMaterial: Uint8Array;
    try {
      const { extensionResults } = await client.authenticate(
        [],
        challengeFromServer,
        { userVerification: 'required', authenticatorType: 'extern' }
      );
      inputKeyMaterial = extensionResults;
    } catch (error) {
      console.log('error', error);
      throw new AuthenticatorNotSupported();
    }
    await this.setUserKeyPair(inputKeyMaterial);
  }

  async signTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    await this.ensureConnected();

    const privateKey = this.keyPair?.privateKey;

    if (!privateKey) {
      throw new Error('Unable to sign transactions');
    }

    try {
      const signer = new UserSigner(UserSecretKey.fromString(privateKey));

      for (const transaction of transactions) {
        const signature = await signer.sign(transaction.serializeForSigning());
        transaction.applySignature(signature);
      }
      this.destroyKeyPair();
      return transactions;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.destroyKeyPair();
      throw new Error(`Transaction canceled: ${error.message}.`);
    }
  }

  async signMessage(message: Message): Promise<Message> {
    await this.ensureConnected();
    const privateKey = this.keyPair?.privateKey;

    if (!privateKey) {
      throw new Error('Unable to sign message');
    }

    const signedMessage = await this.signMessageWithPrivateKey({
      message: message.data.toString(),
      address: this.account.address,
      privateKey
    });

    message.signature = signedMessage.signature;

    this.destroyKeyPair();
    return message;
  }

  cancelAction() {
    return true;
  }
}
