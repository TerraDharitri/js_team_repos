import { ValuesType } from 'types';
interface FetchGasLimitType {
    balance: string;
    address: string;
    isGuarded?: boolean;
    nonce: number;
    values: Omit<ValuesType, 'tokenId'>;
    chainId: string;
}
export declare const fetchGasLimit: ({ balance, address, isGuarded, nonce, values, chainId }: FetchGasLimitType) => Promise<{
    gasLimit: string;
    gasLimitCostError?: string | undefined;
}>;
export default fetchGasLimit;
//# sourceMappingURL=fetchGasLimit.d.ts.map