import { useEffect, useState } from 'react';
import { useGetNetworkConfig } from '@terradharitri/sdk-dapp/hooks/useGetNetworkConfig';
import { NftType } from '@terradharitri/sdk-dapp/types/tokens.types';
import { useSearchParams } from 'react-router-dom';
import { QueryParamEnum } from 'pages/Result/result.types';
import { decodeNativeAuthToken } from 'pages/Verification/components/Scanner/utils';
import { getTimestamp } from 'utils';
import { useApiRequests } from './useApiRequests';

export const useValidateNftFromToken = (nativeAuthToken: string) => {
  const {
    network: { apiAddress }
  } = useGetNetworkConfig();

  const { getAccountNfts, getTransactionsCount } = useApiRequests();

  const [searchParams] = useSearchParams();

  const [isLoadingValidateNft, setIsLoadingValidateNft] = useState(false);
  const [isErrorValidateNft, setIsErrorValidateNft] = useState(false);
  const [isValidatedNft, setIsValidatedNft] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string>();
  const [nftIdentifier, setNftIdentifier] = useState<string>();

  const decodedToken = decodeNativeAuthToken(nativeAuthToken);

  const getNftCollection = async () => {
    const nftCollection = searchParams.get(QueryParamEnum.collection);
    const age = searchParams.get(QueryParamEnum.age);

    if (!decodedToken || !nftCollection || !age) {
      return;
    }

    const { address, extraInfo } = decodedToken;
    const { identifier } = extraInfo;

    setAccountAddress(address);
    setIsLoadingValidateNft(true);

    try {
      const { data: ownedNfts } = await getAccountNfts({
        apiAddress,
        accountAddress: address,
        collections: [nftCollection]
      });

      let isOwnedNftInUrlCollection = false;

      ownedNfts.forEach((nft: NftType) => {
        if (nft.identifier === identifier && nft.collection === nftCollection) {
          isOwnedNftInUrlCollection = true;
        }
      });

      const { data: noOfTx } = await getTransactionsCount({
        apiAddress,
        receiverAddress: address,
        collection: identifier,
        afterTimestamp: getTimestamp('seconds', Number(age))
      });

      if (noOfTx === 0 && isOwnedNftInUrlCollection) {
        setNftIdentifier(identifier);
        setIsValidatedNft(true);
      }
    } catch (error) {
      setIsErrorValidateNft(true);
    }

    setIsLoadingValidateNft(false);
  };

  useEffect(() => {
    getNftCollection();
  }, [nativeAuthToken]);

  return {
    isValidatedNft,
    isErrorValidateNft,
    isLoadingValidateNft,
    nftIdentifier,
    accountAddress
  };
};
