import {
    ContractResultItem,
    ContractResults,
    TransactionEventTopic,
    TransactionOnNetwork,
    TransactionEvent as TransactionOnNetworkEvent,
    TransactionLogs as TransactionOnNetworkLogs,
} from "@terradharitri/sdk-network-providers";
import BigNumber from "bignumber.js";
import { assert } from "chai";
import { Address } from "../address";
import { TransactionsConverter } from "../converters/transactionsConverter";
import { loadAbiRegistry } from "../testutils";
import { SmartContractCallOutcome, TransactionEvent, TransactionLogs, TransactionOutcome } from "./resources";
import { SmartContractTransactionsOutcomeParser } from "./smartContractTransactionsOutcomeParser";

describe("test smart contract transactions outcome parser", () => {
    it("parses deploy outcome (minimalistic)", async function () {
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqqacl85rd0gl2q8wggl8pwcyzcr4fflc5d8ss39zhmv");
        const deployer = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const codeHash = Buffer.from("abba", "hex");

        const parser = new SmartContractTransactionsOutcomeParser();

        const parsed = parser.parseDeploy({
            transactionOutcome: new TransactionOutcome({
                directSmartContractCallOutcome: new SmartContractCallOutcome({
                    returnCode: "ok",
                    returnMessage: "ok",
                }),
                logs: new TransactionLogs({
                    events: [
                        new TransactionEvent({
                            identifier: "SCDeploy",
                            topics: [contract.getPublicKey(), deployer.getPublicKey(), codeHash],
                        }),
                    ],
                }),
            }),
        });

        assert.equal(parsed.returnCode, "ok");
        assert.equal(parsed.returnMessage, "ok");
        assert.deepEqual(parsed.contracts, [
            {
                address: contract.toBech32(),
                ownerAddress: deployer.toBech32(),
                codeHash: codeHash,
            },
        ]);
    });

    it("parses deploy outcome", async function () {
        const contract = Address.fromBech32("drt1qqqqqqqqqqqqqpgqqacl85rd0gl2q8wggl8pwcyzcr4fflc5d8ss39zhmv");
        const deployer = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");
        const codeHash = Buffer.from("abba", "hex");

        const parser = new SmartContractTransactionsOutcomeParser();
        const transactionsConverter = new TransactionsConverter();

        const transactionOnNetwork = new TransactionOnNetwork({
            nonce: 7,
            logs: new TransactionOnNetworkLogs({
                events: [
                    new TransactionOnNetworkEvent({
                        identifier: "SCDeploy",
                        topics: [
                            new TransactionEventTopic(contract.getPublicKey().toString("base64")),
                            new TransactionEventTopic(deployer.getPublicKey().toString("base64")),
                            new TransactionEventTopic(codeHash.toString("base64")),
                        ],
                    }),
                ],
            }),
            contractResults: new ContractResults([
                new ContractResultItem({
                    nonce: 8,
                    data: "@6f6b",
                }),
            ]),
        });

        const transactionOutcome = transactionsConverter.transactionOnNetworkToOutcome(transactionOnNetwork);
        const parsed = parser.parseDeploy({ transactionOutcome });

        assert.equal(parsed.returnCode, "ok");
        assert.equal(parsed.returnMessage, "ok");
        assert.deepEqual(parsed.contracts, [
            {
                address: contract.toBech32(),
                ownerAddress: deployer.toBech32(),
                codeHash: codeHash,
            },
        ]);
    });

    it("parses deploy outcome (with error)", async function () {
        const deployer = Address.fromBech32("drt1c7pyyq2yaq5k7atn9z6qn5qkxwlc6zwc4vg7uuxn9ssy7evfh5jq4nm79l");

        const parser = new SmartContractTransactionsOutcomeParser();
        const transactionsConverter = new TransactionsConverter();

        const transactionOnNetwork = new TransactionOnNetwork({
            nonce: 7,
            logs: new TransactionOnNetworkLogs({
                events: [
                    new TransactionOnNetworkEvent({
                        identifier: "signalError",
                        topics: [
                            new TransactionEventTopic(deployer.getPublicKey().toString("base64")),
                            new TransactionEventTopic(Buffer.from("wrong number of arguments").toString("base64")),
                        ],
                        data: "@75736572206572726f72",
                    }),
                ],
            }),
        });

        const transactionOutcome = transactionsConverter.transactionOnNetworkToOutcome(transactionOnNetwork);
        const parsed = parser.parseDeploy({ transactionOutcome });

        assert.equal(parsed.returnCode, "user error");
        assert.equal(parsed.returnMessage, "wrong number of arguments");
        assert.deepEqual(parsed.contracts, []);
    });

    it("parses execute outcome, without ABI (minimalistic)", function () {
        const parser = new SmartContractTransactionsOutcomeParser();

        const parsed = parser.parseExecute({
            transactionOutcome: new TransactionOutcome({
                directSmartContractCallOutcome: new SmartContractCallOutcome({
                    function: "hello",
                    returnCode: "ok",
                    returnMessage: "ok",
                    returnDataParts: [Buffer.from([42])],
                }),
            }),
        });

        assert.deepEqual(parsed.values, [Buffer.from([42])]);
        assert.equal(parsed.returnCode, "ok");
        assert.equal(parsed.returnMessage, "ok");
    });

    it("parses execute outcome, without ABI", function () {
        const parser = new SmartContractTransactionsOutcomeParser();
        const transactionsConverter = new TransactionsConverter();
        const transactionOnNetwork = new TransactionOnNetwork({
            nonce: 7,
            contractResults: new ContractResults([
                new ContractResultItem({
                    nonce: 8,
                    data: "@6f6b@2a",
                }),
            ]),
        });

        const transactionOutcome = transactionsConverter.transactionOnNetworkToOutcome(transactionOnNetwork);

        const parsed = parser.parseExecute({ transactionOutcome });

        assert.deepEqual(parsed.values, [Buffer.from([42])]);
        assert.equal(parsed.returnCode, "ok");
        assert.equal(parsed.returnMessage, "ok");
    });

    it("parses execute outcome, with ABI (minimalistic)", async function () {
        const parser = new SmartContractTransactionsOutcomeParser({
            abi: await loadAbiRegistry("src/testdata/answer.abi.json"),
        });

        const parsed = parser.parseExecute({
            transactionOutcome: new TransactionOutcome({
                directSmartContractCallOutcome: new SmartContractCallOutcome({
                    // For the sake of the test, let's say that we've called this function as a transaction, not as a query.
                    function: "getUltimateAnswer",
                    returnCode: "ok",
                    returnMessage: "ok",
                    returnDataParts: [Buffer.from([42])],
                }),
            }),
        });

        // At this moment, U64Value.valueOf() returns a BigNumber. This might change in the future.
        assert.deepEqual(parsed.values, [new BigNumber("42")]);
        assert.equal(parsed.returnCode, "ok");
        assert.equal(parsed.returnMessage, "ok");
    });

    it("parses execute outcome, with ABI", async function () {
        const parser = new SmartContractTransactionsOutcomeParser({
            abi: await loadAbiRegistry("src/testdata/answer.abi.json"),
        });

        const transactionsConverter = new TransactionsConverter();
        const transactionOnNetwork = new TransactionOnNetwork({
            nonce: 7,
            function: "getUltimateAnswer",
            contractResults: new ContractResults([
                new ContractResultItem({
                    nonce: 8,
                    data: "@6f6b@2a",
                }),
            ]),
        });

        const transactionOutcome = transactionsConverter.transactionOnNetworkToOutcome(transactionOnNetwork);
        const parsed = parser.parseExecute({ transactionOutcome });

        // At this moment, U64Value.valueOf() returns a BigNumber. This might change in the future.
        assert.deepEqual(parsed.values, [new BigNumber("42")]);
        assert.equal(parsed.returnCode, "ok");
        assert.equal(parsed.returnMessage, "ok");
    });

    it("cannot parse execute outcome, with ABI, when function name is missing", async function () {
        const parser = new SmartContractTransactionsOutcomeParser({
            abi: await loadAbiRegistry("src/testdata/answer.abi.json"),
        });

        const transactionsConverter = new TransactionsConverter();
        const transactionOnNetwork = new TransactionOnNetwork({
            nonce: 7,
            contractResults: new ContractResults([
                new ContractResultItem({
                    nonce: 8,
                    data: "@6f6b@2a",
                }),
            ]),
        });

        const transactionOutcome = transactionsConverter.transactionOnNetworkToOutcome(transactionOnNetwork);

        assert.throws(() => {
            parser.parseExecute({ transactionOutcome });
        }, 'Function name is not available in the transaction outcome, thus endpoint definition (ABI) cannot be picked (for parsing). Maybe provide the "function" parameter explicitly?');
    });
});
