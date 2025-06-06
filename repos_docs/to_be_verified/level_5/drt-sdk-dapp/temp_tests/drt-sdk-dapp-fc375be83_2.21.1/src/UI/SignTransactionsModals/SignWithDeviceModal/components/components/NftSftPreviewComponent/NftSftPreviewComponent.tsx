import React from 'react';
import classNames from 'classnames';

import { DataTestIdsEnum } from 'constants/index';
import { useGetNetworkConfig } from 'hooks';
import { NftEnumType } from 'types/tokens.types';
import {
  explorerUrlBuilder,
  getExplorerLink
} from 'utils/transactions/getInterpretedTransaction/helpers';

import styles from './NftSftPreviewComponent.styles.scss';

export interface NftSftPreviewPropsType {
  txType: NftEnumType;
  tokenLabel: string;
  tokenId: string;
  tokenAvatar: string;
}

export const NftSftPreviewComponent = ({
  txType,
  tokenLabel,
  tokenId,
  tokenAvatar
}: NftSftPreviewPropsType) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const badge = txType === NftEnumType.NonFungibleDCDT ? 'NFT' : 'SFT';
  const explorerLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.nftDetails(tokenId)
  });

  return (
    <a
      href={explorerLink}
      target='_blank'
      className={styles.preview}
      rel='noreferrer'
    >
      <img src={tokenAvatar} className={styles.image} alt={tokenLabel} />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.name} data-testid={DataTestIdsEnum.nftLabel}>
            {tokenLabel}
          </div>

          <div
            className={styles.identifier}
            data-testid={DataTestIdsEnum.nftIdentifier}
          >
            {tokenId}
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={classNames(styles.badge, {
              [styles.nft]: txType === NftEnumType.NonFungibleDCDT,
              [styles.sft]: txType === NftEnumType.SemiFungibleDCDT
            })}
          >
            {badge}
          </div>
        </div>
      </div>
    </a>
  );
};
