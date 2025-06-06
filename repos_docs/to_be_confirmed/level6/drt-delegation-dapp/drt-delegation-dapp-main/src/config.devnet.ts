export interface DelegationContractType {
  name: string;
  gasLimit: number;
  data: string;
}

interface NetworkType {
  id: 'devnet' | 'testnet' | 'mainnet';
  name: string;
  rewaLabel: string;
  walletAddress: string;
  gatewayAddress: string;
  explorerAddress: string;
  delegationContract: string;
  apiAddress: string;
}

export const minDust = '5000000000000000'; // 0.005 REWA
export const dAppName = 'Dapp';
export const decimals = 2;
export const denomination = 18;
export const genesisTokenSupply = 20000000;
export const feesInEpoch = 0;
export const stakePerNode = 2500;
export const protocolSustainabilityRewards = 0.1;
export const yearSettings = [
  { year: 1, maximumInflation: 0.1084513 },
  { year: 2, maximumInflation: 0.09703538 },
  { year: 3, maximumInflation: 0.08561945 },
  { year: 4, maximumInflation: 0.07420352 },
  { year: 5, maximumInflation: 0.0627876 },
  { year: 6, maximumInflation: 0.05137167 },
  { year: 7, maximumInflation: 0.03995574 },
  { year: 8, maximumInflation: 0.02853982 },
  { year: 9, maximumInflation: 0.01712389 },
  { year: 10, maximumInflation: 0.00570796 },
  { year: 11, maximumInflation: 0.0 }
];
export const auctionContract =
  'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqplllsphc9lf';
export const stakingContract =
  'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqqllls9k7r6g';
export const delegationManagerContract =
  'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqyllls4jxmwv';

export const network: NetworkType = {
  id: 'devnet',
  name: 'Devnet',
  rewaLabel: 'xREWA',
  walletAddress: 'https://devnet-wallet.dharitri.org/dapp/init',
  apiAddress: 'https://devnet-api.dharitri.org',
  gatewayAddress: 'https://devnet-gateway.dharitri.org',
  explorerAddress: 'http://devnet-explorer.dharitri.org',
  delegationContract:
    'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqx8llllsv52grk'
};

export const delegationContractData: DelegationContractType[] = [
  {
    name: 'createNewDelegationContract',
    gasLimit: 6000000,
    data: 'createNewDelegationContract@'
  },
  {
    name: 'setAutomaticActivation',
    gasLimit: 6000000,
    data: 'setAutomaticActivation@'
  },
  {
    name: 'setMetaData',
    gasLimit: 6000000,
    data: 'setMetaData@'
  },
  {
    name: 'setReDelegateCapActivation',
    gasLimit: 6000000,
    data: 'setCheckCapOnReDelegateRewards@'
  },
  {
    name: 'changeServiceFee',
    gasLimit: 6000000,
    data: 'changeServiceFee@'
  },
  {
    name: 'modifyTotalDelegationCap',
    gasLimit: 6000000,
    data: 'modifyTotalDelegationCap@'
  },
  {
    name: 'addNodes',
    gasLimit: 12000000,
    data: 'addNodes'
  },
  {
    name: 'removeNodes',
    gasLimit: 12000000,
    data: 'removeNodes@'
  },
  {
    name: 'stakeNodes',
    gasLimit: 12000000,
    data: 'stakeNodes@'
  },
  {
    name: 'reStakeUnStakedNodes',
    gasLimit: 120000000,
    data: 'reStakeUnStakedNodes@'
  },
  {
    name: 'unStakeNodes',
    gasLimit: 12000000,
    data: 'unStakeNodes@'
  },
  {
    name: 'unBondNodes',
    gasLimit: 12000000,
    data: 'unBondNodes@'
  },
  {
    name: 'unJailNodes',
    gasLimit: 12000000,
    data: 'unJailNodes@'
  },
  {
    name: 'delegate',
    gasLimit: 12000000,
    data: 'delegate'
  },
  {
    name: 'unDelegate',
    gasLimit: 12000000,
    data: 'unDelegate@'
  },
  {
    name: 'withdraw',
    gasLimit: 12000000,
    data: 'withdraw'
  },
  {
    name: 'claimRewards',
    gasLimit: 6000000,
    data: 'claimRewards'
  },
  {
    name: 'reDelegateRewards',
    gasLimit: 12000000,
    data: 'reDelegateRewards'
  }
];
