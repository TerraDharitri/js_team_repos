export interface GetConfirmButtonLabelType {
    providerType: string;
    hasGuardianScreen: boolean;
}
export declare const getConfirmButtonLabel: ({ providerType, hasGuardianScreen }: GetConfirmButtonLabelType) => "Confirm & Continue" | "Confirm on xPortal" | "Confirm on DeFi Wallet" | "Confirm on Ledger" | "Confirm";
//# sourceMappingURL=getConfirmButtonLabel.d.ts.map