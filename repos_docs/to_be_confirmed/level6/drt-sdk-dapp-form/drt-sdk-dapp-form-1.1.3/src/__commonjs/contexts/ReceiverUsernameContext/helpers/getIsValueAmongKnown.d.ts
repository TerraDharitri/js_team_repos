import { KnowAddressType } from 'contexts';
export interface GetIsValueAmongKnownType {
    knownAddresses: KnowAddressType[] | null;
    inputValue: string;
    key: keyof KnowAddressType;
}
export declare const getIsValueAmongKnown: ({ knownAddresses, inputValue, key }: GetIsValueAmongKnownType) => boolean;
//# sourceMappingURL=getIsValueAmongKnown.d.ts.map