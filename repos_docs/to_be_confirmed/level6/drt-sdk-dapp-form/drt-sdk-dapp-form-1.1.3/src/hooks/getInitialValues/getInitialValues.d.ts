import { SendFormContainerPropsType } from 'containers/SendFormContainer';
import { PartialNftType, PartialTokenType } from 'types';
import { GetInitialValuesType } from './types';
export interface GetInitialValuesReturnType {
    initialValues: {
        receiver: string;
        receiverUsername?: string;
        amount: string;
        tokenId: string;
        gasLimit: string;
        gasPrice: string;
        data: string;
    };
    nft?: PartialNftType;
    gasLimitCostError?: SendFormContainerPropsType['initGasLimitError'];
    computedTokens: PartialTokenType[];
    computedTokenId: string;
    tokenFound: boolean;
}
export declare function getInitialValues(props: GetInitialValuesType): Promise<GetInitialValuesReturnType>;
//# sourceMappingURL=getInitialValues.d.ts.map