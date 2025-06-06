import { FormatAmountPropsType as SdkDappFormatAmountType } from '@terradharitri/sdk-dapp/UI/FormatAmount/formatAmount.types';
import { stringIsInteger } from '@terradharitri/sdk-dapp/utils/validation/stringIsInteger';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { ELLIPSIS } from 'appConstants';
import { NativeTokenSymbol } from 'components';
import { DECIMALS, DIGITS } from 'config';
import { formatAmount, isRewaToken } from 'helpers';
import { activeNetworkSelector, economicsSelector } from 'redux/selectors';
import { FormatDisplayValue } from '../FormatDisplayValue';
import { FormatUSD } from '../FormatUSD';

export interface FormatAmountUIType extends SdkDappFormatAmountType {
  showTooltip?: boolean;
  showSymbol?: boolean;
  superSuffix?: boolean;
  showUsdValue?: boolean;
  decimalOpacity?: boolean;
  usd?: string | number;
}

export const FormatAmount = (props: FormatAmountUIType) => {
  const { rewaLabel } = useSelector(activeNetworkSelector);
  const { isFetched, unprocessed } = useSelector(economicsSelector);
  const {
    value,
    className,
    token,
    digits = DIGITS,
    decimals = DECIMALS,
    showLastNonZeroDecimal = false,
    showSymbol = true,
    showUsdValue = true,
    showLabel,
    showTooltip = true,
    usd
  } = props;
  const dataTestId = props['data-testid'] ?? 'formatAmountComponent';
  const isCustomIcon = !isRewaToken(rewaLabel);

  if (!stringIsInteger(value)) {
    return (
      <span
        data-testid={dataTestId}
        className={classNames(className, 'fam invalid')}
      >
        {ELLIPSIS}
      </span>
    );
  }

  const isZero = new BigNumber(value).isZero();
  const formattedValue = formatAmount({
    input: value,
    decimals,
    digits,
    showLastNonZeroDecimal,
    addCommas: true
  });

  const completeValue = digits
    ? formatAmount({
        input: value,
        decimals,
        digits,
        showLastNonZeroDecimal: true,
        addCommas: true
      })
    : formattedValue;

  const showUsdValueTooltip =
    showTooltip &&
    showUsdValue &&
    !isZero &&
    (showSymbol || showLabel) &&
    ((isFetched && unprocessed.price) || (usd && !token));

  return (
    <FormatDisplayValue
      {...props}
      formattedValue={formattedValue}
      completeValue={completeValue}
      label={rewaLabel}
      data-testid={dataTestId}
      showSymbol={showSymbol}
      showLastNonZeroDecimal={showLastNonZeroDecimal}
      showTooltipLabel
      spacedLabel
      {...(showSymbol && !token
        ? {
            symbol: (
              <>
                <NativeTokenSymbol
                  className={classNames('sym', { custom: isCustomIcon })}
                />{' '}
              </>
            )
          }
        : {})}
      {...(showUsdValueTooltip
        ? {
            details: (
              <>
                {usd ? '' : 'Current '}
                USD Value:{' '}
                <FormatUSD
                  usd={usd}
                  value={value}
                  decimals={decimals}
                  digits={digits}
                  showTooltip={false}
                  showPrefix={false}
                />
              </>
            )
          }
        : {})}
    />
  );
};
