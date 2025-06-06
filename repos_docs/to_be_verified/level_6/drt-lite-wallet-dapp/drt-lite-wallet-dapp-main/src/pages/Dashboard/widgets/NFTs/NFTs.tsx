import { useEffect } from 'react';
import { DrtLink, OutputContainer } from 'components';
import { useGetAccountInfo } from 'lib';
import { DataTestIdsEnum } from 'localConstants';
import { useLazyGetNftsQuery } from 'redux/endpoints';
import { routeNames } from 'routes';
import { NFTRow } from './components';

export const NFTs = () => {
  const { websocketEvent, address } = useGetAccountInfo();
  const [fetchNFTs, { data: nftsData, isLoading }] = useLazyGetNftsQuery();

  useEffect(() => {
    fetchNFTs({ address });
  }, [address, websocketEvent]);

  if (!isLoading && nftsData?.length === 0) {
    return (
      <div className='flex flex-col'>
        <OutputContainer>
          <p className='text-gray-400'>No NFTs found</p>
        </OutputContainer>
        <div className='mt-5 flex flex-row gap-4'>
          <DrtLink
            className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white'
            data-testid={DataTestIdsEnum.issueNftBtn}
            to={routeNames.createNft}
          >
            Create NFT
          </DrtLink>
          <DrtLink
            className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white'
            data-testid={DataTestIdsEnum.issueCollectionBtn}
            to={routeNames.issueCollection}
          >
            Issue Collection
          </DrtLink>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <OutputContainer
        isLoading={isLoading}
        className='p-0 max-h-screen flex flex-wrap justify-center gap-3 py-3'
      >
        {nftsData?.map((nft) => <NFTRow key={nft.identifier} nft={nft} />)}
      </OutputContainer>
      <div className='mt-5 flex flex-row gap-4'>
        <DrtLink
          className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white'
          data-testid={DataTestIdsEnum.issueNftBtn}
          to={routeNames.createNft}
        >
          Create NFT
        </DrtLink>
        <DrtLink
          className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white'
          data-testid={DataTestIdsEnum.issueCollectionBtn}
          to={routeNames.issueCollection}
        >
          Issue Collection
        </DrtLink>
      </div>
    </div>
  );
};
