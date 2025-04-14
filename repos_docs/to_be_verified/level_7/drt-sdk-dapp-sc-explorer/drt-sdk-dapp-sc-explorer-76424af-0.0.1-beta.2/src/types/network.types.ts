import { EnvironmentsEnum } from '@terradharitrisdk-dapp/types/enums.types';

export interface NetworkType {
  environment: EnvironmentsEnum;
  provider?: 'api' | 'proxy';
  apiAddress?: string;
  proxyUrl?: string;
}
