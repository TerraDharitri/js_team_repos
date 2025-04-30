import React from 'react';
import { FormContextPropsType } from 'contexts';
import { PartialNftType, TransactionTypeEnum } from 'types';
export interface NFTSFTPreviewPropsType extends PartialNftType {
    txType: TransactionTypeEnum;
    onClick?: FormContextPropsType['onPreviewClick'];
}
export declare const NFTSFTPreview: (props: NFTSFTPreviewPropsType) => React.JSX.Element | null;
//# sourceMappingURL=NFTSFTPreview.d.ts.map