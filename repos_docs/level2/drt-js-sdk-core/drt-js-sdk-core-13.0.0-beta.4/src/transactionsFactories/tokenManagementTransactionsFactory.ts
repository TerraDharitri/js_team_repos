import { Address } from "../address";
import { DCDT_CONTRACT_ADDRESS } from "../constants";
import { IAddress } from "../interface";
import { Logger } from "../logger";
import { addressToHex, byteArrayToHex, utf8ToHex, numberToPaddedHex } from "../utils.codec";
import { TransactionNextBuilder } from "./transactionNextBuilder";
import { TransactionNext } from "../transaction";

interface Config {
    chainID: string;
    minGasLimit: bigint;
    gasLimitPerByte: bigint;
    gasLimitIssue: bigint;
    gasLimitToggleBurnRoleGlobally: bigint;
    gasLimitDcdtLocalMint: bigint;
    gasLimitDcdtLocalBurn: bigint;
    gasLimitSetSpecialRole: bigint;
    gasLimitPausing: bigint;
    gasLimitFreezing: bigint;
    gasLimitWiping: bigint;
    gasLimitDcdtNftCreate: bigint;
    gasLimitDcdtNftUpdateAttributes: bigint;
    gasLimitDcdtNftAddQuantity: bigint;
    gasLimitDcdtNftBurn: bigint;
    gasLimitStorePerByte: bigint;
    issueCost: bigint;
}

type RegisterAndSetAllRolesTokenType = "NFT" | "SFT" | "META" | "FNG";

/**
 * Use this class to create token management transactions like issuing DCDTs, creating NFTs, setting roles, etc.
 */
export class TokenManagementTransactionsFactory {
    private readonly config: Config;
    private readonly trueAsHex: string;
    private readonly falseAsHex: string;

    constructor(config: Config) {
        this.config = config;
        this.trueAsHex = utf8ToHex("true");
        this.falseAsHex = utf8ToHex("false");
    }

