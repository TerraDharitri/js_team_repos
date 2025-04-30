import { NetworkType } from '@terradharitri/sdk-dapp/types/network.types';
import { FormConfigType, PartialNftType } from 'types';
export interface ComputedNftType {
    receiver: string;
    quantity: string;
    nft: PartialNftType;
}
export interface GetInitialValuesType {
    configValues: FormConfigType;
    address: string;
    balance: string;
    rewaLabel: string;
    nonce: number;
    chainId: string;
    networkConfig?: NetworkType;
}
//# sourceMappingURL=types.d.ts.map