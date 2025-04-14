import { EnvironmentsEnum } from 'types';
import { NetworkType } from '../redux/slices';

export * from './sharedConfig';

export const networks: NetworkType[] = [
  {
    default: false,
    id: EnvironmentsEnum.devnet,
    name: 'Devnet',
    apiAddress: 'https://devnet-api.dharitri.org',
    gatewayUrl: '',
    extrasApi: 'https://devnet-extras-api.dharitri.org',
    sampleAuthenticatedDomains: ['https://devnet-api.dharitri.org'],
    sovereignContractAddress: '',
    walletAddress: 'https://devnet-wallet.dharitri.org',
    WREWAid: ''
  },
  {
    default: true,
    id: EnvironmentsEnum.devnet,
    name: 'Gateway',
    apiAddress: '',
    gatewayUrl: 'https://devnet-gateway.dharitri.org',
    extrasApi: 'https://devnet-extras-api.dharitri.org',
    sampleAuthenticatedDomains: [''],
    sovereignContractAddress: '',
    walletAddress: 'https://devnet-wallet.dharitri.org',
    WREWAid: ''
  },
  {
    default: false,
    id: EnvironmentsEnum.mainnet,
    name: 'Mainnet',
    apiAddress: 'https://api.dharitri.org',
    gatewayUrl: '',
    extrasApi: 'https://extras-api.dharitri.org',
    sampleAuthenticatedDomains: ['https://api.dharitri.org'],
    sovereignContractAddress: '',
    walletAddress: 'https://wallet.dharitri.org',
    WREWAid: ''
  },
  {
    default: false,
    id: 'sovereign',
    name: 'Sovereign',
    apiAddress: 'https://api-sovereign-test.numbat.ro',
    gatewayUrl: '',
    extrasApi: 'https://extras-api-sovereign-test.numbat.ro',
    sampleAuthenticatedDomains: ['https://api-sovereign-test.numbat.ro'],
    sovereignContractAddress: '',
    walletAddress: 'https://wallet.voyager1.dev',
    WREWAid: 'WREWA-bd4d79'
  },
  {
    default: false,
    id: EnvironmentsEnum.testnet,
    name: 'Testnet',
    apiAddress: 'https://testnet-api.dharitri.org',
    gatewayUrl: '',
    extrasApi: 'https://testnet-extras-api.dharitri.org',
    sampleAuthenticatedDomains: ['https://testnet-api.dharitri.org'],
    sovereignContractAddress: '',
    walletAddress: 'https://testnet-wallet.dharitri.org',
    WREWAid: ''
  }
];
