import { assert } from "chai";
import { TokenTransfer } from "./tokenTransfer";

describe("test token transfer", () => {
    it("should work with REWA", () => {
        assert.equal(TokenTransfer.rewaFromAmount("1").toString(), "1000000000000000000");
        assert.equal(TokenTransfer.rewaFromAmount("10").toString(), "10000000000000000000");
        assert.equal(TokenTransfer.rewaFromAmount("100").toString(), "100000000000000000000");
        assert.equal(TokenTransfer.rewaFromAmount("1000").toString(), "1000000000000000000000");
        assert.equal(TokenTransfer.rewaFromAmount("0.1").toString(), "100000000000000000");
        assert.equal(TokenTransfer.rewaFromAmount("0.123456789").toString(), "123456789000000000");
        assert.equal(TokenTransfer.rewaFromAmount("0.123456789123456789").toString(), "123456789123456789");
        assert.equal(TokenTransfer.rewaFromAmount("0.123456789123456789777").toString(), "123456789123456789");
        assert.equal(TokenTransfer.rewaFromAmount("0.123456789123456789777777888888").toString(), "123456789123456789");

        assert.equal(TokenTransfer.rewaFromAmount(0.1).toPrettyString(), "0.100000000000000000 REWA");
        assert.equal(TokenTransfer.rewaFromAmount(1).toPrettyString(), "1.000000000000000000 REWA");
        assert.equal(TokenTransfer.rewaFromAmount(10).toPrettyString(), "10.000000000000000000 REWA");
        assert.equal(TokenTransfer.rewaFromAmount(100).toPrettyString(), "100.000000000000000000 REWA");
        assert.equal(TokenTransfer.rewaFromAmount(1000).toPrettyString(), "1000.000000000000000000 REWA");
        assert.equal(TokenTransfer.rewaFromAmount("0.123456789").toPrettyString(), "0.123456789000000000 REWA");
        assert.equal(
            TokenTransfer.rewaFromAmount("0.123456789123456789777777888888").toPrettyString(),
            "0.123456789123456789 REWA",
        );

        assert.equal(TokenTransfer.rewaFromBigInteger("1").toString(), "1");
        assert.equal(TokenTransfer.rewaFromBigInteger("1").toPrettyString(), "0.000000000000000001 REWA");
        assert.isTrue(TokenTransfer.rewaFromAmount("1").isRewa());
    });

    it("should work with USDC", () => {
        const identifier = "USDC-c76f1f";
        const numDecimals = 6;

        assert.equal(TokenTransfer.fungibleFromAmount(identifier, "1", numDecimals).toString(), "1000000");
        assert.equal(TokenTransfer.fungibleFromAmount(identifier, "0.1", numDecimals).toString(), "100000");
        assert.equal(TokenTransfer.fungibleFromAmount(identifier, "0.123456789", numDecimals).toString(), "123456");
        assert.equal(TokenTransfer.fungibleFromBigInteger(identifier, "1000000", numDecimals).toString(), "1000000");
        assert.equal(
            TokenTransfer.fungibleFromBigInteger(identifier, "1000000", numDecimals).toPrettyString(),
            "1.000000 USDC-c76f1f",
        );
    });

    it("should work with MetaDCDT", () => {
        const identifier = "MOAFARML-28d646";
        const numDecimals = 18;
        const nonce = 12345678;
        const transfer = TokenTransfer.metaDcdtFromAmount(identifier, nonce, "0.1", numDecimals);

        assert.equal(transfer.tokenIdentifier, identifier);
        assert.equal(transfer.nonce, nonce);
        assert.equal(transfer.toString(), "100000000000000000");
    });

    it("should work with NFTs", () => {
        const identifier = "TEST-38f249";
        const nonce = 1;
        const transfer = TokenTransfer.nonFungible(identifier, nonce);

        assert.equal(transfer.tokenIdentifier, identifier);
        assert.equal(transfer.nonce, nonce);
        assert.equal(transfer.toPrettyString(), "1 TEST-38f249");
    });
});
