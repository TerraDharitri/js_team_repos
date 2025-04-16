import abi from 'contracts/ping-pong.abi.json'; // NOTE: replace this with your ABI file
import { EnvironmentsEnum } from 'types';

export * from './sharedConfig';

export const API_URL = 'https://devnet-template-api.dharitri.org';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.devnet;
export const metamaskSnapWalletAddress =
  'https://devnet-snap-wallet.dharitri.org';

interface IWhitelistEndpoint {
  name: string;
  title: string;
}

export const contractAbi = abi;
export const contractAddress =
  'drt1qqqqqqqqqqqqqpgqm6ad6xrsjvxlcdcffqe8w58trpec09ug9l5qs9jez7'; // NOTE: replace this with your contract address

// NOTE: uncomment lines below and add the endpoints you want to interact with
// NOTE: `name` is endpoint's name from the ABI file; `title` is at your choice
export const whitelistEndpoints: IWhitelistEndpoint[] = [
  // { name: 'ping', title: 'Ping' },
  // { name: 'pong', title: 'Pong' }
];
