import { useGetAccountInfo } from "@terradharitri/sdk-dapp/dist/hooks/account/useGetAccountInfo";
import {getChainID} from "@terradharitri/sdk-dapp/dist/utils";
import {smartContract} from "utils/smartContract";
import {Address} from "@terradharitri/sdk-core";
import {sendTransactions} from "@terradharitri/sdk-dapp/dist/services/transactions/sendTransactions";

export const useCancelTransaction = () => {
    const {account} = useGetAccountInfo();

    const getCancelTransaction = ({
        offerId
    }: {offerId: number}) => {
        return smartContract.methods
            .cancel([offerId])
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .withSender(Address.fromString(account.address))
            .buildTransaction()
            .toPlainObject()
    }

    const onCancelOffer = async (offerId: number) => {
        const cancelTransaction = getCancelTransaction({offerId});

        await sendTransactions({
            transactions: cancelTransaction,
            transactionsDisplayInfo: {
                processingMessage: 'Processing Cancel transaction',
                errorMessage: 'An error has occurred during Cancel',
                successMessage: 'Cancel transaction successful'
            },
            redirectAfterSign: false
        });
    }

    return {
        getCancelTransaction,
        onCancelOffer
    }
}