"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentsPresentProtocolMarkerHex = exports.ArgumentsMissingProtocolMarkerHex = void 0;
exports.encodeCallData = encodeCallData;
exports.addEndpointName = addEndpointName;
exports.addGasLimit = addGasLimit;
exports.addArgs = addArgs;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const utils_codec_1 = require("./utils.codec");
const uint32ArgBytes = 8;
const uint64ArgBytes = 16;
exports.ArgumentsMissingProtocolMarkerHex = "00";
exports.ArgumentsPresentProtocolMarkerHex = "01";
/**
 * Encodes call data for the deposit function with simplified argument handling.
 * Automatically attempts to detect and encode integers and strings.
 *
 * @param {string} endpointName - The name of the endpoint for the cross-chain call.
 * @param {number} gasLimit - The gas limit for the cross-chain call.
 * @param {any[]} args - The arguments for the cross-chain call, assumed to be strings or numbers.
 * @returns {string} The encoded callData string.
 */
function encodeCallData(endpointName, gasLimit, args) {
    let callData = '0x';
    callData = addEndpointName(callData, endpointName);
    callData = addGasLimit(callData, gasLimit);
    callData = addArgs(callData, args);
    return callData;
}
function addEndpointName(callData, endpointName) {
    const endpointNameBuffer = Buffer.from(endpointName, 'utf8');
    const endpointNameLength = new bignumber_js_1.default(endpointNameBuffer.length).toString(16).padStart(uint32ArgBytes, '0');
    const endpointNameHex = endpointNameBuffer.toString('hex');
    return callData + endpointNameLength + endpointNameHex;
}
function addGasLimit(callData, gasLimit) {
    const gasLimitHex = new bignumber_js_1.default(gasLimit).toString(16).padStart(uint64ArgBytes, '0');
    return callData + gasLimitHex;
}
function addArgs(callData, args) {
    if (args.length == 0) {
        return exports.ArgumentsMissingProtocolMarkerHex;
    }
    let encodedArgs = '';
    const numArgsHex = new bignumber_js_1.default(args.length).toString(16).padStart(uint32ArgBytes, '0');
    args.forEach(arg => {
        let argHex, argLengthHex;
        if (typeof arg === 'number' || (!isNaN(arg) && !isNaN(parseFloat(arg)))) {
            // Treat as number and convert to padded hex
            argHex = (0, utils_codec_1.numberToPaddedHex)(arg);
        }
        else if (typeof arg === "string") {
            // Treat as string
            const argBuffer = Buffer.from(arg, 'utf8');
            argHex = argBuffer.toString('hex');
        }
        else {
            throw new Error(`Unsupported argument type: ${typeof arg}`);
        }
        argLengthHex = new bignumber_js_1.default(argHex.length / 2).toString(16).padStart(uint32ArgBytes, '0');
        encodedArgs += argLengthHex + argHex;
    });
    return callData + exports.ArgumentsPresentProtocolMarkerHex + numArgsHex + encodedArgs;
}
