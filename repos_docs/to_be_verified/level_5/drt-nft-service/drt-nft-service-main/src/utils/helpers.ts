import { Address } from '@terradharitri/sdk-core';
import BigNumber from 'bignumber.js';

export function oneSecond(): number {
  return 1;
}

export function oneMinute(): number {
  return oneSecond() * 60;
}

export function oneHour(): number {
  return oneMinute() * 60;
}

export function oneDay(): number {
  return oneHour() * 24;
}

export function oneWeek(): number {
  return oneDay() * 7;
}

export function getCollectionAndNonceFromIdentifier(identifier: string): {
  collection: string;
  nonce: string;
} {
  const collection = identifier.split('-').slice(0, 2).join('-');
  const nonce = identifier.split('-').slice(2).join('-');
  return { collection, nonce };
}

export function usdValue(amount: string, usd: number, decimals?: number): any {
  const sum = (parseFloat(amount) * usd).toFixed(decimals);
  return parseFloat(sum).toLocaleString('en', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

export const isValidAddress = (address: string): boolean => {
  try {
    new Address(address);
    return true;
  } catch {
    return false;
  }
};

export const removeCredentialsFromUrl = (url: string): string => {
  const urlCredentialsRegex = new RegExp('(?<=//).*(?<=@)');
  const credentials = url.match(urlCredentialsRegex);
  if (credentials !== null) {
    return url.replace(credentials[0], '');
  }
  return url;
};

export const computeUsdAmount = (tokenPriceUsd: string, tokenAmount: string, tokenDecimals: number): string => {
  const amountUsd: BigNumber = new BigNumber(tokenAmount).multipliedBy(tokenPriceUsd).dividedBy(Math.pow(10, tokenDecimals));
  return amountUsd.toString();
};

export const computeUsd = (tokenPriceUsd: string, tokenAmount: string, tokenDecimals: number): BigNumber => {
  const amountUsd = new BigNumber(tokenAmount).multipliedBy(tokenPriceUsd).dividedBy(Math.pow(10, tokenDecimals));
  return amountUsd;
};

export const randomBetween = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export function timestampToEpochAndRound(
  timestamp: number,
  currentEpoch: number,
  currentRound: number,
  roundsPerEpoch: number,
  milisecondsPerRound: number,
): [number, number] {
  const currentTimestamp = new Date();
  const timeDiffInMs = +currentTimestamp.getTime() - +new Date(timestamp).getTime() * 1000;

  const roundDiff = timeDiffInMs / milisecondsPerRound;
  const epochDiff = roundDiff / roundsPerEpoch;

  const epoch = currentEpoch - epochDiff;
  const round = currentRound - (epochDiff % roundsPerEpoch);

  return [Math.trunc(epoch), Math.trunc(round)];
}

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFilePathFromDist(filename: string): string {
  return `${__dirname.substring(0, __dirname.lastIndexOf('dist/') + 5)}${filename}`;
}
