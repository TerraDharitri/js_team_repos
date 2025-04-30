import { GetInitialValuesType } from './types';
export declare const getInitialGasLimit: (props: GetInitialValuesType & {
    computedTokenId: string;
}) => Promise<{
    initGasLimit: string;
    initGasLimitError?: string | undefined;
}>;
//# sourceMappingURL=getInitialGasLimit.d.ts.map