import React, { ReactNode } from 'react';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';

import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';
import { getTransactionValue } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionValue';

import { WithTransactionType } from '../../../../UI/types';
import styles from '../transactionsTable.styles.scss';

interface TokenWrapperPropsType {
  children: ReactNode;
  titleText?: string;
}

export interface TransactionValuePropsType extends WithTransactionType {
  hideMultipleBadge?: boolean;
}

const TokenWrapper = ({ children, titleText }: TokenWrapperPropsType) => (
  <div
    className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
    data-testid='transactionValue'
  >
    {children}

    {titleText && (
      <FontAwesomeIcon
        icon={faLayerGroup}
        data-testid='transactionValueIcon'
        className={classNames(globalStyles.ml2, globalStyles.textSecondary)}
        title={titleText}
      />
    )}
  </div>
);

export const TransactionValue = ({
  transaction,
  hideMultipleBadge
}: TransactionValuePropsType) => {
  const { rewaValueData, tokenValueData, nftValueData } = getTransactionValue({
    transaction,
    hideMultipleBadge
  });

  if (tokenValueData) {
    return (
      <div className={styles.transactionCell}>
        <TokenWrapper titleText={tokenValueData.titleText}>
          <TransactionActionBlock.Token {...tokenValueData} />
        </TokenWrapper>
      </div>
    );
  }

  if (nftValueData) {
    const hideBadgeForMetaDCDT =
      nftValueData.token.type === NftEnumType.MetaDCDT;
    const badgeText = hideBadgeForMetaDCDT ? null : nftValueData.badgeText;

    return (
      <div className={styles.transactionCell}>
        <TokenWrapper titleText={nftValueData.titleText}>
          <TransactionActionBlock.Nft {...nftValueData} badgeText={badgeText} />
        </TokenWrapper>
      </div>
    );
  }

  if (rewaValueData) {
    return (
      <div className={styles.transactionCell}>
        <FormatAmount
          value={rewaValueData.value}
          digits={2}
          data-testid='transactionValue'
        />
      </div>
    );
  }

  return null;
};
