"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToPaddedHex = numberToPaddedHex;
exports.zeroPadStringIfOddLength = zeroPadStringIfOddLength;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function numberToPaddedHex(value) {
    let hexableNumber;
    if (typeof value === "bigint" || typeof value === "number") {
        hexableNumber = value;
    }
    else {
        hexableNumber = new bignumber_js_1.default(value);
    }
    const hex = hexableNumber.toString(16);
    return zeroPadStringIfOddLength(hex);
}
function zeroPadStringIfOddLength(input) {
    input = input || "";
    if (input.length % 2 == 1) {
        return "0" + input;
    }
    return input;
}
