import BigNumber from "bignumber.js";
import { REWA_IDENTIFIER_FOR_MULTI_DCDTNFT_TRANSFER } from "./constants";
import { ErrInvalidArgument, ErrInvalidTokenIdentifier } from "./errors";

// Legacy constants:
const REWATokenIdentifier = "REWA";
const REWANumDecimals = 18;

// Legacy configuration.
// Note: this will actually set the default rounding mode for all BigNumber objects in the environment (in the application / dApp).
BigNumber.set({ ROUNDING_MODE: 1 });

interface ILegacyTokenTransferOptions {
    tokenIdentifier: string;
    nonce: number;
    amountAsBigInteger: BigNumber.Value;
    numDecimals?: number;
}

export class Token {
    readonly identifier: string;
    readonly nonce: bigint;

    constructor(options: { identifier: string; nonce?: bigint }) {
        this.identifier = options.identifier;
        this.nonce = options.nonce || 0n;
    }
}

export class TokenTransfer {
    readonly token: Token;
    readonly amount: bigint;

    /**
     * Legacy field. Use "token.identifier" instead.
     */
    readonly tokenIdentifier: string;

    /**
     * Legacy field. Use "token.nonce" instead.
     */
    readonly nonce: number;

    /**
     * Legacy field. Use "amount" instead.
     */
    readonly amountAsBigInteger: BigNumber;

    /**
     * Legacy field. The number of decimals is not a concern of "sdk-core".
     * For formatting and parsing amounts, use "sdk-dapp" or "bignumber.js" directly.
     */
    readonly numDecimals: number;

    constructor(options: { token: Token; amount: bigint } | ILegacyTokenTransferOptions) {
        if (this.isLegacyTokenTransferOptions(options)) {
            // Handle legacy fields.
            const amount = new BigNumber(options.amountAsBigInteger);
            if (!amount.isInteger() || amount.isNegative()) {
                throw new ErrInvalidArgument(`bad amountAsBigInteger: ${options.amountAsBigInteger}`);
            }

            this.tokenIdentifier = options.tokenIdentifier;
            this.nonce = options.nonce;
            this.amountAsBigInteger = amount;
            this.numDecimals = options.numDecimals || 0;

            // Handle new fields.
            this.token = new Token({
                identifier: options.tokenIdentifier,
                nonce: BigInt(options.nonce),
            });

            this.amount = BigInt(this.amountAsBigInteger.toFixed(0));
        } else {
            // Handle new fields.
            this.token = options.token;
            this.amount = options.amount;

            // Handle legacy fields.
            this.tokenIdentifier = options.token.identifier;
            this.nonce = Number(options.token.nonce);
            this.amountAsBigInteger = new BigNumber(this.amount.toString());
            this.numDecimals = 0;
        }
    }

    static newFromRewaAmount(amount: bigint): TokenTransfer {
        const token = new Token({ identifier: REWA_IDENTIFIER_FOR_MULTI_DCDTNFT_TRANSFER });
        return new TokenTransfer({ token, amount });
    }

