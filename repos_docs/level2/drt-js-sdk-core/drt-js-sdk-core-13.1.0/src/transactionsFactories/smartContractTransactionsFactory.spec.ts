import { assert, expect } from "chai";
import { Address } from "../address";
import { CONTRACT_DEPLOY_ADDRESS } from "../constants";
import { Err } from "../errors";
import { U32Value } from "../smartcontracts";
import { Code } from "../smartcontracts/code";
import { AbiRegistry } from "../smartcontracts/typesystem/abiRegistry";
import { loadAbiRegistry, loadContractCode } from "../testutils/utils";
import { Token, TokenTransfer } from "../tokens";
import { SmartContractTransactionsFactory } from "./smartContractTransactionsFactory";
import { TransactionsFactoryConfig } from "./transactionsFactoryConfig";

describe("test smart contract transactions factory", function () {
    const config = new TransactionsFactoryConfig({ chainID: "D" });
    let smartContractFactory: SmartContractTransactionsFactory;
    let abiAwareFactory: SmartContractTransactionsFactory;
    let adderByteCode: Code;
    let abiRegistry: AbiRegistry;

    before(async function () {
        smartContractFactory = new SmartContractTransactionsFactory({
            config: config,
        });

        adderByteCode = await loadContractCode("src/testdata/adder.wasm");
        abiRegistry = await loadAbiRegistry("src/testdata/adder.abi.json");

        abiAwareFactory = new SmartContractTransactionsFactory({
            config: config,
            abi: abiRegistry,
        });
    });

    it("should throw error when args are not of type 'TypedValue'", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const gasLimit = 6000000n;
        const args = [0];

        assert.throws(
            () =>
                smartContractFactory.createTransactionForDeploy({
                    sender: sender,
                    bytecode: adderByteCode.valueOf(),
                    gasLimit: gasLimit,
                    arguments: args,
                }),
            Err,
            "Can't convert args to TypedValues",
        );
    });

    it("should create 'Transaction' for deploy", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const gasLimit = 6000000n;
        const args = [new U32Value(0)];

        const transaction = smartContractFactory.createTransactionForDeploy({
            sender: sender,
            bytecode: adderByteCode.valueOf(),
            gasLimit: gasLimit,
            arguments: args,
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForDeploy({
            sender: sender,
            bytecode: adderByteCode.valueOf(),
            gasLimit: gasLimit,
            arguments: args,
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, CONTRACT_DEPLOY_ADDRESS);
        expect(transaction.data.length).to.be.greaterThan(0);
        assert.equal(transaction.gasLimit.valueOf(), gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for execute without transfer", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const func = "add";
        const gasLimit = 6000000n;
        const args = [new U32Value(7)];

        const transaction = smartContractFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        assert.deepEqual(transaction.data, Buffer.from("add@07"));
        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for execute and transfer native token", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const func = "add";
        const gasLimit = 6000000n;
        const rewaAmount = 1000000000000000000n;

        const transaction = smartContractFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: [new U32Value(7)],
            nativeTransferAmount: rewaAmount,
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: [7],
            nativeTransferAmount: rewaAmount,
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        assert.deepEqual(transaction.data, Buffer.from("add@07"));
        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 1000000000000000000n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for execute and transfer single dcdt", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const func = "add";
        const gasLimit = 6000000n;
        const args = [new U32Value(7)];
        const token = new Token({ identifier: "FOO-6ce17b", nonce: 0n });
        const transfer = new TokenTransfer({ token, amount: 10n });

        const transaction = smartContractFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [transfer],
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [transfer],
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        assert.deepEqual(transaction.data, Buffer.from("DCDTTransfer@464f4f2d366365313762@0a@616464@07"));
        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for execute and transfer multiple dcdts", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqak8zt22wl2ph4tswtyc39namqx6ysa2sd8ssg6vu30");
        const func = "add";
        const gasLimit = 6000000n;
        const args = [new U32Value(7)];

        const fooToken = new Token({ identifier: "FOO-6ce17b", nonce: 0n });
        const fooTransfer = new TokenTransfer({ token: fooToken, amount: 10n });
        const barToken = new Token({ identifier: "BAR-5bc08f", nonce: 0n });
        const barTransfer = new TokenTransfer({ token: barToken, amount: 3140n });

        const transaction = smartContractFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [fooTransfer, barTransfer],
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [fooTransfer, barTransfer],
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");

        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "MultiDCDTNFTTransfer@00000000000000000500ed8e25a94efa837aae0e593112cfbb01b448755069e1@02@464f4f2d366365313762@@0a@4241522d356263303866@@0c44@616464@07",
            ),
        );

        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for execute and transfer single nft", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const func = "add";
        const gasLimit = 6000000n;
        const args = [new U32Value(7)];

        const token = new Token({ identifier: "NFT-123456", nonce: 1n });
        const transfer = new TokenTransfer({ token, amount: 1n });

        const transaction = smartContractFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [transfer],
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [transfer],
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");

        assert.isDefined(transaction.data);
        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "DCDTNFTTransfer@4e46542d313233343536@01@01@00000000000000000500b9353fe8407f87310c87e12fa1ac807f0485da39d152@616464@07",
            ),
        );

        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for execute and transfer multiple nfts", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const func = "add";
        const gasLimit = 6000000n;
        const args = [new U32Value(7)];

        const firstToken = new Token({ identifier: "NFT-123456", nonce: 1n });
        const firstTransfer = new TokenTransfer({ token: firstToken, amount: 1n });
        const secondToken = new Token({ identifier: "NFT-123456", nonce: 42n });
        const secondTransfer = new TokenTransfer({ token: secondToken, amount: 1n });

        const transaction = smartContractFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [firstTransfer, secondTransfer],
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForExecute({
            sender: sender,
            contract: contract,
            function: func,
            gasLimit: gasLimit,
            arguments: args,
            tokenTransfers: [firstTransfer, secondTransfer],
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");

        assert.isDefined(transaction.data);
        assert.deepEqual(
            transaction.data,
            Buffer.from(
                "MultiDCDTNFTTransfer@00000000000000000500b9353fe8407f87310c87e12fa1ac807f0485da39d152@02@4e46542d313233343536@01@01@4e46542d313233343536@2a@01@616464@07",
            ),
        );

        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for upgrade", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const gasLimit = 6000000n;
        const args = [new U32Value(7)];

        const transaction = smartContractFactory.createTransactionForUpgrade({
            sender: sender,
            contract: contract,
            bytecode: adderByteCode.valueOf(),
            gasLimit: gasLimit,
            arguments: args,
        });

        const transactionAbiAware = abiAwareFactory.createTransactionForUpgrade({
            sender: sender,
            contract: contract,
            bytecode: adderByteCode.valueOf(),
            gasLimit: gasLimit,
            arguments: args,
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        assert.equal(Buffer.from(transaction.data!).toString(), `upgradeContract@${adderByteCode}@0504@07`);
        assert.equal(transaction.gasLimit, gasLimit);
        assert.equal(transaction.value, 0n);

        assert.deepEqual(transaction, transactionAbiAware);
    });

    it("should create 'Transaction' for upgrade, when ABI is available, but it doesn't contain a definition for 'upgrade'", async function () {
        const abi = await loadAbiRegistry("src/testdata/adder.abi.json");
        // Remove all endpoints (for the sake of the test).
        abi.endpoints.length = 0;

        const factory = new SmartContractTransactionsFactory({
            config: config,
            abi: abi,
        });

        const transaction = factory.createTransactionForUpgrade({
            sender: Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l"),
            contract: Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut"),
            bytecode: adderByteCode.valueOf(),
            gasLimit: 6000000n,
            arguments: [new U32Value(7)],
        });

        assert.equal(Buffer.from(transaction.data!).toString(), `upgradeContract@${adderByteCode}@0504@07`);
    });

    it("should create 'Transaction' for claiming developer rewards", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");

        const transaction = smartContractFactory.createTransactionForClaimingDeveloperRewards({
            sender: sender,
            contract: contract,
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        assert.equal(Buffer.from(transaction.data).toString(), "ClaimDeveloperRewards");
        assert.equal(transaction.gasLimit, 6000000n);
        assert.equal(transaction.value, 0n);
    });

    it("should create 'Transaction' for changing owner address", async function () {
        const sender = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        const newOwner = Address.fromBech32("drt18h03w0y7qtqwtra3u4f0gu7e3kn2fslj83lqxny39m5c4rwaectswerhd2");

        const transaction = smartContractFactory.createTransactionForChangingOwnerAddress({
            sender: sender,
            contract: contract,
            newOwner: newOwner,
        });

        assert.equal(transaction.sender, "drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        assert.equal(transaction.receiver, "drt1qqqqqqqqqqqqqpgqhy6nl6zq07rnzry8uyh6rtyq0uzgtk3e69fq4h4xut");
        assert.equal(
            Buffer.from(transaction.data).toString(),
            "ChangeOwnerAddress@3ddf173c9e02c0e58fb1e552f473d98da6a4c3f23c7e034c912ee98a8dddce17",
        );
        assert.equal(transaction.gasLimit, 6000000n);
        assert.equal(transaction.value, 0n);
    });
});
