import { assert } from "chai";
import { Randomness } from "./crypto";
import { ErrInvariantFailed } from "./errors";
import { Mnemonic } from "./mnemonic";
import { TestMessage } from "./testutils/message";
import { TestTransaction } from "./testutils/transaction";
import { DummyMnemonic, DummyMnemonicOf12Words, DummyPassword, loadTestKeystore, loadTestWallet, TestWallet } from "./testutils/wallets";
import { UserSecretKey } from "./userKeys";
import { UserSigner } from "./userSigner";
import { UserVerifier } from "./userVerifier";
import { UserWallet } from "./userWallet";

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

    it("should derive keys (12 words)", async () => {
        const mnemonic = Mnemonic.fromString(DummyMnemonicOf12Words);

        assert.equal(mnemonic.deriveKey(0).generatePublicKey().toAddress().bech32(), "drt1l8g9dk3gz035gkjhwegsjkqzdu3augrwhcfxrnucnyyrpc2220pq4flasr");
        assert.equal(mnemonic.deriveKey(1).generatePublicKey().toAddress().bech32(), "drt1fmhwg84rldg0xzngf53m0y607wvefvamh07n2mkypedx27lcqntsg78vxl");
        assert.equal(mnemonic.deriveKey(2).generatePublicKey().toAddress().bech32(), "drt1tyuyemt4xz2yjvc7rxxp8kyfmk2n3h8gv3aavzd9ru4v2vhrkcksuhwdgv");
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

    it("should create and load keystore files (with secret keys)", function () {
        this.timeout(10000);

        let aliceSecretKey = UserSecretKey.fromString(alice.secretKeyHex);
        let bobSecretKey = UserSecretKey.fromString(bob.secretKeyHex);
        let carolSecretKey = UserSecretKey.fromString(carol.secretKeyHex);

        console.time("encrypt");
        let aliceKeyFile = UserWallet.fromSecretKey({ secretKey: aliceSecretKey, password: password });
        let bobKeyFile = UserWallet.fromSecretKey({ secretKey: bobSecretKey, password: password });
        let carolKeyFile = UserWallet.fromSecretKey({ secretKey: carolSecretKey, password: password });
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

        aliceKeyFile = UserWallet.fromSecretKey({
            secretKey: aliceSecretKey,
            password: password,
            randomness: new Randomness({
                id: alice.keyFileObject.id,
                iv: Buffer.from(alice.keyFileObject.crypto.cipherparams.iv, "hex"),
                salt: Buffer.from(alice.keyFileObject.crypto.kdfparams.salt, "hex")
            })
        });

        bobKeyFile = UserWallet.fromSecretKey({
            secretKey: bobSecretKey,
            password: password,
            randomness: new Randomness({
                id: bob.keyFileObject.id,
                iv: Buffer.from(bob.keyFileObject.crypto.cipherparams.iv, "hex"),
                salt: Buffer.from(bob.keyFileObject.crypto.kdfparams.salt, "hex")
            })
        });

        carolKeyFile = UserWallet.fromSecretKey({
            secretKey: carolSecretKey,
            password: password,
            randomness: new Randomness({
                id: carol.keyFileObject.id,
                iv: Buffer.from(carol.keyFileObject.crypto.cipherparams.iv, "hex"),
                salt: Buffer.from(carol.keyFileObject.crypto.kdfparams.salt, "hex")
            })
        });

        assert.deepEqual(aliceKeyFile.toJSON(), alice.keyFileObject);
        assert.deepEqual(bobKeyFile.toJSON(), bob.keyFileObject);
        assert.deepEqual(carolKeyFile.toJSON(), carol.keyFileObject);
    });

    it("should load keystore files (with secret keys, but without 'kind' field)", async function () {
        const keyFileObject = await loadTestKeystore("withoutKind.json");
        const secretKey = UserWallet.decryptSecretKey(keyFileObject, password);

        assert.equal(secretKey.generatePublicKey().toAddress().bech32(), "drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf");
    });

    it("should create and load keystore files (with mnemonics)", async function () {
        this.timeout(10000);

        const wallet = UserWallet.fromMnemonic({ mnemonic: DummyMnemonic, password: password });
        const json = wallet.toJSON();

        assert.equal(json.version, 4);
        assert.equal(json.kind, "mnemonic");
        assert.isUndefined(json.bech32);

        const mnemonic = UserWallet.decryptMnemonic(json, password);
        const mnemonicText = mnemonic.toString();

        assert.equal(mnemonicText, DummyMnemonic);
        assert.equal(mnemonic.deriveKey(0).generatePublicKey().toAddress().bech32(), alice.address.bech32());
        assert.equal(mnemonic.deriveKey(1).generatePublicKey().toAddress().bech32(), bob.address.bech32());
        assert.equal(mnemonic.deriveKey(2).generatePublicKey().toAddress().bech32(), carol.address.bech32());

        // With provided randomness, in order to reproduce our test wallets
        const expectedDummyWallet = await loadTestKeystore("withDummyMnemonic.json");
        const dummyWallet = UserWallet.fromMnemonic({
            mnemonic: DummyMnemonic,
            password: password,
            randomness: new Randomness({
                id: "5b448dbc-5c72-4d83-8038-938b1f8dff19",
                iv: Buffer.from("2da5620906634972d9a623bc249d63d4", "hex"),
                salt: Buffer.from("aa9e0ba6b188703071a582c10e5331f2756279feb0e2768f1ba0fd38ec77f035", "hex")
            })
        });

        assert.deepEqual(dummyWallet.toJSON(), expectedDummyWallet);
    });

    it("should sign transactions", async () => {
        let signer = new UserSigner(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf"));
        let verifier = new UserVerifier(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf").generatePublicKey());

        // With data field
        let transaction = new TestTransaction({
            nonce: 0,
            value: "0",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            gasPrice: 1000000000,
            gasLimit: 50000,
            data: "foo",
            chainID: "1",
        });

        let serialized = transaction.serializeForSigning();
        let signature = await signer.sign(serialized);

        assert.equal(serialized.toString(), `{"nonce":0,"value":"0","receiver":"drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha","sender":"","gasPrice":1000000000,"gasLimit":50000,"data":"Zm9v","chainID":"1","version":1}`);
        assert.equal(signature.toString("hex"), "0f7653c6baee0b61cd5e655a646038b0cccfb868d4664f1e14b521ba56fd5f4b49465273f4cd814656dbf6e4bb4830f526f51d94a5a15f4911b6085a5f952501");
        assert.isTrue(verifier.verify(serialized, signature));
        // Without data field
        transaction = new TestTransaction({
            nonce: 8,
            value: "10000000000000000000",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            gasPrice: 1000000000,
            gasLimit: 50000,
            chainID: "1"
        });

        serialized = transaction.serializeForSigning();
        signature = await signer.sign(serialized);

        assert.equal(serialized.toString(), `{"nonce":8,"value":"10000000000000000000","receiver":"drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha","sender":"","gasPrice":1000000000,"gasLimit":50000,"chainID":"1","version":1}`);
        assert.equal(signature.toString("hex"), "523bd77e6b139c67e0c79fe048460e3107884d95260a5357386be5b7dae80a36451bf83148bdabd100124c148d8f80bbe19926b9701bada3011a72bf642ad70e");
    });

    it("guardian should sign transactions from PEM", async () => {
        // bob is the guardian
        let signer = new UserSigner(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf"));
        let verifier = new UserVerifier(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf").generatePublicKey());
        let guardianSigner = new UserSigner(UserSecretKey.fromPem(bob.pemFileText));

        // With data field
        let transaction = new TestTransaction({
            nonce: 0,
            value: "0",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            sender: "drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu",
            gasPrice: 1000000000,
            gasLimit: 50000,
            data: "foo",
            chainID: "1",
            guardian: "drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c",
            options: 2,
            version: 2
        });

        let serialized = transaction.serializeForSigning();
        let signature = await signer.sign(serialized);
        let guardianSignature = await guardianSigner.sign(serialized);

        assert.equal(serialized.toString(), `{"nonce":0,"value":"0","receiver":"drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha","sender":"drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu","guardian":"drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c","gasPrice":1000000000,"gasLimit":50000,"data":"Zm9v","chainID":"1","options":2,"version":2}`);
        assert.equal(signature.toString("hex"), "393c8d4bb22ae1298d09b61d7257aba69c9a7233c9cb99a9142caba25ffac5da35a3fafbc572545c09dc38d46c7167c00dd1189fb77bb781cf1901b009137201");
        assert.equal(guardianSignature.toString("hex"), "b135da0376f6cde58f78fd48c28d159ed34c1679305d3b151cbeb10cc635e927da1d66b9b7d24ae31e02c52052ca7fd311635c186ad598b57a1768cbfb1d320c");
        assert.isTrue(verifier.verify(serialized, signature));

        // Without data field
        transaction = new TestTransaction({
            nonce: 8,
            value: "10000000000000000000",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            sender: "drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu",
            gasPrice: 1000000000,
            gasLimit: 50000,
            chainID: "1",
            guardian: "drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c",
            options: 2,
            version: 2,
        });

        serialized = transaction.serializeForSigning();
        signature = await signer.sign(serialized);
        guardianSignature = await guardianSigner.sign(serialized);

        assert.equal(serialized.toString(), `{"nonce":8,"value":"10000000000000000000","receiver":"drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha","sender":"drt1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsxvluwu","guardian":"drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c","gasPrice":1000000000,"gasLimit":50000,"chainID":"1","options":2,"version":2}`);
        assert.equal(signature.toString("hex"), "f1a724936284274e685f05db637ccdec3fb29ab46f60ffcd7d67bd0baaf6dc59cdedc13dbdfee401ce129df8a5c35965019e8765f502b4ae53b9a406d3be7707");
        assert.equal(guardianSignature.toString("hex"), "f059e2fe9014eea0fac1f5afdc25ee76cf5dc6506c0200fc9966db2380f2bd56c2f4bf920bad2ba420ab097dd56f1c4215ce7b68b88a5cc61857e00275693d08");
        assert.isTrue(verifier.verify(serialized, signature));
    });

    it("should sign transactions using PEM files", async () => {
        const signer = UserSigner.fromPem(alice.pemFileText);

        const transaction = new TestTransaction({
            nonce: 0,
            value: "0",
            receiver: "drt1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmqgsejha",
            gasPrice: 1000000000,
            gasLimit: 50000,
            data: "foo",
            chainID: "1"
        });

        const signature = await signer.sign(transaction.serializeForSigning());
        assert.equal(signature.toString("hex"), "9b211b30d96125627696725d323a0e49ecd3bf19d5079009499ee2204b32b426b7225a268d4b6358eb1c976c2626e64fe0038a8d7a5ff89cba6b1d7969874b02");
    });

    it("signs a general message", async function () {
        let signer = new UserSigner(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf"));
        let verifier = new UserVerifier(UserSecretKey.fromString("1a927e2af5306a9bb2ea777f73e06ecc0ac9aaa72fb4ea3fecf659451394cccf").generatePublicKey());

        const message = new TestMessage({
            foo: "hello",
            bar: "world"
        });

        const data = message.serializeForSigning();
        const signature = await signer.sign(data);

        assert.isTrue(verifier.verify(data, signature));
        assert.isFalse(verifier.verify(Buffer.from("hello"), signature));
    });
});