    private isLegacyTokenTransferOptions(options: any): options is ILegacyTokenTransferOptions {
        return options.tokenIdentifier !== undefined;
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static rewaFromAmount(amount: BigNumber.Value) {
        const amountAsBigInteger = new BigNumber(amount).shiftedBy(REWANumDecimals).decimalPlaces(0);
        return this.rewaFromBigInteger(amountAsBigInteger);
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static rewaFromBigInteger(amountAsBigInteger: BigNumber.Value) {
        return new TokenTransfer({
            tokenIdentifier: REWATokenIdentifier,
            nonce: 0,
            amountAsBigInteger,
            numDecimals: REWANumDecimals,
        });
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static fungibleFromAmount(tokenIdentifier: string, amount: BigNumber.Value, numDecimals: number) {
        const amountAsBigInteger = new BigNumber(amount).shiftedBy(numDecimals).decimalPlaces(0);
        return this.fungibleFromBigInteger(tokenIdentifier, amountAsBigInteger, numDecimals);
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static fungibleFromBigInteger(
        tokenIdentifier: string,
        amountAsBigInteger: BigNumber.Value,
        numDecimals: number = 0,
    ) {
        return new TokenTransfer({
            tokenIdentifier,
            nonce: 0,
            amountAsBigInteger,
            numDecimals,
        });
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static nonFungible(tokenIdentifier: string, nonce: number) {
        return new TokenTransfer({
            tokenIdentifier,
            nonce,
            amountAsBigInteger: 1,
            numDecimals: 0,
        });
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static semiFungible(tokenIdentifier: string, nonce: number, quantity: number) {
        return new TokenTransfer({
            tokenIdentifier,
            nonce,
            amountAsBigInteger: quantity,
            numDecimals: 0,
        });
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static metaDcdtFromAmount(tokenIdentifier: string, nonce: number, amount: BigNumber.Value, numDecimals: number) {
        const amountAsBigInteger = new BigNumber(amount).shiftedBy(numDecimals).decimalPlaces(0);
        return this.metaDcdtFromBigInteger(tokenIdentifier, nonce, amountAsBigInteger, numDecimals);
    }

    /**
     * Legacy function. Use the constructor instead: new TokenTransfer({ token, amount });
     */
    static metaDcdtFromBigInteger(
        tokenIdentifier: string,
        nonce: number,
        amountAsBigInteger: BigNumber.Value,
        numDecimals = 0,
    ) {
        return new TokenTransfer({
            tokenIdentifier,
            nonce,
            amountAsBigInteger,
            numDecimals,
        });
    }

    toString() {
        return this.amount.toString();
    }

    /**
     * Legacy function. Use the "amount" field instead.
     */
    valueOf(): BigNumber {
        return new BigNumber(this.amount.toString());
    }

    /**
     * Legacy function. For formatting and parsing amounts, use "sdk-dapp" or "bignumber.js" directly.
     */
    toPrettyString(): string {
        return `${this.toAmount()} ${this.tokenIdentifier}`;
    }

    private toAmount(): string {
        return this.amountAsBigInteger.shiftedBy(-this.numDecimals).toFixed(this.numDecimals);
    }

    /**
     * Legacy function. Within your code, don't mix native values (REWA) and custom (DCDT) tokens.
     * See "TransferTransactionsFactory.createTransactionForNativeTokenTransfer()" vs. "TransferTransactionsFactory.createTransactionForDCDTTokenTransfer()".
     */
    isRewa(): boolean {
        return this.token.identifier == REWATokenIdentifier;
    }

    /**
     * Legacy function. Use "TokenComputer.isFungible(token)" instead.
     */
    isFungible(): boolean {
        return this.token.nonce == 0n;
    }
}

export class TokenComputer {
    TOKEN_RANDOM_SEQUENCE_LENGTH = 6;
    constructor() {}

    isFungible(token: Token): boolean {
        return token.nonce === 0n;
    }

    extractNonceFromExtendedIdentifier(identifier: string): number {
        const parts = identifier.split("-");

        const { prefix, ticker, randomSequence } = this.splitIdentifierIntoComponents(parts);
        this.validateExtendedIdentifier(prefix, ticker, randomSequence, parts);

        // If identifier is for a fungible token (2 parts or 3 with prefix), return 0
        if (parts.length === 2 || (prefix && parts.length === 3)) {
            return 0;
        }

        // Otherwise, decode the last part as an unsigned number
        const hexNonce = parts[parts.length - 1];
        return decodeUnsignedNumber(Buffer.from(hexNonce, "hex"));
    }

    extractIdentifierFromExtendedIdentifier(identifier: string): string {
        const parts = identifier.split("-");
        const { prefix, ticker, randomSequence } = this.splitIdentifierIntoComponents(parts);

        this.validateExtendedIdentifier(prefix, ticker, randomSequence, parts);
        if (prefix) {
            this.checkLengthOfPrefix(prefix);
            return prefix + "-" + ticker + "-" + randomSequence;
        }
        return ticker + "-" + randomSequence;
    }

    private validateExtendedIdentifier(
        prefix: string | null,
        ticker: string,
        randomSequence: string,
        parts: string[],
    ): void {
        this.checkIfExtendedIdentifierWasProvided(prefix, parts);
        this.ensureTokenTickerValidity(ticker);
        this.checkLengthOfRandomSequence(randomSequence);
    }

    private splitIdentifierIntoComponents(parts: string[]): { prefix: any; ticker: any; randomSequence: any } {
        if (this.isLowercaseAlphanumeric(parts[0])) {
            return { prefix: parts[0], ticker: parts[1], randomSequence: parts[2] };
        }

        return { prefix: null, ticker: parts[0], randomSequence: parts[1] };
    }

    private checkIfExtendedIdentifierWasProvided(prefix: string | null, tokenParts: string[]): void {
        //  this is for the identifiers of fungible tokens
        const MIN_EXTENDED_IDENTIFIER_LENGTH_IF_SPLITTED = 2;
        //  this is for the identifiers of nft, sft and meta-dcdt
        const MAX_EXTENDED_IDENTIFIER_LENGTH_IF_SPLITTED = prefix ? 4 : 3;

        if (
            tokenParts.length < MIN_EXTENDED_IDENTIFIER_LENGTH_IF_SPLITTED ||
            tokenParts.length > MAX_EXTENDED_IDENTIFIER_LENGTH_IF_SPLITTED
        ) {
            throw new ErrInvalidTokenIdentifier("Invalid extended token identifier provided");
        }
    }

    private isLowercaseAlphanumeric(str: string): boolean {
        return /^[a-z0-9]+$/.test(str);
    }

    private checkLengthOfRandomSequence(randomSequence: string): void {
        if (randomSequence.length !== this.TOKEN_RANDOM_SEQUENCE_LENGTH) {
            throw new ErrInvalidTokenIdentifier(
                "The identifier is not valid. The random sequence does not have the right length",
            );
        }
    }

    private checkLengthOfPrefix(prefix: string): void {
        const MAX_TOKEN_PREFIX_LENGTH = 4;
        const MIN_TOKEN_PREFIX_LENGTH = 1;
        if (prefix.length < MIN_TOKEN_PREFIX_LENGTH || prefix.length > MAX_TOKEN_PREFIX_LENGTH) {
            throw new ErrInvalidTokenIdentifier(
                "The identifier is not valid. The prefix does not have the right length",
            );
        }
    }

    private ensureTokenTickerValidity(ticker: string) {
        const MIN_TICKER_LENGTH = 3;
        const MAX_TICKER_LENGTH = 10;

        if (ticker.length < MIN_TICKER_LENGTH || ticker.length > MAX_TICKER_LENGTH) {
            throw new ErrInvalidTokenIdentifier(
                `The token ticker should be between ${MIN_TICKER_LENGTH} and ${MAX_TICKER_LENGTH} characters`,
            );
        }

        if (!ticker.match(/^[a-zA-Z0-9]+$/)) {
            throw new ErrInvalidTokenIdentifier("The token ticker should only contain alphanumeric characters");
        }

        if (!(ticker == ticker.toUpperCase())) {
            throw new ErrInvalidTokenIdentifier("The token ticker should be upper case");
        }
    }
}

function decodeUnsignedNumber(arg: Buffer): number {
    return arg.readUIntBE(0, arg.length);
}

/**
 * @deprecated use {@link TokenTransfer} instead.
 */
export class TokenPayment extends TokenTransfer {
    constructor(tokenIdentifier: string, nonce: number, amountAsBigInteger: BigNumber.Value, numDecimals: number) {
        super({
            tokenIdentifier,
            nonce,
            amountAsBigInteger,
            numDecimals,
        });
    }
}
