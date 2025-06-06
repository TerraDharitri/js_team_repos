import { assert } from "chai";
import { Account } from "../accounts";
import { getTestWalletsPath } from "../testutils/utils";
import { DEFAULT_MESSAGE_VERSION, SDK_JS_SIGNER, UNKNOWN_SIGNER } from "./constants";
import { Message, MessageComputer } from "./message";

describe("test message", () => {
    let alice: Account;
    const messageComputer = new MessageComputer();

    before(async function () {
        alice = await Account.newFromPem(`${getTestWalletsPath()}/alice.pem`);
    });

    it("should test message compute bytes for signing", async () => {
        const data = Buffer.from("test message");

        const message = new Message({
            data: data,
        });

        const serialized = messageComputer.computeBytesForSigning(message);

        assert.equal(
            Buffer.from(serialized).toString("hex"),
            "0f6fce3fa6130fc58a25eaff6e157ea1bcb02fbf9773dca514dfaf3cd1e0bdfe",
        );
    });

    it("should create, sign, pack, unpack and verify message", async () => {
        const data = Buffer.from("test");

        const message = new Message({
            data: data,
            address: alice.address,
        });

        message.signature = await alice.signMessage(message);

        assert.equal(
            Buffer.from(message.signature).toString("hex"),
            "4b9b9293d7aa63b012641485865027adef8b4d4351d27f59ae62979acd49b328876c2fce97a2bed20f2ac12180155494ce1a1dc6103ec78a1ed32c6132734004",
        );

        const packedMessage = messageComputer.packMessage(message);
        assert.deepEqual(packedMessage, {
            address: "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l",
            message: "74657374",
            signature:
                "4b9b9293d7aa63b012641485865027adef8b4d4351d27f59ae62979acd49b328876c2fce97a2bed20f2ac12180155494ce1a1dc6103ec78a1ed32c6132734004",
            version: 1,
            signer: SDK_JS_SIGNER,
        });

        const unpackedMessage = messageComputer.unpackMessage(packedMessage);
        assert.deepEqual(unpackedMessage.address, alice.address);
        assert.deepEqual(unpackedMessage.data, message.data);
        assert.deepEqual(unpackedMessage.signature, message.signature);
        assert.deepEqual(unpackedMessage.version, message.version);
        assert.deepEqual(unpackedMessage.signer, message.signer);

        const isValid = await alice.verifyMessageSignature(unpackedMessage, Buffer.from(unpackedMessage.signature!));
        assert.isTrue(isValid);
    });

    it("should unpack legacy message", async () => {
        const legacyMessage = {
            address: "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l",
            message: "0x7468697320697320612074657374206d657373616765",
            signature:
                "0xb16847437049986f936dd4a0917c869730cbf29e40a0c0821ca70db33f44758c3d41bcbea446dee70dea13d50942343bb78e74979dc434bbb2b901e0f4fd1809",
            version: 1,
            signer: "DrtJS",
        };

        const message = messageComputer.unpackMessage(legacyMessage);
        assert.deepEqual(message.address, alice.address);
        assert.deepEqual(Buffer.from(message.data).toString(), "this is a test message");
        assert.deepEqual(
            Buffer.from(message.signature!).toString("hex"),
            "b16847437049986f936dd4a0917c869730cbf29e40a0c0821ca70db33f44758c3d41bcbea446dee70dea13d50942343bb78e74979dc434bbb2b901e0f4fd1809",
        );
        assert.deepEqual(message.version, DEFAULT_MESSAGE_VERSION);
        assert.equal(message.signer, "DrtJS");
    });

    it("should unpack message", async () => {
        const packedMessage = {
            address: "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l",
            message: "0x7468697320697320612074657374206d657373616765",
            signature:
                "0xb16847437049986f936dd4a0917c869730cbf29e40a0c0821ca70db33f44758c3d41bcbea446dee70dea13d50942343bb78e74979dc434bbb2b901e0f4fd1809",
        };

        const message = messageComputer.unpackMessage(packedMessage);
        assert.deepEqual(message.address, alice.address);
        assert.deepEqual(Buffer.from(message.data).toString(), "this is a test message");
        assert.deepEqual(
            Buffer.from(message.signature!).toString("hex"),
            "b16847437049986f936dd4a0917c869730cbf29e40a0c0821ca70db33f44758c3d41bcbea446dee70dea13d50942343bb78e74979dc434bbb2b901e0f4fd1809",
        );
        assert.deepEqual(message.version, DEFAULT_MESSAGE_VERSION);
        assert.equal(message.signer, UNKNOWN_SIGNER);
    });
});
