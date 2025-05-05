import {getChainID} from "@terradharitri/sdk-dapp/dist/utils";
import {Address, TokenTransfer} from "@terradharitri/sdk-core";
import {smartContract} from "utils/smartContract";
import { useGetAccountInfo } from "@terradharitri/sdk-dapp/dist/hooks/account/useGetAccountInfo";
import {sendTransactions} from "@terradharitri/sdk-dapp/dist/services/transactions/sendTransactions";

export const useConfirmTransaction = () => {
    const {account} = useGetAccountInfo();
    const getAcceptTransaction = ({
        offerId,
        collectionId,
        nonce
    }: {offerId: number, collectionId: string, nonce: number}) => {
        return smartContract.methods
            .accept([offerId])
            .withSingleDCDTNFTTransfer(
                TokenTransfer.nonFungible(collectionId, nonce)
            )
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .withSender(Address.fromString(account.address))
            .buildTransaction()
            .toPlainObject()
    }

    const onAcceptOffer = async ({
         offerId,
         collectionId,
         nonce
    }: {offerId: number, collectionId: string, nonce: number}) => {
        const acceptTransaction = getAcceptTransaction({offerId, collectionId, nonce});

        await sendTransactions({
            transactions: acceptTransaction,
            transactionsDisplayInfo: {
                processingMessage: 'Processing Accept transaction',
                errorMessage: 'An error has occurred during Accept',
                successMessage: 'Accept transaction successful'
            },
            redirectAfterSign: false
        });
    }

    return {
        getAcceptTransaction,
        onAcceptOffer
    }
}