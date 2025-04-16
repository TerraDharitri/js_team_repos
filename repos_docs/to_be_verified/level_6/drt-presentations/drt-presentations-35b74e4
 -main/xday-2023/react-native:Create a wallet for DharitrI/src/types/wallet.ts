export enum WalletChainsEnum {
  aeternity = 457,
  aion = 425,
  binance = 714,
  bitcoin = 0,
  bitcoinTestnet = 1,
  bitcoinCash = 145,
  bitcoinGold = 156,
  callisto = 820,
  cardano = 1815,
  cosmos = 118,
  dash = 5,
  decred = 42,
  digiByte = 20,
  dogecoin = 3,
  eos = 194,
  ethereum = 60,
  ethereumClassic = 61,
  fio = 235,
  goChain = 6060,
  groestlcoin = 17,
  icon = 74,
  ioTeX = 304,
  kava = 459,
  kin = 2017,
  litecoin = 2,
  monacoin = 22,
  nebulas = 2718,
  nuls = 8964,
  nano = 165,
  near = 397,
  nimiq = 242,
  ontology = 1024,
  poanetwork = 178,
  qtum = 2301,
  xrp = 144,
  solana = 501,
  stellar = 148,
  ton = 396,
  tezos = 1729,
  theta = 500,
  thunderToken = 1001,
  neo = 888,
  tomoChain = 889,
  tron = 195,
  veChain = 818,
  viacoin = 14,
  wanchain = 5718350,
  zcash = 133,
  zcoin = 136,
  zilliqa = 313,
  zelcash = 19167,
  ravencoin = 175,
  waves = 5741564,
  terra = 330,
  harmony = 1023,
  algorand = 283,
  kusama = 434,
  polkadot = 354,
  filecoin = 461,
  bandChain = 494,
  smartChainLegacy = 10000714,
  smartChain = 20000714,
  dharitri = 508
}

export interface WalletType {
  accounts: WalletAccounts[];
}

export interface WalletAccounts {
  coin: WalletChainsEnum;
  address: string;
}

export interface SignTransactionInput {
  sender: string;
  receiver: string;
  amount: string;
  chainId?: string;
  nonce?: number | string;
  data?: string;
  gasPrice?: string;
  gasLimit?: string;
}
