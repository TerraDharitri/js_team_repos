import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import {
  DataTestIdsEnum,
  DECIMALS,
  DIGITS,
  MAINNET_REWA_LABEL,
  ZERO
} from 'constants/index';
import { formatAmount } from 'utils/operations/formatAmount';
import { stringIsInteger } from 'utils/validation/stringIsInteger';
import { FormatAmountPropsType } from './formatAmount.types';
import styles from './formatAmountStyles.scss';

const formatAmountInvalid = (props: FormatAmountPropsType) => {
  return (
    <span
      data-testid={
        props['data-testid'] || DataTestIdsEnum.formatAmountComponent
      }
      className={props.className}
    >
      <span
        className={styles['int-amount']}
        data-testid={DataTestIdsEnum.formatAmountInt}
      >
        ...
      </span>
    </span>
  );
};

const formatAmountValid = (props: FormatAmountPropsType, drtLabel: string) => {
  const { value, showLastNonZeroDecimal = false, showLabel = true } = props;
  const digits = props.digits != null ? props.digits : DIGITS;
  const decimals = props.decimals != null ? props.decimals : DECIMALS;

  const formattedValue = formatAmount({
    input: value,
    decimals,
    digits,
    showLastNonZeroDecimal,
    addCommas: true
  });

  const valueParts = formattedValue.split('.');
  const hasNoDecimals = valueParts.length === 1;
  const isNotZero = formattedValue !== ZERO;

  // fill in zeros to match specific formatting
  // example: if DIGITS are 2, `0.1` will be turned into `0.10`
  // to take up the same amount of space in a right-aligned table cell
  if (digits > 0 && hasNoDecimals && isNotZero) {
    let zeros = '';

    for (let i = 1; i <= digits; i++) {
      zeros = zeros + ZERO;
    }

    valueParts.push(zeros);
  }

  return (
    <span
      data-testid={
        props['data-testid'] || DataTestIdsEnum.formatAmountComponent
      }
      className={props.className}
    >
      <span
        className={styles['int-amount']}
        data-testid={DataTestIdsEnum.formatAmountInt}
      >
        {valueParts[0]}
      </span>
      {valueParts.length > 1 && (
        <span
          className={styles.decimals}
          data-testid={DataTestIdsEnum.formatAmountDecimals}
        >
          .{valueParts[1]}
        </span>
      )}
      {showLabel && (
        <span
          className={classNames(
            styles.symbol,
            props.token && globalStyles.textMuted
          )}
          data-testid={DataTestIdsEnum.formatAmountSymbol}
        >
          {` ${props.token ?? drtLabel}`}
        </span>
      )}
    </span>
  );
};

const FormatAmountComponent = (props: FormatAmountPropsType) => {
  const { value } = props;

  return !stringIsInteger(value)
    ? formatAmountInvalid(props)
    : formatAmountValid(props, props.rewaLabel || '');
};

/**
 * @param props.rewaLabel  if not provided, will fallback on **REWA**
 */
export const FormatAmount = (props: FormatAmountPropsType) => {
  const rewaLabel = props.rewaLabel || MAINNET_REWA_LABEL;

  const formatAmountProps = { ...props, rewaLabel };

  return <FormatAmountComponent {...formatAmountProps} />;
};
