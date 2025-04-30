import { Component } from 'react';
export declare class Confirm extends Component {
    static Receiver: ({ label, receiver, scamReport, receiverUsername }: import("./Receiver").ReceiverPropsType) => import("react").JSX.Element;
    static Amount: ({ label, amount, txType, tokenDecimals, tokenId, rewaLabel, rewaPriceInUsd, nft, tokenAvatar }: import("./Amount").AmountPropsType) => import("react").JSX.Element | null;
    static Fee: ({ rewaPriceInUsd, label, feeLimit, rewaLabel }: import("./Fee").FeePropsType) => import("react").JSX.Element;
    static Data: ({ label, scCallLabel, data, highlight, isScCall }: import("./Data").DataPropsType) => import("react").JSX.Element;
    static Token: ({ RewaIcon, rewaLabel, isDcdtTransaction, nft, tokenAvatar, tokenId, tokenIdError }: import("./Token").TokenPropsType) => import("react").JSX.Element;
    render(): null;
}
export default Confirm;
//# sourceMappingURL=index.d.ts.map