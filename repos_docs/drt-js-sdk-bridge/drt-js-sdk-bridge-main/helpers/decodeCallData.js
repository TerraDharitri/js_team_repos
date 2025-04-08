"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeCallData = decodeCallData;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const uint32ArgBytes = 8;
const uint64ArgBytes = 16;
const ArgumentsMissingProtocolMarkerHex = "00";
const ArgumentsPresentProtocolMarkerHex = "01";
/**
 * Decodes call data into the endpoint name, gas limit, and arguments.
 * Arguments are returned as hex strings.
 *
 * It returns undefined if the call data is invalid.
 *
 * @param {string} callData - The call data to decode.
 * @returns {object} The decoded call data.
 */
function decodeCallData(callData) {
    try {
        let offset = 2; // Skip '0x'
        // Extract endpoint name
        if (callData.length < offset + uint32ArgBytes) {
            throw new Error('Invalid endpoint name length');
        }
        const endpointNameLengthHex = callData.slice(offset, offset + uint32ArgBytes);
        const endpointNameLength = new bignumber_js_1.default(endpointNameLengthHex, 16).toNumber();
        offset += uint32ArgBytes;
        if (callData.length < offset + endpointNameLength * 2) {
            throw new Error('Invalid endpoint name');
        }
        const endpointNameHex = callData.slice(offset, offset + endpointNameLength * 2);
        const endpointName = Buffer.from(endpointNameHex, 'hex').toString('utf8');
        offset += endpointNameLength * 2;
        // Extract gas limit
        if (callData.length < offset + uint64ArgBytes) {
            throw new Error('Invalid gas limit length');
        }
        const gasLimitHex = callData.slice(offset, offset + uint64ArgBytes);
        const gasLimit = new bignumber_js_1.default(gasLimitHex, 16).toNumber();
        offset += uint64ArgBytes;
        // Extract arguments
        if (callData.length < offset + 2) {
            throw new Error('Invalid protocol marker length');
        }
        const protocolMarker = callData.slice(offset, offset + 2);
        offset += 2;
        if ([
            ArgumentsPresentProtocolMarkerHex,
            ArgumentsMissingProtocolMarkerHex
        ].indexOf(protocolMarker) === -1) {
            throw new Error('Invalid protocol marker');
        }
        let args = [];
        if (protocolMarker === ArgumentsPresentProtocolMarkerHex) {
            if (callData.length < offset + uint32ArgBytes) {
                throw new Error('Invalid number of arguments length');
            }
            const numArgsHex = callData.slice(offset, offset + uint32ArgBytes);
            const numArgs = new bignumber_js_1.default(numArgsHex, 16).toNumber();
            offset += uint32ArgBytes;
            for (let i = 0; i < numArgs; i++) {
                if (callData.length < offset + uint32ArgBytes) {
                    throw new Error('Invalid argument length');
                }
                const argLengthHex = callData.slice(offset, offset + uint32ArgBytes);
                const argLength = new bignumber_js_1.default(argLengthHex, 16).toNumber();
                offset += uint32ArgBytes;
                if (callData.length < offset + argLength * 2) {
                    throw new Error('Invalid argument');
                }
                const argHex = callData.slice(offset, offset + argLength * 2);
                offset += argLength * 2;
                args.push(argHex);
            }
        }
        return { endpointName, gasLimit, args };
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to decode call data: ${error.message}`);
        }
        else {
            console.error(`Failed to decode data: Unknown error`);
        }
        return;
    }
}
