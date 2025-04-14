export enum EnvironmentsEnum {
  testnet = 'testnet',
  devnet = 'devnet',
  mainnet = 'mainnet'
}

export enum TransactionServerStatusesEnum {
  pending = 'pending',
  fail = 'fail',
  invalid = 'invalid',
  success = 'success',
  executed = 'executed',
  notExecuted = 'not executed',
  rewardReverted = 'reward-reverted'
}

export enum TransactionBatchStatusesEnum {
  signed = 'signed',
  cancelled = 'cancelled',
  success = 'success',
  sent = 'sent',
  fail = 'fail',
  timedOut = 'timedOut',
  invalid = 'invalid'
}

export enum TypesOfSmartContractCallsEnum {
  MultiDCDTNFTTransfer = 'MultiDCDTNFTTransfer',
  DCDTNFTTransfer = 'DCDTNFTTransfer'
}

export enum DCDTTransferTypesEnum {
  DCDTNFTTransfer = 'DCDTNFTTransfer',
  DCDTNFTBurn = 'DCDTNFTBurn',
  DCDTNFTAddQuantity = 'DCDTNFTAddQuantity',
  DCDTNFTCreate = 'DCDTNFTCreate',
  MultiDCDTNFTTransfer = 'MultiDCDTNFTTransfer',
  DCDTTransfer = 'DCDTTransfer',
  DCDTBurn = 'DCDTBurn',
  DCDTLocalMint = 'DCDTLocalMint',
  DCDTLocalBurn = 'DCDTLocalBurn',
  DCDTWipe = 'DCDTWipe',
  DCDTFreeze = 'DCDTFreeze'
}
