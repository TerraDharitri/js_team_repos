import React from 'react';
import classNames from 'classnames';

import DharitriSymbol from 'assets/icons/drt-icon-simple.svg';
import { withStyles } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

import { WithStylesImportType } from '../../hocs/useStyles';

interface BalancePropsType extends WithClassnameType, WithStylesImportType {
  amount: string;
  addEqualSign?: boolean;
  displayAsUsd?: boolean;
  rewaIcon?: boolean;
  showTokenLabel?: boolean;
  tokenLabel?: string;
  showTokenLabelSup?: boolean;
}

export const BalanceComponent = ({
  amount,
  displayAsUsd,
  addEqualSign,
  rewaIcon,
  className,
  showTokenLabel = true,
  styles,
  tokenLabel,
  showTokenLabelSup,
  'data-testid': dataTestId
}: BalancePropsType) => {
  const [mainBalance, decimalBalance] = amount.split('.');
  const processedMainBalance =
    displayAsUsd && mainBalance.indexOf('$') < 0
      ? `$${mainBalance}`
      : mainBalance;

  const getBalancePayload = () => {
    const balancePayload: Record<string, string> = { processedMainBalance };

    if (addEqualSign && displayAsUsd) {
      balancePayload.approximation = '≈';
    }

    if (decimalBalance) {
      balancePayload.decimalBalance = `.${decimalBalance}`;
    }

    if (!displayAsUsd && showTokenLabel) {
      balancePayload.tokenLabel = ` ${tokenLabel}`;
    }

    return balancePayload;
  };

  const balancePayload = getBalancePayload();
  const dataValues = [
    balancePayload.approximation,
    balancePayload.processedMainBalance,
    balancePayload.decimalBalance,
    balancePayload.tokenLabel
  ];

  const dataBalanceValue = dataValues.reduce(
    (totalDataValue, dataValueItem) =>
      dataValueItem ? totalDataValue.concat(dataValueItem) : totalDataValue,
    ''
  );

  return (
    <div
      className={classNames(styles?.balance, className)}
      data-testid={dataTestId}
      data-value={dataBalanceValue}
    >
      {rewaIcon && !displayAsUsd && (
        <DharitriSymbol className={styles?.balanceSymbol} />
      )}

      {balancePayload.approximation && (
        <span className={styles?.balanceApproximation}>
          {balancePayload.approximation}
        </span>
      )}

      {balancePayload.processedMainBalance && (
        <span className={styles?.balanceMain}>{processedMainBalance}</span>
      )}

      {balancePayload.decimalBalance && (
        <span className={styles?.balanceDecimals}>
          {balancePayload.decimalBalance}
        </span>
      )}

      {balancePayload.tokenLabel && (
        <sup
          className={classNames(styles?.balanceSuffix, {
            [styles?.balanceSuffixSup]: showTokenLabelSup
          })}
        >
          {balancePayload.tokenLabel}
        </sup>
      )}
    </div>
  );
};

export const Balance = withStyles(BalanceComponent, {
  ssrStyles: () => import('UI/Balance/balanceStyles.scss'),
  clientStyles: () => require('UI/Balance/balanceStyles.scss').default
});
