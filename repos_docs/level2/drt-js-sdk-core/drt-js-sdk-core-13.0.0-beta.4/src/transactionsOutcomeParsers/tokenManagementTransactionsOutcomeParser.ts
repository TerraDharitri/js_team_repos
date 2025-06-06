import { TransactionEvent, TransactionOutcome } from "./resources";
import { ErrParseTransactionOutcome } from "../errors";
import { Address } from "../address";
import { bufferToBigInt } from "../smartcontracts/codec/utils";

export class TokenManagementTransactionsOutcomeParser {
    constructor() {}

    parseIssueFungible(transactionOutcome: TransactionOutcome): { tokenIdentifier: string } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "issue");
        const identifier = this.extractTokenIdentifier(event);

        return { tokenIdentifier: identifier };
    }

    parseIssueNonFungible(transactionOutcome: TransactionOutcome): { tokenIdentifier: string } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "issueNonFungible");
        const identifier = this.extractTokenIdentifier(event);

        return { tokenIdentifier: identifier };
    }

    parseIssueSemiFungible(transactionOutcome: TransactionOutcome): { tokenIdentifier: string } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "issueSemiFungible");
        const identifier = this.extractTokenIdentifier(event);

        return { tokenIdentifier: identifier };
    }

    parseRegisterMetaDcdt(transactionOutcome: TransactionOutcome): { tokenIdentifier: string } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "registerMetaDCDT");
        const identifier = this.extractTokenIdentifier(event);

        return { tokenIdentifier: identifier };
    }

    parseRegisterAndSetAllRoles(transactionOutcome: TransactionOutcome): { tokenIdentifier: string; roles: string[] } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const registerEvent = this.findSingleEventByIdentifier(transactionOutcome, "registerAndSetAllRoles");
        const tokenIdentifier = this.extractTokenIdentifier(registerEvent);

        const setRoleEvent = this.findSingleEventByIdentifier(transactionOutcome, "DCDTSetRole");
        const encodedRoles = setRoleEvent.topics.slice(3);

        let roles: string[] = [];
        for (const role of encodedRoles) {
            roles = roles.concat(this.decodeTopicAsString(role));
        }

        return { tokenIdentifier: tokenIdentifier, roles: roles };
    }

    parseSetBurnRoleGlobally(transactionOutcome: TransactionOutcome) {
        this.ensureNoError(transactionOutcome.transactionLogs.events);
    }

    parseUnsetBurnRoleGlobally(transactionOutcome: TransactionOutcome) {
        this.ensureNoError(transactionOutcome.transactionLogs.events);
    }

    parseSetSpecialRole(transactionOutcome: TransactionOutcome): {
        userAddress: string;
        tokenIdentifier: string;
        roles: string[];
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTSetRole");
        const userAddress = event.address;
        const tokenIdentifier = this.extractTokenIdentifier(event);

        const encodedRoles = event.topics.slice(3);

        let roles: string[] = [];
        for (const role of encodedRoles) {
            roles = roles.concat(this.decodeTopicAsString(role));
        }

        return { userAddress: userAddress, tokenIdentifier: tokenIdentifier, roles: roles };
    }

    parseNftCreate(transactionOutcome: TransactionOutcome): {
        tokenIdentifier: string;
        nonce: bigint;
        initialQuantity: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTNFTCreate");
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const amount = this.extractAmount(event);

        return { tokenIdentifier: tokenIdentifier, nonce: nonce, initialQuantity: amount };
    }

    parseLocalMint(transactionOutcome: TransactionOutcome): {
        userAddress: string;
        tokenIdentifier: string;
        nonce: bigint;
        mintedSupply: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTLocalMint");
        const userAddress = event.address;
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const mintedSupply = this.extractAmount(event);

        return {
            userAddress: userAddress,
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            mintedSupply: mintedSupply,
        };
    }

    parseLocalBurn(transactionOutcome: TransactionOutcome): {
        userAddress: string;
        tokenIdentifier: string;
        nonce: bigint;
        burntSupply: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTLocalBurn");
        const userAddress = event.address;
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const burntSupply = this.extractAmount(event);

        return {
            userAddress: userAddress,
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            burntSupply: burntSupply,
        };
    }

    parsePause(transactionOutcome: TransactionOutcome): { tokenIdentifier: string } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTPause");
        const tokenIdentifier = this.extractTokenIdentifier(event);

        return { tokenIdentifier: tokenIdentifier };
    }

    parseUnpause(transactionOutcome: TransactionOutcome): { tokenIdentifier: string } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTUnPause");
        const tokenIdentifier = this.extractTokenIdentifier(event);

        return { tokenIdentifier: tokenIdentifier };
    }

    parseFreeze(transactionOutcome: TransactionOutcome): {
        userAddress: string;
        tokenIdentifier: string;
        nonce: bigint;
        balance: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTFreeze");
        const userAddress = this.extractAddress(event);
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const balance = this.extractAmount(event);

        return {
            userAddress: userAddress,
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            balance: balance,
        };
    }

    parseUnfreeze(transactionOutcome: TransactionOutcome): {
        userAddress: string;
        tokenIdentifier: string;
        nonce: bigint;
        balance: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTUnFreeze");
        const userAddress = this.extractAddress(event);
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const balance = this.extractAmount(event);

        return {
            userAddress: userAddress,
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            balance: balance,
        };
    }

    parseWipe(transactionOutcome: TransactionOutcome): {
        userAddress: string;
        tokenIdentifier: string;
        nonce: bigint;
        balance: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTWipe");
        const userAddress = this.extractAddress(event);
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const balance = this.extractAmount(event);

        return {
            userAddress: userAddress,
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            balance: balance,
        };
    }

    parseUpdateAttributes(transactionOutcome: TransactionOutcome): {
        tokenIdentifier: string;
        nonce: bigint;
        attributes: Uint8Array;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTNFTUpdateAttributes");
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const attributes = event.topics[3] ? Buffer.from(event.topics[3], "base64") : new Uint8Array();

        return {
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            attributes: attributes,
        };
    }

    parseAddQuantity(transactionOutcome: TransactionOutcome): {
        tokenIdentifier: string;
        nonce: bigint;
        addedQuantity: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTNFTAddQuantity");
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const addedQuantity = this.extractAmount(event);

        return {
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            addedQuantity: addedQuantity,
        };
    }

    parseBurnQuantity(transactionOutcome: TransactionOutcome): {
        tokenIdentifier: string;
        nonce: bigint;
        burntQuantity: bigint;
    } {
        this.ensureNoError(transactionOutcome.transactionLogs.events);

        const event = this.findSingleEventByIdentifier(transactionOutcome, "DCDTNFTBurn");
        const tokenIdentifier = this.extractTokenIdentifier(event);
        const nonce = this.extractNonce(event);
        const burntQuantity = this.extractAmount(event);

        return {
            tokenIdentifier: tokenIdentifier,
            nonce: nonce,
            burntQuantity: burntQuantity,
        };
    }

    private ensureNoError(transactionEvents: TransactionEvent[]) {
        for (const event of transactionEvents) {
            if (event.identifier == "signalError") {
                const data = Buffer.from(event.data.toString().slice(1)).toString();
                const message = this.decodeTopicAsString(event.topics[1]);

                throw new ErrParseTransactionOutcome(
                    `encountered signalError: ${message} (${Buffer.from(data, "hex").toString()})`,
                );
            }
        }
    }

    private findSingleEventByIdentifier(transactionOutcome: TransactionOutcome, identifier: string): TransactionEvent {
        const events = this.gatherAllEvents(transactionOutcome).filter((event) => event.identifier == identifier);

        if (events.length == 0) {
            throw new ErrParseTransactionOutcome(`cannot find event of type ${identifier}`);
        }
        if (events.length > 1) {
            throw new ErrParseTransactionOutcome(`more than one event of type ${identifier}`);
        }

        return events[0];
    }

    private gatherAllEvents(transactionOutcome: TransactionOutcome): TransactionEvent[] {
        const allEvents = [];

        allEvents.push(...transactionOutcome.transactionLogs.events);

        for (const item of transactionOutcome.smartContractResults) {
            allEvents.push(...item.logs.events);
        }

        return allEvents;
    }

    private extractTokenIdentifier(event: TransactionEvent): string {
        if (!event.topics[0]) {
            return "";
        }
        return this.decodeTopicAsString(event.topics[0]);
    }

    private extractNonce(event: TransactionEvent): bigint {
        if (!event.topics[1]) {
            return BigInt(0);
        }
        const nonce = Buffer.from(event.topics[1], "base64");
        return BigInt(bufferToBigInt(nonce).toFixed(0));
    }

    private extractAmount(event: TransactionEvent): bigint {
        if (!event.topics[2]) {
            return BigInt(0);
        }
        const amount = Buffer.from(event.topics[2], "base64");
        return BigInt(bufferToBigInt(amount).toFixed(0));
    }

    private extractAddress(event: TransactionEvent): string {
        if (!event.topics[3]) {
            return "";
        }
        const address = Buffer.from(event.topics[3], "base64");
        return Address.fromBuffer(address).bech32();
    }

    private decodeTopicAsString(topic: string): string {
        return Buffer.from(topic, "base64").toString();
    }
}
