import React from 'react';

import classNames from 'classnames';
import { DataTestIdsEnum, N_A } from 'constants/index';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { getRewaLabel } from 'utils/network/getRewaLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { getUsdValue } from 'utils/operations/getUsdValue';

import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoValue = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => {
  const rewaLabel = getRewaLabel();
  const formattedTxValue = formatAmount({
    input: transaction.value,
    showLastNonZeroDecimal: true
  });

  const txValue = formatAmount({
    input: transaction.value,
    addCommas: false,
    showLastNonZeroDecimal: true
  });

  return (
    <DetailItem title='Value' className={classNames(styles.value, className)}>
      <span data-testid={DataTestIdsEnum.transactionInfoValue}>
        {formattedTxValue} {rewaLabel}{' '}
        <span className={styles.price}>
          {transaction.price != null
            ? `(${getUsdValue({
                amount: txValue,
                usd: transaction.price,
                decimals: 2,
                addEqualSign: true
              })})`
            : N_A}
        </span>
      </span>
    </DetailItem>
  );
};
