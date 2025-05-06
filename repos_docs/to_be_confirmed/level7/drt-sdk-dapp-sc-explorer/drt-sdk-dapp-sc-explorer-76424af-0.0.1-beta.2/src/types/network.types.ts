import { EnvironmentsEnum } from '@terradharitri/sdk-dapp/dist/types/enums.types';

export interface NetworkType {
  environment: EnvironmentsEnum;
  provider?: 'api' | 'proxy';
  apiAddress?: string;
  proxyUrl?: string;
}
