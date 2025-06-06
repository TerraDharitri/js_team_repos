import { assert } from "chai";
import { DCDT_CONTRACT_ADDRESS_HEX } from "../constants";
import { loadTestWallets, TestWallet } from "../testutils";
import { TokenManagementTransactionsFactory } from "./tokenManagementTransactionsFactory";
import { TransactionsFactoryConfig } from "./transactionsFactoryConfig";
import { Address } from "../address";

describe("test token management transactions factory", () => {
    let frank: TestWallet, grace: TestWallet;
    let tokenManagementFactory: TokenManagementTransactionsFactory;
    let config: TransactionsFactoryConfig;

    before(async function () {
        ({ frank, grace } = await loadTestWallets());
        config = new TransactionsFactoryConfig({ chainID: "T" });
        tokenManagementFactory = new TokenManagementTransactionsFactory({ config: config });
    });

    it("should create 'Transaction' for registering and setting roles", () => {
        const transaction = tokenManagementFactory.createTransactionForRegisteringAndSettingRoles({
            sender: frank.address,
            tokenName: "TEST",
            tokenTicker: "TEST",
            tokenType: "FNG",
            numDecimals: 2n,
        });

        assert.deepEqual(transaction.data, Buffer.from("registerAndSetAllRoles@54455354@54455354@464e47@02"));
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, "drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqzlllsd5j0s2");
        assert.deepEqual(transaction.value, config.issueCost);
        assert.deepEqual(transaction.gasLimit, 60125000n);
    });

    it("should create 'Transaction' for issuing fungible token", () => {
        const transaction = tokenManagementFactory.createTransactionForIssuingFungible({
            sender: frank.address,
            tokenName: "FRANK",
            tokenTicker: "FRANK",
            initialSupply: 100n,
            numDecimals: 0n,
            canFreeze: true,
            canWipe: true,
            canPause: true,
            canChangeOwner: true,
            canUpgrade: false,
            canAddSpecialRoles: false,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "issue@4652414e4b@4652414e4b@64@@63616e467265657a65@74727565@63616e57697065@74727565@63616e5061757365@74727565@63616e4368616e67654f776e6572@74727565@63616e55706772616465@66616c7365@63616e4164645370656369616c526f6c6573@66616c7365",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.deepEqual(transaction.value, config.issueCost);
    });

    it("should create 'Transaction' for issuing semi-fungible token", () => {
        const transaction = tokenManagementFactory.createTransactionForIssuingSemiFungible({
            sender: frank.address,
            tokenName: "FRANK",
            tokenTicker: "FRANK",
            canFreeze: true,
            canWipe: true,
            canPause: true,
            canTransferNFTCreateRole: true,
            canChangeOwner: true,
            canUpgrade: false,
            canAddSpecialRoles: false,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "issueSemiFungible@4652414e4b@4652414e4b@63616e467265657a65@74727565@63616e57697065@74727565@63616e5061757365@74727565@63616e5472616e736665724e4654437265617465526f6c65@74727565@63616e4368616e67654f776e6572@74727565@63616e55706772616465@66616c7365@63616e4164645370656369616c526f6c6573@66616c7365",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.deepEqual(transaction.value, config.issueCost);
    });

    it("should create 'Transaction' for issuing non-fungible token", () => {
        const transaction = tokenManagementFactory.createTransactionForIssuingNonFungible({
            sender: frank.address,
            tokenName: "FRANK",
            tokenTicker: "FRANK",
            canFreeze: true,
            canWipe: true,
            canPause: true,
            canTransferNFTCreateRole: true,
            canChangeOwner: true,
            canUpgrade: false,
            canAddSpecialRoles: false,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "issueNonFungible@4652414e4b@4652414e4b@63616e467265657a65@74727565@63616e57697065@74727565@63616e5061757365@74727565@63616e5472616e736665724e4654437265617465526f6c65@74727565@63616e4368616e67654f776e6572@74727565@63616e55706772616465@66616c7365@63616e4164645370656369616c526f6c6573@66616c7365",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.deepEqual(transaction.value, config.issueCost);
    });

    it("should create 'Transaction' for registering metaDcdt", () => {
        const transaction = tokenManagementFactory.createTransactionForRegisteringMetaDCDT({
            sender: frank.address,
            tokenName: "FRANK",
            tokenTicker: "FRANK",
            numDecimals: 10n,
            canFreeze: true,
            canWipe: true,
            canPause: true,
            canTransferNFTCreateRole: true,
            canChangeOwner: true,
            canUpgrade: false,
            canAddSpecialRoles: false,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "registerMetaDCDT@4652414e4b@4652414e4b@0a@63616e467265657a65@74727565@63616e57697065@74727565@63616e5061757365@74727565@63616e5472616e736665724e4654437265617465526f6c65@74727565@63616e4368616e67654f776e6572@74727565@63616e55706772616465@66616c7365@63616e4164645370656369616c526f6c6573@66616c7365",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.deepEqual(transaction.value, config.issueCost);
    });

    it("should create 'Transaction' for setting special role on fungible token", () => {
        const transaction = tokenManagementFactory.createTransactionForSettingSpecialRoleOnFungibleToken({
            sender: frank.address,
            user: grace.address,
            tokenIdentifier: "FRANK-11ce3e",
            addRoleLocalMint: true,
            addRoleLocalBurn: false,
            addRoleDCDTTransferRole: false,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "setSpecialRole@4652414e4b2d313163653365@b20d2fc05606198c671c67e83d571ec4b9e901c1a5aea53ab9d60693abc1cfe4@44434454526f6c654c6f63616c4d696e74",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
    });

    it("should create 'Transaction' for setting all special roles on fungible token", () => {
        const transaction = tokenManagementFactory.createTransactionForSettingSpecialRoleOnFungibleToken({
            sender: frank.address,
            user: grace.address,
            tokenIdentifier: "FRANK-11ce3e",
            addRoleLocalMint: true,
            addRoleLocalBurn: true,
            addRoleDCDTTransferRole: true,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "setSpecialRole@4652414e4b2d313163653365@b20d2fc05606198c671c67e83d571ec4b9e901c1a5aea53ab9d60693abc1cfe4@44434454526f6c654c6f63616c4d696e74@44434454526f6c654c6f63616c4275726e@444344545472616e73666572526f6c65",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
    });

    it("should create 'Transaction' for setting special role on non-fungible token", () => {
        const transaction = tokenManagementFactory.createTransactionForSettingSpecialRoleOnNonFungibleToken({
            sender: frank.address,
            user: grace.address,
            tokenIdentifier: "FRANK-11ce3e",
            addRoleNFTCreate: true,
            addRoleNFTBurn: false,
            addRoleNFTUpdateAttributes: true,
            addRoleNFTAddURI: true,
            addRoleDCDTTransferRole: false,
            addRoleDCDTModifyCreator: true,
            addRoleNFTRecreate: true,
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "setSpecialRole@4652414e4b2d313163653365@b20d2fc05606198c671c67e83d571ec4b9e901c1a5aea53ab9d60693abc1cfe4@44434454526f6c654e4654437265617465@44434454526f6c654e465455706461746541747472696275746573@44434454526f6c654e4654416464555249@44434454526f6c654d6f6469667943726561746f72@44434454526f6c654e46545265637265617465",
            ),
        );
        assert.equal(transaction.sender, frank.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
    });

    it("should create 'Transaction' for creating nft", () => {
        const transaction = tokenManagementFactory.createTransactionForCreatingNFT({
            sender: grace.address,
            tokenIdentifier: "FRANK-aa9e8d",
            initialQuantity: 1n,
            name: "test",
            royalties: 1000,
            hash: "abba",
            attributes: Buffer.from("test"),
            uris: ["a", "b"],
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from("DCDTNFTCreate@4652414e4b2d616139653864@01@74657374@03e8@61626261@74657374@61@62"),
        );
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, grace.address.toString());
        assert.equal(transaction.value, 0n);
    });

    it("should create 'Transaction' for modifying royalties", () => {
        const transaction = tokenManagementFactory.createTransactionForModifyingRoyalties({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
            tokenNonce: 1n,
            newRoyalties: 1234n,
        });

        assert.deepEqual(transaction.data, Buffer.from("DCDTModifyRoyalties@544553542d313233343536@01@04d2"));
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, grace.address.toString());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60125000n);
    });

    it("should create 'Transaction' for setting new URIs", () => {
        const transaction = tokenManagementFactory.createTransactionForSettingNewUris({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
            tokenNonce: 1n,
            newUris: ["firstURI", "secondURI"],
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from("DCDTSetNewURIs@544553542d313233343536@01@6669727374555249@7365636f6e64555249"),
        );
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, grace.address.toString());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60164000n);
    });

    it("should create 'Transaction' for modifying creator", () => {
        const transaction = tokenManagementFactory.createTransactionForModifyingCreator({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
            tokenNonce: 1n,
        });

        assert.deepEqual(transaction.data, Buffer.from("DCDTModifyCreator@544553542d313233343536@01"));
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, grace.address.toString());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60114500n);
    });

    it("should create 'Transaction' for updating metadata", () => {
        const transaction = tokenManagementFactory.createTransactionForUpdatingMetadata({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
            tokenNonce: 1n,
            newTokenName: "Test",
            newRoyalties: 1234n,
            newHash: "abba",
            newAttributes: Buffer.from("test"),
            newUris: ["firstURI", "secondURI"],
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "DCDTMetaDataUpdate@544553542d313233343536@01@54657374@04d2@61626261@74657374@6669727374555249@7365636f6e64555249",
            ),
        );
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, grace.address.toString());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60218000n);
    });

    it("should create 'Transaction' for recreating metadata", () => {
        const transaction = tokenManagementFactory.createTransactionForMetadataRecreate({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
            tokenNonce: 1n,
            newTokenName: "Test",
            newRoyalties: 1234n,
            newHash: "abba",
            newAttributes: Buffer.from("test"),
            newUris: ["firstURI", "secondURI"],
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "DCDTMetaDataRecreate@544553542d313233343536@01@54657374@04d2@61626261@74657374@6669727374555249@7365636f6e64555249",
            ),
        );
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, grace.address.toString());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60221000n);
    });

    it("should create 'Transaction' for changing to dynamic", () => {
        const transaction = tokenManagementFactory.createTransactionForChangingTokenToDynamic({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
        });

        assert.deepEqual(transaction.data, Buffer.from("changeToDynamic@544553542d313233343536"));
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60107000n);
    });

    it("should create 'Transaction' for updating token id", () => {
        const transaction = tokenManagementFactory.createTransactionForUpdatingTokenId({
            sender: grace.address,
            tokenIdentifier: "TEST-123456",
        });

        assert.deepEqual(transaction.data, Buffer.from("updateTokenID@544553542d313233343536"));
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60104000n);
    });

    it("should create 'Transaction' for registering dynamic", () => {
        const transaction = tokenManagementFactory.createTransactionForRegisteringDynamicToken({
            sender: grace.address,
            tokenName: "Test",
            tokenTicker: "TEST-123456",
            tokenType: "FNG",
        });

        assert.deepEqual(transaction.data, Buffer.from("registerDynamic@54657374@544553542d313233343536@464e47"));
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60131000n);
    });

    it("should create 'Transaction' for registering and setting all roles", () => {
        const transaction = tokenManagementFactory.createTransactionForRegisteringDynamicAndSettingRoles({
            sender: grace.address,
            tokenName: "Test",
            tokenTicker: "TEST-123456",
            tokenType: "FNG",
        });

        assert.deepEqual(
            transaction.data,
            Buffer.from("registerAndSetAllRolesDynamic@54657374@544553542d313233343536@464e47"),
        );
        assert.equal(transaction.sender, grace.address.toString());
        assert.equal(transaction.receiver, Address.newFromHex(DCDT_CONTRACT_ADDRESS_HEX, config.addressHrp).toBech32());
        assert.equal(transaction.value, 0n);
        assert.equal(transaction.gasLimit, 60152000n);
    });
});
