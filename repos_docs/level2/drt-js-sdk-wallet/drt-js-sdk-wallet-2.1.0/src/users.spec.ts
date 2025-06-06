import { assert } from "chai";
import { UserSecretKey } from "./userKeys";
import { Mnemonic } from "./mnemonic";
import { UserWallet } from "./userWallet";
import { Randomness } from "./crypto";
import { UserAddress } from "./userAddress";
import { UserSigner } from "./userSigner";
import { UserVerifier } from "./userVerifier";
import { ErrInvariantFailed } from "./errors";
import { TestMessage } from "./testutils/message";
import { DummyMnemonic, DummyPassword, loadTestWallet, TestWallet } from "./testutils/wallets";
import { TestTransaction } from "./testutils/transaction";

describe("test user wallets", () => {
    let alice: TestWallet, bob: TestWallet, carol: TestWallet;
    let password: string = DummyPassword;

    before(async function () {
        alice = await loadTestWallet("alice");
        bob = await loadTestWallet("bob");
        carol = await loadTestWallet("carol");
    });

    it("should generate mnemonic", () => {
        let mnemonic = Mnemonic.generate();
        let words = mnemonic.getWords();
        assert.lengthOf(words, 24);
    });

    it("should derive keys", async () => {
        let mnemonic = Mnemonic.fromString(DummyMnemonic);

        assert.equal(mnemonic.deriveKey(0).hex(), alice.secretKeyHex);
        assert.equal(mnemonic.deriveKey(1).hex(), bob.secretKeyHex);
        assert.equal(mnemonic.deriveKey(2).hex(), carol.secretKeyHex);
    });

    it("should create secret key", () => {
        let keyHex = alice.secretKeyHex;
        let fromBuffer = new UserSecretKey(Buffer.from(keyHex, "hex"));
        let fromHex = UserSecretKey.fromString(keyHex);

        assert.equal(fromBuffer.hex(), keyHex);
        assert.equal(fromHex.hex(), keyHex);
    });

    it("should compute public key (and address)", () => {
        let secretKey: UserSecretKey;

        secretKey = new UserSecretKey(Buffer.from(alice.secretKeyHex, "hex"));
        assert.equal(secretKey.generatePublicKey().hex(), alice.address.hex());
        assert.deepEqual(secretKey.generatePublicKey().toAddress(), alice.address);

        secretKey = new UserSecretKey(Buffer.from(bob.secretKeyHex, "hex"));
        assert.equal(secretKey.generatePublicKey().hex(), bob.address.hex());
        assert.deepEqual(secretKey.generatePublicKey().toAddress(), bob.address);

        secretKey = new UserSecretKey(Buffer.from(carol.secretKeyHex, "hex"));
        assert.equal(secretKey.generatePublicKey().hex(), carol.address.hex());
        assert.deepEqual(secretKey.generatePublicKey().toAddress(), carol.address);
    });

    it("should throw error when invalid input", () => {
        assert.throw(() => new UserSecretKey(Buffer.alloc(42)), ErrInvariantFailed);
        assert.throw(() => UserSecretKey.fromString("foobar"), ErrInvariantFailed);
    });

    it("should handle PEM files", () => {
        assert.equal(UserSecretKey.fromPem(alice.pemFileText).hex(), alice.secretKeyHex);
        assert.equal(UserSecretKey.fromPem(bob.pemFileText).hex(), bob.secretKeyHex);
        assert.equal(UserSecretKey.fromPem(carol.pemFileText).hex(), carol.secretKeyHex);
    });

    it("should create and load encrypted files", function () {
        this.timeout(10000);

        let aliceSecretKey = UserSecretKey.fromString(alice.secretKeyHex);
        let bobSecretKey = UserSecretKey.fromString(bob.secretKeyHex);
        let carolSecretKey = UserSecretKey.fromString(carol.secretKeyHex);

        console.time("encrypt");
        let aliceKeyFile = new UserWallet(aliceSecretKey, password);
        let bobKeyFile = new UserWallet(bobSecretKey, password);
        let carolKeyFile = new UserWallet(carolSecretKey, password);
        console.timeEnd("encrypt");

        assert.equal(aliceKeyFile.toJSON().bech32, alice.address.bech32());
        assert.equal(bobKeyFile.toJSON().bech32, bob.address.bech32());
        assert.equal(carolKeyFile.toJSON().bech32, carol.address.bech32());

        console.time("decrypt");
        assert.deepEqual(UserWallet.decryptSecretKey(aliceKeyFile.toJSON(), password), aliceSecretKey);
        assert.deepEqual(UserWallet.decryptSecretKey(bobKeyFile.toJSON(), password), bobSecretKey);
        assert.deepEqual(UserWallet.decryptSecretKey(carolKeyFile.toJSON(), password), carolSecretKey);
        console.timeEnd("decrypt");

        // With provided randomness, in order to reproduce our development wallets

        aliceKeyFile = new UserWallet(aliceSecretKey, password, new Randomness({
            id: alice.keyFileObject.id,
            iv: Buffer.from(alice.keyFileObject.crypto.cipherparams.iv, "hex"),
            salt: Buffer.from(alice.keyFileObject.crypto.kdfparams.salt, "hex")
        }));

        bobKeyFile = new UserWallet(bobSecretKey, password, new Randomness({
            id: bob.keyFileObject.id,
            iv: Buffer.from(bob.keyFileObject.crypto.cipherparams.iv, "hex"),
            salt: Buffer.from(bob.keyFileObject.crypto.kdfparams.salt, "hex")
        }));

        carolKeyFile = new UserWallet(carolSecretKey, password, new Randomness({
            id: carol.keyFileObject.id,
            iv: Buffer.from(carol.keyFileObject.crypto.cipherparams.iv, "hex"),
            salt: Buffer.from(carol.keyFileObject.crypto.kdfparams.salt, "hex")
        }));

        assert.deepEqual(aliceKeyFile.toJSON(), alice.keyFileObject);
        assert.deepEqual(bobKeyFile.toJSON(), bob.keyFileObject);
        assert.deepEqual(carolKeyFile.toJSON(), carol.keyFileObject);
    });

    it("should sign transactions", async () => {
        let signer = new UserSigner(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf"));
        let verifier = new UserVerifier(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf").generatePublicKey());
        let sender = UserAddress.fromBech32("drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu");
        
        // With data field
        let transaction = new TestTransaction({
            nonce: 0,
            value: "0",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            gasPrice: 1000000000,
            gasLimit: 50000,
            data: "foo",
            chainID: "1"
        });

        let serialized = transaction.serializeForSigning(sender).toString();
        await signer.sign(transaction);

        assert.equal(serialized, `{"nonce":0,"value":"0","receiver":"drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha","sender":"drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu","gasPrice":1000000000,"gasLimit":50000,"data":"Zm9v","chainID":"1","version":1}`);
        assert.equal(transaction.getSignature().hex(), "0f9b9db10f240c2528ebcc193016d02a3a2c4472bf4808a364c8a2a6f9c56f22582367bb64429a7ac4fdd851f9312b4ffc32b1c0e734dbb69f118ad1f1912a01");
        assert.isTrue(verifier.verify(transaction));
        // Without data field
        transaction = new TestTransaction({
            nonce: 8,
            value: "10000000000000000000",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            gasPrice: 1000000000,
            gasLimit: 50000,
            chainID: "1"
        });

        serialized = transaction.serializeForSigning(sender).toString();
        await signer.sign(transaction);

        assert.equal(serialized, `{"nonce":8,"value":"10000000000000000000","receiver":"drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha","sender":"drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu","gasPrice":1000000000,"gasLimit":50000,"chainID":"1","version":1}`);
        assert.equal(transaction.getSignature().hex(), "6269b499f9b730d2cc7ae7ffe0ee683d993051a8d090a5fc86b6a8679e416449af73893c34ead5f28768ba5d0e2cc60b5d2483060dd400fdefecedacc266e60e");
    });

    it("should sign transactions using PEM files", async () => {
        let signer = UserSigner.fromPem(alice.pemFileText);

        let transaction = new TestTransaction({
            nonce: 0,
            value: "0",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            gasPrice: 1000000000,
            gasLimit: 50000,
            data: "foo",
            chainID: "1"
        });

        await signer.sign(transaction);
        assert.equal(transaction.getSignature().hex(), "fa209f3ff1325c467d5244aea6902bf498489f769c7dddffdf33d103b13afa931fe32c06a02a13e6c570f7ecc3464aee8edb6a19c80883ca4c8e36e80e95af0e");
    });

    it("signs a general message", function () {
        let signer = new UserSigner(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf"));
        let verifier = new UserVerifier(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf").generatePublicKey());
        const message = new TestMessage({
            foo: "hello",
            bar: "world"
        });

        signer.sign(message);
        assert.isNotEmpty(message.signature);
        assert.isTrue(verifier.verify(message));
    });
});
