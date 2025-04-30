import { DECIMALS } from '@terradharitri/sdk-dapp/constants/index';
import { getRewaLabel } from '@terradharitri/sdk-dapp/utils/network/getRewaLabel';

import { SelectOptionType, PartialDcdtType } from 'types';

export const getSelectOptions = ({
  tokens = [],
  includeRewa = false,
  rewaBalance = '0',
  wrappedRewaIdentifier = ''
}: {
  tokens?: PartialDcdtType[];
  includeRewa?: boolean;
  rewaBalance?: string;
  wrappedRewaIdentifier?: string;
}) => {
  const rewaLabel = getRewaLabel();
  const rewaFamily = [rewaLabel];
  if (wrappedRewaIdentifier && !rewaFamily.includes(wrappedRewaIdentifier)) {
    rewaFamily.push(wrappedRewaIdentifier);
  }
  const options: SelectOptionType[] = [];

  const sortOptions = (opts: SelectOptionType[]) => {
    const sortedByName = opts.sort((a, b) =>
      a.value < b.value ? -1 : a.value > b.value ? 1 : 0
    );

    let sorted = sortedByName.filter(
      ({ value }) => !rewaFamily.includes(value)
    );

    const wrewaToken = opts.find(
      ({ value }) => value === wrappedRewaIdentifier
    );
    const rewaToken = opts.find(({ value }) => value === rewaLabel);

    if (wrewaToken) {
      sorted = [wrewaToken, ...sorted];
    }

    if (rewaToken) {
      sorted = [rewaToken, ...sorted];
    }

    return sorted;
  };

  if (includeRewa) {
    const hasRewa = tokens?.filter((token) => token?.identifier === rewaLabel);
    if (hasRewa.length === 0) {
      tokens.push({
        name: rewaLabel,
        identifier: rewaLabel,
        ticker: rewaLabel,
        decimals: DECIMALS,
        balance: rewaBalance,
        type: 'native'
      });
    }
  }

  tokens.forEach((token) => {
    const tokenAsOption = {
      label: token.ticker,
      value: token.identifier,
      assets: token.assets,
      token
    };

    options.push(tokenAsOption);
  });

  return sortOptions(options);
};
