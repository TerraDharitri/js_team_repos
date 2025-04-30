import { ExtendedValuesType } from 'types';
interface GenerateTransactionPropsType {
    address: string;
    balance: string;
    chainId: string;
    nonce: number;
    values: ExtendedValuesType;
}
export declare function generateTransaction(props: GenerateTransactionPropsType): Promise<import("@terradharitri/sdk-core/out").Transaction>;
export {};
//# sourceMappingURL=generateTransaction.d.ts.map