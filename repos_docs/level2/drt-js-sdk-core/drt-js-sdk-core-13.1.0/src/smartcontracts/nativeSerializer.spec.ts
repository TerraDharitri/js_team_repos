import BigNumber from "bignumber.js";
import { assert } from "chai";
import { Address } from "../address";
import { ErrInvalidArgument } from "../errors";
import { NativeSerializer } from "./nativeSerializer";
import {
    AbiRegistry,
    AddressType,
    AddressValue,
    BigUIntType,
    BooleanType,
    BooleanValue,
    CompositeType,
    CompositeValue,
    EndpointDefinition,
    EndpointModifiers,
    EndpointParameterDefinition,
    ListType,
    NullType,
    OptionalType,
    OptionalValue,
    OptionType,
    OptionValue,
    TupleType,
    TypePlaceholder,
    U32Type,
    U32Value,
    U64Type,
    U64Value,
    U8Type,
    U8Value,
    VariadicType,
    VariadicValue,
} from "./typesystem";
import { BytesType, BytesValue } from "./typesystem/bytes";

describe("test native serializer", () => {
    it("should perform type inference", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const inputParameters = [
            new EndpointParameterDefinition("", "", new BigUIntType()),
            new EndpointParameterDefinition("", "", new ListType(new AddressType())),
            new EndpointParameterDefinition("", "", new BytesType()),
            new EndpointParameterDefinition("", "", new BytesType()),
            new EndpointParameterDefinition("", "", new OptionType(new U32Type())),
            new EndpointParameterDefinition("", "", new OptionType(new U32Type())),
            new EndpointParameterDefinition("", "", new OptionalType(new BytesType())),
        ];
        const endpoint = new EndpointDefinition("foo", inputParameters, [], endpointModifiers);

        const p0 = 42;
        const p1 = [
            new Address("drt1n2nkf0sfmst3z38p0sklz0xntprkr9hjr7rttewj3l9uhu629fpsfazg6k"),
            new Address("drt1kgxjlszkqcvccecuvl5r64c7cju7jqwp5kh22w4e6crf827peljqcvleft"),
        ];
        const p2 = Buffer.from("abba", "hex");
        const p3 = Number(0xabba);
        const p4 = null;
        const p5 = 7;

        // Let's not provide the last parameter
        const typedValues = NativeSerializer.nativeToTypedValues([p0, p1, p2, p3, p4, p5], endpoint);

        assert.deepEqual(typedValues[0].getType(), new BigUIntType());
        assert.deepEqual(typedValues[0].valueOf().toNumber(), p0);
        assert.deepEqual(typedValues[1].getType(), new ListType(new AddressType()));
        assert.deepEqual(typedValues[1].valueOf(), p1);
        assert.deepEqual(typedValues[2].getType(), new BytesType());
        assert.deepEqual(typedValues[2].valueOf(), p2);
        assert.deepEqual(typedValues[3].getType(), new BytesType());
        assert.deepEqual(typedValues[3].valueOf(), Buffer.from("abba", "hex"));
        assert.deepEqual(typedValues[4].getType(), new OptionType(new NullType()));
        assert.deepEqual(typedValues[4].valueOf(), null);
        assert.deepEqual(typedValues[5].getType(), new OptionType(new U32Type()));
        assert.deepEqual(typedValues[5].valueOf().toNumber(), p5);
        assert.deepEqual(typedValues[6].getType(), new OptionalType(new BytesType()));
        assert.deepEqual(typedValues[6].valueOf(), null);
    });

    it("should perform type inference (regular variadic arguments)", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const inputParameters = [new EndpointParameterDefinition("", "", new VariadicType(new U32Type(), false))];
        const endpoint = new EndpointDefinition("foo", inputParameters, [], endpointModifiers);
        const typedValues = NativeSerializer.nativeToTypedValues([8, 9, 10], endpoint);

        assert.deepEqual(typedValues[0].getType(), new VariadicType(new U32Type(), false));
        assert.deepEqual(typedValues[0].valueOf(), [new BigNumber(8), new BigNumber(9), new BigNumber(10)]);
    });

    it("should perform type inference (counted-variadic arguments)", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const inputParameters = [
            new EndpointParameterDefinition("", "", new VariadicType(new U32Type(), true)),
            new EndpointParameterDefinition("", "", new VariadicType(new BytesType(), true)),
        ];
        const endpoint = new EndpointDefinition("foo", inputParameters, [], endpointModifiers);

        // Implicit counted-variadic (not supported).
        assert.throws(
            () => NativeSerializer.nativeToTypedValues([8, 9, 10, "a", "b", "c"], endpoint),
            ErrInvalidArgument,
        );

        // Explicit, non-empty counted-variadic.
        let typedValues = NativeSerializer.nativeToTypedValues(
            [
                VariadicValue.fromItemsCounted(new U32Value(8), new U32Value(9), new U32Value(10)),
                VariadicValue.fromItemsCounted(
                    BytesValue.fromUTF8("a"),
                    BytesValue.fromUTF8("b"),
                    BytesValue.fromUTF8("c"),
                ),
            ],
            endpoint,
        );

        assert.lengthOf(typedValues, 2);
        assert.deepEqual(typedValues[0].getType(), new VariadicType(new U32Type(), true));
        assert.deepEqual(typedValues[0].valueOf(), [new BigNumber(8), new BigNumber(9), new BigNumber(10)]);
        assert.deepEqual(typedValues[1].getType(), new VariadicType(new BytesType(), true));
        assert.deepEqual(typedValues[1].valueOf(), [Buffer.from("a"), Buffer.from("b"), Buffer.from("c")]);

        // Explicit, empty counted-variadic.
        typedValues = NativeSerializer.nativeToTypedValues(
            [VariadicValue.fromItemsCounted(), VariadicValue.fromItemsCounted()],
            endpoint,
        );

        assert.lengthOf(typedValues, 2);
        assert.deepEqual(typedValues[0].getType(), new VariadicType(new TypePlaceholder(), true));
        assert.deepEqual(typedValues[0].valueOf(), []);
        assert.deepEqual(typedValues[1].getType(), new VariadicType(new TypePlaceholder(), true));
        assert.deepEqual(typedValues[1].valueOf(), []);
    });

    it("should perform type inference (counted-variadic and regular variadic arguments)", async () => {
        const endpointModifiers = new EndpointModifiers("", []);
        const inputParameters = [
            new EndpointParameterDefinition("", "", new VariadicType(new U32Type(), true)),
            new EndpointParameterDefinition("", "", new VariadicType(new BytesType(), false)),
        ];
        const endpoint = new EndpointDefinition("foo", inputParameters, [], endpointModifiers);

        // Implicit counted-variadic (not supported).
        assert.throws(() => NativeSerializer.nativeToTypedValues([8, 9, 10], endpoint), ErrInvalidArgument);

        // Explicit counted-variadic, empty implicit regular variadic.
        let typedValues = NativeSerializer.nativeToTypedValues(
            [VariadicValue.fromItemsCounted(new U32Value(8), new U32Value(9), new U32Value(10))],
            endpoint,
        );

        assert.lengthOf(typedValues, 2);
        assert.deepEqual(typedValues[0].getType(), new VariadicType(new U32Type(), true));
        assert.deepEqual(typedValues[0].valueOf(), [new BigNumber(8), new BigNumber(9), new BigNumber(10)]);
        assert.deepEqual(typedValues[1].getType(), new VariadicType(new BytesType(), false));
        assert.deepEqual(typedValues[1].valueOf(), []);

        // Explicit counted-variadic, non-empty implicit regular variadic.
        typedValues = NativeSerializer.nativeToTypedValues(
            [VariadicValue.fromItemsCounted(new U32Value(8), new U32Value(9), new U32Value(10)), "a", "b", "c"],
            endpoint,
        );

        assert.lengthOf(typedValues, 2);
        assert.deepEqual(typedValues[0].getType(), new VariadicType(new U32Type(), true));
        assert.deepEqual(typedValues[0].valueOf(), [new BigNumber(8), new BigNumber(9), new BigNumber(10)]);
        assert.deepEqual(typedValues[1].getType(), new VariadicType(new BytesType(), false));
        assert.deepEqual(typedValues[1].valueOf(), [Buffer.from("a"), Buffer.from("b"), Buffer.from("c")]);
    });

    it("should should handle optionals in a strict manner (but it does not)", async () => {
        const endpoint = AbiRegistry.create({
            endpoints: [
                {
                    name: "foo",
                    inputs: [
                        {
                            type: "optional<bool>",
                        },
                    ],
                    outputs: [],
                },
            ],
        }).getEndpoint("foo");

        let typedValues = NativeSerializer.nativeToTypedValues(
            [new OptionalValue(new BooleanType(), new BooleanValue(true))],
            endpoint,
        );

        // Isn't this a bug? Shouldn't it be be OptionalType(BooleanType()), instead?
        assert.deepEqual(typedValues[0].getType(), new BooleanType());

        // Isn't this a bug? Shouldn't it be OptionalValue(OptionalType(BooleanType()), BooleanValue(true)), instead?
        assert.deepEqual(typedValues[0], new OptionalValue(new BooleanType(), new BooleanValue(true)));
    });

    it("should accept a mix between typed values and regular JavaScript objects", async () => {
        let endpointModifiers = new EndpointModifiers("", []);
        let inputParameters = [
            new EndpointParameterDefinition("a", "a", new BigUIntType()),
            new EndpointParameterDefinition("b", "b", new ListType(new AddressType())),
            new EndpointParameterDefinition("c", "c", new BytesType()),
        ];
        let endpoint = new EndpointDefinition("foo", inputParameters, [], endpointModifiers);

        let a = 42;
        let b = [new Address("drt1n2nkf0sfmst3z38p0sklz0xntprkr9hjr7rttewj3l9uhu629fpsfazg6k")];
        let c = BytesValue.fromUTF8("test");

        let typedValues = NativeSerializer.nativeToTypedValues([a, b, c], endpoint);

        assert.deepEqual(typedValues[0].getType(), new BigUIntType());
        assert.deepEqual(typedValues[0].valueOf().toNumber(), a);
        assert.deepEqual(typedValues[1].getType(), new ListType(new AddressType()));
        assert.deepEqual(typedValues[1].valueOf(), b);
        assert.deepEqual(typedValues[2].getType(), new BytesType());
        assert.deepEqual(typedValues[2].valueOf(), c.valueOf());
    });

    it("should accept a mix between typed values and regular JavaScript objects (variadic, optionals)", async () => {
        const endpoint = AbiRegistry.create({
            endpoints: [
                {
                    name: "foo",
                    inputs: [
                        {
                            type: "bool",
                        },
                        {
                            type: "optional<bool>",
                        },
                        {
                            type: "variadic<bool>",
                        },
                    ],
                    outputs: [],
                },
            ],
        }).getEndpoint("foo");

        // Using only native JavaScript objects
        let typedValues = NativeSerializer.nativeToTypedValues([true, null, true, false, true], endpoint);

        assert.deepEqual(typedValues[0].getType(), new BooleanType());
        assert.deepEqual(typedValues[0].valueOf(), true);
        assert.deepEqual(typedValues[1].getType(), new OptionalType(new BooleanType()));
        assert.deepEqual(typedValues[1].valueOf(), null);
        assert.deepEqual(typedValues[2].getType(), new VariadicType(new BooleanType()));
        assert.deepEqual(typedValues[2].valueOf(), [true, false, true]);

        // Using both native JavaScript objects and typed values
        typedValues = NativeSerializer.nativeToTypedValues(
            [
                true,
                null,
                VariadicValue.fromItems(new BooleanValue(true), new BooleanValue(false), new BooleanValue(true)),
            ],
            endpoint,
        );

        assert.deepEqual(typedValues[0].getType(), new BooleanType());
        assert.deepEqual(typedValues[0].valueOf(), true);
        assert.deepEqual(typedValues[1].getType(), new OptionalType(new BooleanType()));
        assert.deepEqual(typedValues[1].valueOf(), null);
        assert.deepEqual(typedValues[2].getType(), new VariadicType(new BooleanType()));
        assert.deepEqual(typedValues[2].valueOf(), [true, false, true]);
    });

    it("should accept a mix between typed values and regular JavaScript objects (composite, optionals)", async () => {
        const endpoint = AbiRegistry.create({
            endpoints: [
                {
                    name: "foo",
                    inputs: [
                        {
                            type: "optional<multi<Address,u64>>",
                        },
                    ],
                    outputs: [],
                },
            ],
        }).getEndpoint("foo");

        const compositeType = new CompositeType(new AddressType(), new U64Type());
        const optionalCompositeType = new OptionalType(compositeType);
        const addressBech32 = "drt1n2nkf0sfmst3z38p0sklz0xntprkr9hjr7rttewj3l9uhu629fpsfazg6k";
        const address = Address.fromBech32(addressBech32);
        const compositeValue = CompositeValue.fromItems(new AddressValue(address), new U64Value(42));
        const optionalCompositeValue = new OptionalValue(optionalCompositeType, compositeValue);

        // Pass nothing
        let typedValues = NativeSerializer.nativeToTypedValues([null], endpoint);

        assert.deepEqual(typedValues[0].getType(), optionalCompositeType);
        assert.deepEqual(typedValues[0].valueOf(), null);

        // Pass only native values
        typedValues = NativeSerializer.nativeToTypedValues([[addressBech32, 42]], endpoint);

        assert.deepEqual(typedValues[0].getType(), optionalCompositeType);
        assert.deepEqual(typedValues[0], optionalCompositeValue);
        assert.deepEqual(typedValues[0].valueOf(), [address, new BigNumber(42)]);

        // Pass only typed values
        typedValues = NativeSerializer.nativeToTypedValues(
            [new OptionalValue(optionalCompositeType, compositeValue)],
            endpoint,
        );

        assert.deepEqual(typedValues[0].getType(), optionalCompositeType);
        assert.deepEqual(typedValues[0], optionalCompositeValue);
        assert.deepEqual(typedValues[0].valueOf(), [address, new BigNumber(42)]);

        // Pass a mix of native and typed values
        typedValues = NativeSerializer.nativeToTypedValues([[new AddressValue(address), 42]], endpoint);

        assert.deepEqual(typedValues[0].getType(), optionalCompositeType);
        assert.deepEqual(typedValues[0], optionalCompositeValue);
        assert.deepEqual(typedValues[0].valueOf(), [address, new BigNumber(42)]);

        // Pass a mix of native and typed values
        typedValues = NativeSerializer.nativeToTypedValues([[addressBech32, new U64Value(42)]], endpoint);

        assert.deepEqual(typedValues[0].getType(), optionalCompositeType);
        assert.deepEqual(typedValues[0], optionalCompositeValue);
        assert.deepEqual(typedValues[0].valueOf(), [address, new BigNumber(42)]);
    });

    it("should accept a mix between typed values and regular JavaScript objects (tuples)", async () => {
        const endpoint = AbiRegistry.create({
            endpoints: [
                {
                    name: "foo",
                    inputs: [
                        {
                            type: "tuple<u64,bool>",
                        },
                        {
                            type: "tuple<u8,Option<bool>>",
                        },
                        {
                            type: "List<tuple<u8,bool>>",
                        },
                        {
                            type: "u64",
                        },
                    ],
                    outputs: [],
                },
            ],
        }).getEndpoint("foo");

        // Pass only native values
        let typedValues = NativeSerializer.nativeToTypedValues(
            [
                [42, true],
                [43, false],
                [
                    [44, false],
                    [45, true],
                ],
                46,
            ],
            endpoint,
        );

        assert.deepEqual(typedValues[0].getType(), new TupleType(new U64Type(), new BooleanType()));
        assert.deepEqual(typedValues[0].valueOf(), { field0: new BigNumber(42), field1: true });
        assert.deepEqual(typedValues[1].getType(), new TupleType(new U8Type(), new OptionType(new BooleanType())));
        assert.deepEqual(typedValues[1].valueOf(), { field0: new BigNumber(43), field1: false });
        assert.deepEqual(typedValues[2].getType(), new ListType(new TupleType(new U8Type(), new BooleanType())));
        assert.deepEqual(typedValues[2].valueOf(), [
            { field0: new BigNumber(44), field1: false },
            { field0: new BigNumber(45), field1: true },
        ]);

        // Pass a mix of native and typed values
        typedValues = NativeSerializer.nativeToTypedValues(
            [
                [new U64Value(42), true],
                [43, OptionValue.newProvided(new BooleanValue(false))],
                [
                    [new U8Value(44), false],
                    [45, new BooleanValue(true)],
                ],
                46,
            ],
            endpoint,
        );

        assert.deepEqual(typedValues[0].getType(), new TupleType(new U64Type(), new BooleanType()));
        assert.deepEqual(typedValues[0].valueOf(), { field0: new BigNumber(42), field1: true });
        assert.deepEqual(typedValues[1].getType(), new TupleType(new U8Type(), new OptionType(new BooleanType())));
        assert.deepEqual(typedValues[1].valueOf(), { field0: new BigNumber(43), field1: false });
        assert.deepEqual(typedValues[2].getType(), new ListType(new TupleType(new U8Type(), new BooleanType())));
        assert.deepEqual(typedValues[2].valueOf(), [
            { field0: new BigNumber(44), field1: false },
            { field0: new BigNumber(45), field1: true },
        ]);
    });

    it("should accept no value for variadic types", async () => {
        const endpoint = AbiRegistry.create({
            endpoints: [
                {
                    name: "foo",
                    inputs: [
                        {
                            type: "u64",
                        },
                        {
                            name: "features",
                            type: "variadic<bytes>",
                            multi_arg: true,
                        },
                    ],
                    outputs: [],
                },
            ],
        }).getEndpoint("foo");

        // Using both native JavaScript objects and typed values
        const typedValues = NativeSerializer.nativeToTypedValues([42], endpoint);

        assert.deepEqual(typedValues[0].getType(), new U64Type());
        assert.deepEqual(typedValues[0].valueOf(), new BigNumber(42));
        assert.deepEqual(typedValues[1].getType(), new VariadicType(new BytesType()));
        assert.deepEqual(typedValues[1].valueOf(), []);
    });

    it("should perform type inference (enums)", async () => {
        const abiRegistry = AbiRegistry.create({
            endpoints: [
                {
                    name: "foo",
                    inputs: [
                        {
                            type: "MyEnum",
                        },
                        {
                            type: "MyEnum",
                        },
                        {
                            type: "MyEnum",
                        },
                        {
                            type: "MyEnum",
                        },
                    ],
                    outputs: [],
                },
            ],
            types: {
                MyEnum: {
                    type: "enum",
                    variants: [
                        {
                            name: "Nothing",
                            discriminant: 0,
                        },
                        {
                            name: "Something",
                            discriminant: 1,
                            fields: [
                                {
                                    name: "0",
                                    type: "Address",
                                },
                            ],
                        },
                        {
                            name: "Else",
                            discriminant: 2,
                            fields: [
                                {
                                    name: "x",
                                    type: "u64",
                                },
                                {
                                    name: "y",
                                    type: "u64",
                                },
                            ],
                        },
                    ],
                },
            },
        });

        const endpoint = abiRegistry.getEndpoint("foo");
        const enumType = abiRegistry.getEnum("MyEnum");

        // Simple enum by discriminant
        const p0 = 0;
        // Simple enum by name
        const p1 = "Nothing";
        // Enum with a single field
        const p2 = {
            name: "Something",
            fields: { 0: "drt1n2nkf0sfmst3z38p0sklz0xntprkr9hjr7rttewj3l9uhu629fpsfazg6k" },
        };
        // Enum with multiple fields
        const p3 = { name: "Else", fields: { x: 42, y: 43 } };

        const typedValues = NativeSerializer.nativeToTypedValues([p0, p1, p2, p3], endpoint);

        assert.deepEqual(typedValues[0].getType(), enumType);
        assert.deepEqual(typedValues[0].valueOf(), { name: "Nothing", fields: [] });
        assert.deepEqual(typedValues[1].getType(), enumType);
        assert.deepEqual(typedValues[1].valueOf(), { name: "Nothing", fields: [] });
        assert.deepEqual(typedValues[2].getType(), enumType);
        assert.deepEqual(typedValues[2].valueOf(), {
            name: "Something",
            fields: [new Address("drt1n2nkf0sfmst3z38p0sklz0xntprkr9hjr7rttewj3l9uhu629fpsfazg6k")],
        });
        assert.deepEqual(typedValues[3].getType(), enumType);
        assert.deepEqual(typedValues[3].valueOf(), { name: "Else", fields: [new BigNumber(42), new BigNumber(43)] });
    });

    it("should getArgumentsCardinality", async () => {
        const abi = AbiRegistry.create({
            endpoints: [
                {
                    name: "a",
                    inputs: [
                        {
                            type: "u8",
                        },
                    ],
                },
                {
                    name: "b",
                    inputs: [
                        {
                            type: "variadic<u8>",
                        },
                    ],
                },
                {
                    name: "c",
                    inputs: [
                        {
                            type: "optional<u8>",
                        },
                    ],
                },
                {
                    name: "d",
                    inputs: [
                        {
                            type: "optional<variadic<u8>>",
                        },
                    ],
                },
            ],
        });

        assert.deepEqual(NativeSerializer.getArgumentsCardinality(abi.getEndpoint("a").input), {
            min: 1,
            max: 1,
            variadic: false,
        });

        assert.deepEqual(NativeSerializer.getArgumentsCardinality(abi.getEndpoint("b").input), {
            min: 0,
            max: Infinity,
            variadic: true,
        });

        assert.deepEqual(NativeSerializer.getArgumentsCardinality(abi.getEndpoint("c").input), {
            min: 0,
            max: 1,
            variadic: false,
        });

        assert.deepEqual(NativeSerializer.getArgumentsCardinality(abi.getEndpoint("d").input), {
            min: 0,
            max: 1,
            // This is somehow a limitation of the current implementation.
            variadic: false,
        });
    });
});
