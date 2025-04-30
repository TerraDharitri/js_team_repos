import { SendFormContainerPropsType } from 'containers/SendFormContainer';
import { DelegationContractDataType } from 'types';
export interface ComputeInitGasLimitType {
    computedTokenId: string;
    receiver: string;
    isInternal: boolean;
    balance: string;
    address: string;
    isGuarded?: boolean;
    nonce: number;
    amount: string;
    data: string;
    gasLimit: string;
    gasPrice: string;
    chainId: string;
    delegationContractData: DelegationContractDataType | null;
    rewaLabel: string;
}
export declare const computeInitGasLimit: (props: ComputeInitGasLimitType) => Promise<{
    initGasLimit: string;
    initGasLimitError?: SendFormContainerPropsType['initGasLimitError'];
}>;
//# sourceMappingURL=computeInitGasLimit.d.ts.map