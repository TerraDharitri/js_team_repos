import { ContractQueryResponse, ContractResultItem, ContractResults, TransactionEvent, TransactionEventTopic, TransactionLogs, TransactionOnNetwork } from "@terradharitri/sdk-network-providers";
import { TransactionEventData } from "@terradharitri/sdk-network-providers/out/transactionEvents";
import BigNumber from "bignumber.js";
import { assert } from "chai";
import * as fs from "fs";
import path from "path";
import { Address } from "../address";
import { IAddress } from "../interface";
import { ITransactionOnNetwork } from "../interfaceOfNetwork";
import { LogLevel, Logger } from "../logger";
import { loadAbiRegistry } from "../testutils";
import { ArgSerializer } from "./argSerializer";
import { ResultsParser } from "./resultsParser";
import { ReturnCode } from "./returnCode";
import { AbiRegistry, BigUIntType, BigUIntValue, EndpointDefinition, EndpointModifiers, EndpointParameterDefinition, StringType, StringValue, TypedValue, U32Type, U32Value, U64Type, U64Value, VariadicType, VariadicValue } from "./typesystem";
import { BytesType, BytesValue } from "./typesystem/bytes";

const KnownReturnCodes: string[] = [
    ReturnCode.None.valueOf(),
    ReturnCode.Ok.valueOf(),
    ReturnCode.FunctionNotFound.valueOf(),
    ReturnCode.FunctionWrongSignature.valueOf(),
    ReturnCode.ContractNotFound.valueOf(),
    ReturnCode.UserError.valueOf(),
    ReturnCode.OutOfGas.valueOf(),
    ReturnCode.AccountCollision.valueOf(),
    ReturnCode.OutOfFunds.valueOf(),
    ReturnCode.CallStackOverFlow.valueOf(), ReturnCode.ContractInvalid.valueOf(),
    ReturnCode.ExecutionFailed.valueOf(),
    // Returned by protocol, not by VM:
    "insufficient funds",
    "operation in account not permitted not the owner of the account",
    "sending value to non payable contract",
    "invalid receiver address"
];

