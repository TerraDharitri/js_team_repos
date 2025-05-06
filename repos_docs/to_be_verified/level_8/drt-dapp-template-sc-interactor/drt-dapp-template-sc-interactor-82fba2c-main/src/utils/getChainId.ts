import { chainIdByEnvironment } from '@terradharitri/sdk-dapp/constants/network';
import { environment } from 'config';

export const getChainId = () => {
  return chainIdByEnvironment[environment];
};
