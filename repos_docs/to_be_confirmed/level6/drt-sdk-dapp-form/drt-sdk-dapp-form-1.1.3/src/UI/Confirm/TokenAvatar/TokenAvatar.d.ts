import React, { JSXElementConstructor } from 'react';
import { TransactionTypeEnum } from 'types';
export interface TokenAvatarPropsType {
    RewaIcon?: JSXElementConstructor<any>;
    avatar?: string;
    type: TransactionTypeEnum;
}
export declare const TokenAvatar: (props: TokenAvatarPropsType) => React.JSX.Element;
//# sourceMappingURL=TokenAvatar.d.ts.map