describe("test smart contract results parser", () => {
    let parser = new ResultsParser();

    it("should create parser with custom dependencies (1)", async () => {
        const customParser = new ResultsParser({
            argsSerializer: {
                buffersToValues(_buffers, _parameters) {
                    return [new U64Value(42)];
                },
                stringToBuffers(_joinedString) {
                    return []
                }
            }
        });

        const endpoint = new EndpointDefinition("", [], [], new EndpointModifiers("", []));
        const queryResponse = new ContractQueryResponse({});
        const bundle = customParser.parseQueryResponse(queryResponse, endpoint);
        assert.deepEqual(bundle.firstValue, new U64Value(42));
    });

    it("should create parser with custom dependencies (2)", async () => {
        const customParser = new ResultsParser({
            argsSerializer: new ArgSerializer({
                codec: {
                    decodeTopLevel(_buffer, _type): TypedValue {
                        return new U64Value(42);
                    },
                    encodeTopLevel(_typedValue): Buffer {
                        return Buffer.from([])
                    },
                }
            })
        });

        const outputParameters = [new EndpointParameterDefinition("", "", new U64Type())];
        const endpoint = new EndpointDefinition("", [], outputParameters, new EndpointModifiers("", []));
        const queryResponse = new ContractQueryResponse({ returnData: [""] });
        const bundle = customParser.parseQueryResponse(queryResponse, endpoint);
        assert.deepEqual(bundle.firstValue, new U64Value(42));
    });

    it("should parse query response", async () => {
        let endpointModifiers = new EndpointModifiers("", []);
        let outputParameters = [
            new EndpointParameterDefinition("a", "a", new BigUIntType()),
            new EndpointParameterDefinition("b", "b", new BytesType())
        ];
        let endpoint = new EndpointDefinition("foo", [], outputParameters, endpointModifiers);

        let queryResponse = new ContractQueryResponse({
            returnData: [
                Buffer.from([42]).toString("base64"),
                Buffer.from("abba", "hex").toString("base64"),
            ],
            returnCode: "ok",
            returnMessage: "foobar"
        });

        let bundle = parser.parseQueryResponse(queryResponse, endpoint);
        assert.deepEqual(bundle.returnCode, ReturnCode.Ok);
        assert.equal(bundle.returnMessage, "foobar");
        assert.deepEqual(bundle.firstValue, new BigUIntValue(42));
        assert.deepEqual(bundle.secondValue, BytesValue.fromHex("abba"));
        assert.lengthOf(bundle.values, 2);
    });

    it("should parse query response (variadic arguments)", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const outputParameters = [new EndpointParameterDefinition("a", "a", new VariadicType(new U32Type(), false))];
        const endpoint = new EndpointDefinition("foo", [], outputParameters, endpointModifiers);
        const queryResponse = new ContractQueryResponse({
            returnData: [
                Buffer.from([42]).toString("base64"),
                Buffer.from([43]).toString("base64"),
            ]
        });

        const bundle = parser.parseQueryResponse(queryResponse, endpoint);
        assert.deepEqual(bundle.values[0], VariadicValue.fromItems(new U32Value(42), new U32Value(43)));
    });

    it("should parse query response (one counted-variadic arguments)", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const outputParameters = [new EndpointParameterDefinition("a", "a", new VariadicType(new U32Type(), true))];
        const endpoint = new EndpointDefinition("foo", [], outputParameters, endpointModifiers);
        const queryResponse = new ContractQueryResponse({
            returnData: [
                Buffer.from([2]).toString("base64"),
                Buffer.from([42]).toString("base64"),
                Buffer.from([43]).toString("base64"),
            ]
        });

        const bundle = parser.parseQueryResponse(queryResponse, endpoint);
        assert.deepEqual(bundle.values[0], VariadicValue.fromItemsCounted(new U32Value(42), new U32Value(43)));
    });

    it("should parse query response (multiple counted-variadic arguments)", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const outputParameters = [
            new EndpointParameterDefinition("a", "a", new VariadicType(new U32Type(), true)),
            new EndpointParameterDefinition("b", "b", new VariadicType(new StringType(), true)),
            new EndpointParameterDefinition("c", "c", new BigUIntType()),

        ];
        const endpoint = new EndpointDefinition("foo", [], outputParameters, endpointModifiers);
        const queryResponse = new ContractQueryResponse({
            returnData: [
                Buffer.from([2]).toString("base64"),
                Buffer.from([42]).toString("base64"),
                Buffer.from([43]).toString("base64"),
                Buffer.from([3]).toString("base64"),
                Buffer.from("a").toString("base64"),
                Buffer.from("b").toString("base64"),
                Buffer.from("c").toString("base64"),
                Buffer.from([42]).toString("base64")
            ]
        });

        const bundle = parser.parseQueryResponse(queryResponse, endpoint);
        assert.deepEqual(bundle.values[0], VariadicValue.fromItemsCounted(new U32Value(42), new U32Value(43)));
        assert.deepEqual(bundle.values[1], VariadicValue.fromItemsCounted(new StringValue("a"), new StringValue("b"), new StringValue("c")));
        assert.deepEqual(bundle.values[2], new BigUIntValue(42));
    });

    it("should parse contract outcome", async () => {
        let endpointModifiers = new EndpointModifiers("", []);
        let outputParameters = [
            new EndpointParameterDefinition("a", "a", new BigUIntType()),
            new EndpointParameterDefinition("b", "b", new BytesType())
        ];
        let endpoint = new EndpointDefinition("foo", [], outputParameters, endpointModifiers);

        let transactionOnNetwork = new TransactionOnNetwork({
            contractResults: new ContractResults([
                new ContractResultItem({ nonce: 7, data: "@6f6b@2a@abba" })
            ])
        });

        let bundle = parser.parseOutcome(transactionOnNetwork, endpoint);
        assert.deepEqual(bundle.returnCode, ReturnCode.Ok);
        assert.equal(bundle.returnMessage, "ok");
        assert.deepEqual(bundle.firstValue, new BigUIntValue(42));
        assert.deepEqual(bundle.secondValue, BytesValue.fromHex("abba"));
        assert.lengthOf(bundle.values, 2);
    });

    it("should parse contract outcome, on easily found result with return data", async () => {
        let transaction = new TransactionOnNetwork({
            contractResults: new ContractResults([
                new ContractResultItem({
                    nonce: 42,
                    data: "@6f6b@03",
                    returnMessage: "foobar"
                })
            ])
        });

        let bundle = parser.parseUntypedOutcome(transaction);
        assert.deepEqual(bundle.returnCode, ReturnCode.Ok);
        assert.equal(bundle.returnMessage, "foobar");
        assert.deepEqual(bundle.values, [Buffer.from("03", "hex")]);
    });

    it("should parse contract outcome, on signal error", async () => {
        let transaction = new TransactionOnNetwork({
            logs: new TransactionLogs({
                address: new Address(),
                events: [
                    new TransactionEvent({
                        identifier: "signalError",
                        topics: [new TransactionEventTopic(Buffer.from("something happened").toString("base64"))],
                        data: `@${Buffer.from("user error").toString("hex")}@07`
                    })
                ]
            })
        });

        let bundle = parser.parseUntypedOutcome(transaction);
        assert.deepEqual(bundle.returnCode, ReturnCode.UserError);
        assert.equal(bundle.returnMessage, "something happened");
        assert.deepEqual(bundle.values, [Buffer.from("07", "hex")]);
    });

    it("should parse contract outcome, on too much gas warning", async () => {
        let transaction = new TransactionOnNetwork({
            logs: new TransactionLogs({
                address: new Address(),
                events: [
                    new TransactionEvent({
                        identifier: "writeLog",
                        topics: [new TransactionEventTopic("QHRvbyBtdWNoIGdhcyBwcm92aWRlZCBmb3IgcHJvY2Vzc2luZzogZ2FzIHByb3ZpZGVkID0gNTk2Mzg0NTAwLCBnYXMgdXNlZCA9IDczMzAxMA==")],
                        data: Buffer.from("QDZmNmI=", "base64").toString()
                    })
                ]
            })
        });

        let bundle = parser.parseUntypedOutcome(transaction);
        assert.deepEqual(bundle.returnCode, ReturnCode.Ok);
        assert.equal(bundle.returnMessage, "@too much gas provided for processing: gas provided = 596384500, gas used = 733010");
        assert.deepEqual(bundle.values, []);
    });

    it("should parse contract event", async () => {
        const abiRegistry = await loadAbiRegistry("src/testdata/dcdt-safe.abi.json");
        const eventDefinition = abiRegistry.getEvent("deposit");

        const event = new TransactionEvent({
            topics: [
                new TransactionEventTopic("ZGVwb3NpdA=="),
                new TransactionEventTopic("cmzC1LRt1r10pMhNAnFb+FyudjGMq4G8CefCYdQUmmc="),
                new TransactionEventTopic("AAAADFdSRVdBLTAxZTQ5ZAAAAAAAAAAAAAAAAWQ="),
            ],
            dataPayload: new TransactionEventData(Buffer.from("AAAAAAAAA9sAAAA=", "base64"))
        });

        const bundle = parser.parseEvent(event, eventDefinition);

        assert.equal((<IAddress>bundle.dest_address).bech32(), "drt1wfkv9495dhtt6a9yepxsyu2mlpw2ua333j4cr0qfulpxr4q5nfns25nrld");
        assert.equal(bundle.tokens[0].token_identifier, "WREWA-01e49d");
        assert.deepEqual(bundle.tokens[0].token_nonce, new BigNumber(0));
        assert.deepEqual(bundle.tokens[0].amount, new BigNumber(100));
        assert.deepEqual(bundle.event_data.tx_nonce, new BigNumber(987));
        assert.isNull(bundle.event_data.opt_function);
        assert.isNull(bundle.event_data.opt_arguments);
        assert.isNull(bundle.event_data.opt_gas_limit);
    });

    it("should parse contract event (with multi-values)", async () => {
        const abiRegistry = AbiRegistry.create({
            "events": [
                {
                    "identifier": "foobar",
                    "inputs": [
                        {
                            "name": "a",
                            "type": "multi<u8, utf-8 string, u8, utf-8 string>",
                            "indexed": true
                        },
                        {
                            "name": "b",
                            "type": "multi<utf-8 string, u8>",
                            "indexed": true
                        },
                        {
                            "name": "c",
                            "type": "u8",
                            "indexed": false
                        }
                    ]
                }
            ]
        });

        const eventDefinition = abiRegistry.getEvent("foobar");

        const event = {
            topics: [
                new TransactionEventTopic(Buffer.from("not used").toString("base64")),
                new TransactionEventTopic(Buffer.from([42]).toString("base64")),
                new TransactionEventTopic(Buffer.from("test").toString("base64")),
                new TransactionEventTopic(Buffer.from([43]).toString("base64")),
                new TransactionEventTopic(Buffer.from("test").toString("base64")),
                new TransactionEventTopic(Buffer.from("test").toString("base64")),
                new TransactionEventTopic(Buffer.from([44]).toString("base64")),
            ],
            dataPayload: new TransactionEventData(Buffer.from([42]))
        };

        const bundle = parser.parseEvent(event, eventDefinition);
        assert.deepEqual(bundle.a, [new BigNumber(42), "test", new BigNumber(43), "test"]);
        assert.deepEqual(bundle.b, ["test", new BigNumber(44)]);
        assert.deepEqual(bundle.c, new BigNumber(42));
    });

    it("should parse contract event (Sirius)", async () => {
        const abiRegistry = AbiRegistry.create({
            "events": [
                {
                    "identifier": "foobar",
                    "inputs": [
                        {
                            "name": "a",
                            "type": "u8",
                            "indexed": true
                        },
                        {
                            "name": "b",
                            "type": "u8",
                            "indexed": false
                        },
                        {
                            "name": "c",
                            "type": "u8",
                            "indexed": false
                        }
                    ]
                }
            ]
        });

        const eventDefinition = abiRegistry.getEvent("foobar");

        const event = {
            topics: [
                new TransactionEventTopic(Buffer.from("not used").toString("base64")),
                new TransactionEventTopic(Buffer.from([42]).toString("base64")),
            ],
            additionalData: [
                new TransactionEventData(Buffer.from([43])),
                new TransactionEventData(Buffer.from([44]))
            ],
            // Will be ignored.
            dataPayload: new TransactionEventData(Buffer.from([43])),
        };

        const bundle = parser.parseEvent(event, eventDefinition);
        assert.deepEqual(bundle.a, new BigNumber(42));
        assert.deepEqual(bundle.b, new BigNumber(43));
        assert.deepEqual(bundle.c, new BigNumber(44));
    });

    // This test should be enabled manually and run against a set of sample transactions.
    // 2022-04-03: test ran against ~1800 transactions sampled from devnet.
    it.skip("should parse real-world contract outcomes", async () => {
        let oldLogLevel = Logger.logLevel;
        Logger.setLevel(LogLevel.Trace);

        let folder = path.resolve(process.env["SAMPLES"] || "SAMPLES")
        let samples = loadRealWorldSamples(folder);

        for (const [transaction, _] of samples) {
            console.log("Transaction:", transaction.hash.toString());

            let bundle = parser.parseUntypedOutcome(transaction);

            console.log("Return code:", bundle.returnCode.toString());
            console.log("Return message:", bundle.returnMessage);
            console.log("Num values:", bundle.values.length);
            console.log("=".repeat(80));

            assert.include(KnownReturnCodes, bundle.returnCode.valueOf());
        }

        Logger.setLevel(oldLogLevel);
    });

    function loadRealWorldSamples(folder: string): [ITransactionOnNetwork, string][] {
        let transactionFiles = fs.readdirSync(folder);
        let samples: [ITransactionOnNetwork, string][] = [];

        for (const file of transactionFiles) {
            let txHash = path.basename(file, ".json");
            let filePath = path.resolve(folder, file);
            let jsonContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
            let json = JSON.parse(jsonContent);
            let payload = json["data"]["transaction"];
            let transaction = TransactionOnNetwork.fromProxyHttpResponse(txHash, payload);

            samples.push([transaction, jsonContent]);
        }

        return samples;
    }
});
