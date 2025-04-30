import { TransactionTypeEnum } from 'types/enums';
import { ExtendedValuesType } from 'types/form';
export declare const getTransactionFields: (values: ExtendedValuesType) => Promise<{
    amount: string;
    receiverUsername: any;
    address: string;
    balance: string;
    chainId: string;
    hiddenFields?: ("receiver" | "gasPrice" | "data" | "tokenId" | "amount" | "gasLimit" | "receiverUsername" | "rawReceiverUsername" | "senderUsername")[] | undefined;
    ignoreTokenBalance?: boolean | undefined;
    isAdvancedModeEnabled?: boolean | undefined;
    isBurn?: boolean | undefined;
    isGuarded?: boolean | undefined;
    ledger?: {
        ledgerDataActive: boolean;
        version: string;
    } | undefined;
    nft?: import("../..").PartialNftType | undefined;
    readonly?: boolean | ("receiver" | "gasPrice" | "data" | "tokenId" | "amount" | "gasLimit" | "receiverUsername" | "rawReceiverUsername" | "senderUsername")[] | undefined;
    tokens?: import("../..").PartialTokenType[] | null | undefined;
    transaction?: import("@terradharitri/sdk-core/out").Transaction | undefined;
    txType: TransactionTypeEnum;
    uiOptions?: {
        showAmountSlider: boolean;
    } | undefined;
    rawReceiverUsername?: string | undefined;
    senderUsername?: string | undefined;
    receiver: string;
    gasPrice: string;
    data: string;
    tokenId: string;
    gasLimit: string;
}>;
//# sourceMappingURL=getTransactionFields.d.ts.map