    createTransactionForIssuingFungible(options: {
        sender: IAddress;
        tokenName: string;
        tokenTicker: string;
        initialSupply: bigint;
        numDecimals: bigint;
        canFreeze: boolean;
        canWipe: boolean;
        canPause: boolean;
        canChangeOwner: boolean;
        canUpgrade: boolean;
        canAddSpecialRoles: boolean;
    }): TransactionNext {
        this.notifyAboutUnsettingBurnRoleGlobally();

        const dataParts = [
            "issue",
            utf8ToHex(options.tokenName),
            utf8ToHex(options.tokenTicker),
            numberToPaddedHex(options.initialSupply),
            numberToPaddedHex(options.numDecimals),
            utf8ToHex("canFreeze"),
            options.canFreeze ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canWipe"),
            options.canWipe ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canPause"),
            options.canPause ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canChangeOwner"),
            options.canChangeOwner ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canUpgrade"),
            options.canUpgrade ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canAddSpecialRoles"),
            options.canAddSpecialRoles ? this.trueAsHex : this.falseAsHex,
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitIssue,
            addDataMovementGas: true,
            amount: this.config.issueCost,
        }).build();
    }

    createTransactionForIssuingSemiFungible(options: {
        sender: IAddress;
        tokenName: string;
        tokenTicker: string;
        canFreeze: boolean;
        canWipe: boolean;
        canPause: boolean;
        canTransferNFTCreateRole: boolean;
        canChangeOwner: boolean;
        canUpgrade: boolean;
        canAddSpecialRoles: boolean;
    }): TransactionNext {
        this.notifyAboutUnsettingBurnRoleGlobally();

        const dataParts = [
            "issueSemiFungible",
            utf8ToHex(options.tokenName),
            utf8ToHex(options.tokenTicker),
            utf8ToHex("canFreeze"),
            options.canFreeze ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canWipe"),
            options.canWipe ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canPause"),
            options.canPause ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canTransferNFTCreateRole"),
            options.canTransferNFTCreateRole ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canChangeOwner"),
            options.canChangeOwner ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canUpgrade"),
            options.canUpgrade ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canAddSpecialRoles"),
            options.canAddSpecialRoles ? this.trueAsHex : this.falseAsHex,
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitIssue,
            addDataMovementGas: true,
            amount: this.config.issueCost,
        }).build();
    }

    createTransactionForIssuingNonFungible(options: {
        sender: IAddress;
        tokenName: string;
        tokenTicker: string;
        canFreeze: boolean;
        canWipe: boolean;
        canPause: boolean;
        canTransferNFTCreateRole: boolean;
        canChangeOwner: boolean;
        canUpgrade: boolean;
        canAddSpecialRoles: boolean;
    }): TransactionNext {
        this.notifyAboutUnsettingBurnRoleGlobally();

        const dataParts = [
            "issueNonFungible",
            utf8ToHex(options.tokenName),
            utf8ToHex(options.tokenTicker),
            utf8ToHex("canFreeze"),
            options.canFreeze ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canWipe"),
            options.canWipe ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canPause"),
            options.canPause ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canTransferNFTCreateRole"),
            options.canTransferNFTCreateRole ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canChangeOwner"),
            options.canChangeOwner ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canUpgrade"),
            options.canUpgrade ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canAddSpecialRoles"),
            options.canAddSpecialRoles ? this.trueAsHex : this.falseAsHex,
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitIssue,
            addDataMovementGas: true,
            amount: this.config.issueCost,
        }).build();
    }

    createTransactionForRegisteringMetaDCDT(options: {
        sender: IAddress;
        tokenName: string;
        tokenTicker: string;
        numDecimals: bigint;
        canFreeze: boolean;
        canWipe: boolean;
        canPause: boolean;
        canTransferNFTCreateRole: boolean;
        canChangeOwner: boolean;
        canUpgrade: boolean;
        canAddSpecialRoles: boolean;
    }): TransactionNext {
        this.notifyAboutUnsettingBurnRoleGlobally();

        const dataParts = [
            "registerMetaDCDT",
            utf8ToHex(options.tokenName),
            utf8ToHex(options.tokenTicker),
            numberToPaddedHex(options.numDecimals),
            utf8ToHex("canFreeze"),
            options.canFreeze ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canWipe"),
            options.canWipe ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canPause"),
            options.canPause ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canTransferNFTCreateRole"),
            options.canTransferNFTCreateRole ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canChangeOwner"),
            options.canChangeOwner ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canUpgrade"),
            options.canUpgrade ? this.trueAsHex : this.falseAsHex,
            utf8ToHex("canAddSpecialRoles"),
            options.canAddSpecialRoles ? this.trueAsHex : this.falseAsHex,
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitIssue,
            addDataMovementGas: true,
            amount: this.config.issueCost,
        }).build();
    }

    createTransactionForRegisteringAndSettingRoles(options: {
        sender: IAddress;
        tokenName: string;
        tokenTicker: string;
        tokenType: RegisterAndSetAllRolesTokenType;
        numDecimals: bigint;
    }): TransactionNext {
        this.notifyAboutUnsettingBurnRoleGlobally();

        const dataParts = [
            "registerAndSetAllRoles",
            utf8ToHex(options.tokenName),
            utf8ToHex(options.tokenTicker),
            utf8ToHex(options.tokenType),
            numberToPaddedHex(options.numDecimals),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitIssue,
            addDataMovementGas: true,
            amount: this.config.issueCost,
        }).build();
    }

    createTransactionForSettingBurnRoleGlobally(options: {
        sender: IAddress;
        tokenIdentifier: string;
    }): TransactionNext {
        const dataParts = ["setBurnRoleGlobally", utf8ToHex(options.tokenIdentifier)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitToggleBurnRoleGlobally,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForUnsettingBurnRoleGlobally(options: {
        sender: IAddress;
        tokenIdentifier: string;
    }): TransactionNext {
        const dataParts = ["unsetBurnRoleGlobally", utf8ToHex(options.tokenIdentifier)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitToggleBurnRoleGlobally,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForSettingSpecialRoleOnFungibleToken(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
        addRoleLocalMint: boolean;
        addRoleLocalBurn: boolean;
    }): TransactionNext {
        const dataParts = [
            "setSpecialRole",
            utf8ToHex(options.tokenIdentifier),
            addressToHex(options.user),
            ...(options.addRoleLocalMint ? [utf8ToHex("DCDTRoleLocalMint")] : []),
            ...(options.addRoleLocalBurn ? [utf8ToHex("DCDTRoleLocalBurn")] : []),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitSetSpecialRole,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForSettingSpecialRoleOnSemiFungibleToken(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
        addRoleNFTCreate: boolean;
        addRoleNFTBurn: boolean;
        addRoleNFTAddQuantity: boolean;
        addRoleDCDTTransferRole: boolean;
    }): TransactionNext {
        const dataParts = [
            "setSpecialRole",
            utf8ToHex(options.tokenIdentifier),
            addressToHex(options.user),
            ...(options.addRoleNFTCreate ? [utf8ToHex("DCDTRoleNFTCreate")] : []),
            ...(options.addRoleNFTBurn ? [utf8ToHex("DCDTRoleNFTBurn")] : []),
            ...(options.addRoleNFTAddQuantity ? [utf8ToHex("DCDTRoleNFTAddQuantity")] : []),
            ...(options.addRoleDCDTTransferRole ? [utf8ToHex("DCDTTransferRole")] : []),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitSetSpecialRole,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForSettingSpecialRoleOnMetaDCDT(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
        addRoleNFTCreate: boolean;
        addRoleNFTBurn: boolean;
        addRoleNFTAddQuantity: boolean;
        addRoleDCDTTransferRole: boolean;
    }): TransactionNext {
        return this.createTransactionForSettingSpecialRoleOnSemiFungibleToken(options);
    }

    createTransactionForSettingSpecialRoleOnNonFungibleToken(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
        addRoleNFTCreate: boolean;
        addRoleNFTBurn: boolean;
        addRoleNFTUpdateAttributes: boolean;
        addRoleNFTAddURI: boolean;
        addRoleDCDTTransferRole: boolean;
    }): TransactionNext {
        const dataParts = [
            "setSpecialRole",
            utf8ToHex(options.tokenIdentifier),
            addressToHex(options.user),
            ...(options.addRoleNFTCreate ? [utf8ToHex("DCDTRoleNFTCreate")] : []),
            ...(options.addRoleNFTBurn ? [utf8ToHex("DCDTRoleNFTBurn")] : []),
            ...(options.addRoleNFTUpdateAttributes ? [utf8ToHex("DCDTRoleNFTUpdateAttributes")] : []),
            ...(options.addRoleNFTAddURI ? [utf8ToHex("DCDTRoleNFTAddURI")] : []),
            ...(options.addRoleDCDTTransferRole ? [utf8ToHex("DCDTTransferRole")] : []),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: Address.fromBech32(DCDT_CONTRACT_ADDRESS),
            dataParts: dataParts,
            gasLimit: this.config.gasLimitSetSpecialRole,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForCreatingNFT(options: {
        sender: IAddress;
        tokenIdentifier: string;
        initialQuantity: bigint;
        name: string;
        royalties: number;
        hash: string;
        attributes: Uint8Array;
        uris: string[];
    }): TransactionNext {
        const dataParts = [
            "DCDTNFTCreate",
            utf8ToHex(options.tokenIdentifier),
            numberToPaddedHex(options.initialQuantity),
            utf8ToHex(options.name),
            numberToPaddedHex(options.royalties),
            utf8ToHex(options.hash),
            byteArrayToHex(options.attributes),
            ...options.uris.map(utf8ToHex),
        ];

        // Note that the following is an approximation (a reasonable one):
        const nftData = options.name + options.hash + options.attributes + options.uris.join("");
        const storageGasLimit = this.config.gasLimitPerByte + BigInt(nftData.length);

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitDcdtNftCreate + storageGasLimit,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForPausing(options: { sender: IAddress; tokenIdentifier: string }): TransactionNext {
        const dataParts = ["pause", utf8ToHex(options.tokenIdentifier)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitPausing,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForUnpausing(options: { sender: IAddress; tokenIdentifier: string }): TransactionNext {
        const dataParts = ["unPause", utf8ToHex(options.tokenIdentifier)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitPausing,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForFreezing(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
    }): TransactionNext {
        const dataParts = ["freeze", utf8ToHex(options.tokenIdentifier), addressToHex(options.user)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitFreezing,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForUnfreezing(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
    }): TransactionNext {
        const dataParts = ["UnFreeze", utf8ToHex(options.tokenIdentifier), addressToHex(options.user)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitFreezing,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForWiping(options: {
        sender: IAddress;
        user: IAddress;
        tokenIdentifier: string;
    }): TransactionNext {
        const dataParts = ["wipe", utf8ToHex(options.tokenIdentifier), addressToHex(options.user)];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitWiping,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForLocalMint(options: {
        sender: IAddress;
        tokenIdentifier: string;
        supplyToMint: bigint;
    }): TransactionNext {
        const dataParts = [
            "DCDTLocalMint",
            utf8ToHex(options.tokenIdentifier),
            numberToPaddedHex(options.supplyToMint),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitDcdtLocalMint,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForLocalBurning(options: {
        sender: IAddress;
        tokenIdentifier: string;
        supplyToBurn: bigint;
    }): TransactionNext {
        const dataParts = [
            "DCDTLocalBurn",
            utf8ToHex(options.tokenIdentifier),
            numberToPaddedHex(options.supplyToBurn),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitDcdtLocalBurn,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForUpdatingAttributes(options: {
        sender: IAddress;
        tokenIdentifier: string;
        tokenNonce: bigint;
        attributes: Uint8Array;
    }): TransactionNext {
        const dataParts = [
            "DCDTNFTUpdateAttributes",
            utf8ToHex(options.tokenIdentifier),
            numberToPaddedHex(options.tokenNonce),
            byteArrayToHex(options.attributes),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitDcdtNftUpdateAttributes,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForAddingQuantity(options: {
        sender: IAddress;
        tokenIdentifier: string;
        tokenNonce: bigint;
        quantityToAdd: bigint;
    }): TransactionNext {
        const dataParts = [
            "DCDTNFTAddQuantity",
            utf8ToHex(options.tokenIdentifier),
            numberToPaddedHex(options.tokenNonce),
            numberToPaddedHex(options.quantityToAdd),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitDcdtNftAddQuantity,
            addDataMovementGas: true,
        }).build();
    }

    createTransactionForBurningQuantity(options: {
        sender: IAddress;
        tokenIdentifier: string;
        tokenNonce: bigint;
        quantityToBurn: bigint;
    }): TransactionNext {
        const dataParts = [
            "DCDTNFTBurn",
            utf8ToHex(options.tokenIdentifier),
            numberToPaddedHex(options.tokenNonce),
            numberToPaddedHex(options.quantityToBurn),
        ];

        return new TransactionNextBuilder({
            config: this.config,
            sender: options.sender,
            receiver: options.sender,
            dataParts: dataParts,
            gasLimit: this.config.gasLimitDcdtNftBurn,
            addDataMovementGas: true,
        }).build();
    }

    private notifyAboutUnsettingBurnRoleGlobally() {
        Logger.info(`
==========
IMPORTANT!
==========
You are about to issue (register) a new token. This will set the role "DCDTRoleBurnForAll" (globally).
Once the token is registered, you can unset this role by calling "unsetBurnRoleGlobally" (in a separate transaction).`);
    }
}
