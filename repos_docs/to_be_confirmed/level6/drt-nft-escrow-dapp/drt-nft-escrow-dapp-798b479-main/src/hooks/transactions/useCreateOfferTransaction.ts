import {useGetAccountInfo} from "@terradharitri/sdk-dapp/dist/hooks/account/useGetAccountInfo";
import {getChainID} from "@terradharitri/sdk-dapp/dist/utils";
import {Address, TokenTransfer} from "@terradharitri/sdk-core";
import {smartContract} from "utils/smartContract";

export const useCreateOfferTransaction = () => {
    const {account} = useGetAccountInfo();

    const getCreateOfferTransaction = ({
        collectionId,
        nonce,
        wantedCollectionId,
        wantedNonce,
        wantedAddress
    }: {collectionId: string, nonce: number, wantedCollectionId: string, wantedNonce: number, wantedAddress: string}) => {
        return smartContract.methods
            .escrow([wantedCollectionId, wantedNonce, wantedAddress])
            .withSingleDCDTNFTTransfer(
                TokenTransfer.nonFungible(collectionId, nonce)
            )
            .withGasLimit(10000000)
            .withChainID(getChainID())
            .withSender(Address.fromString(account.address))
            .buildTransaction()
            .toPlainObject()
    }

    return {
        getCreateOfferTransaction
    }
}