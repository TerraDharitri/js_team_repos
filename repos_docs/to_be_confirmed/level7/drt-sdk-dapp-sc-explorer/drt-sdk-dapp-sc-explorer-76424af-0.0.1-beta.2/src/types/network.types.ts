import { EnvironmentsEnum } from '@terradharitri/sdk-dapp/types/enums.types';

export interface NetworkType {
  environment: EnvironmentsEnum;
  provider?: 'api' | 'proxy';
  apiAddress?: string;
  proxyUrl?: string;
}
