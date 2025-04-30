import {
  Address,
  SmartContract,
  Interaction,
  ContractFunction,
  TokenTransfer
} from '@terradharitri/sdk-core/out';
import {
  DcdtEnumType,
  NftEnumType
} from '@terradharitri/sdk-dapp/types/tokens.types';
import { getChainID } from '@terradharitri/sdk-dapp/utils/network';

import { SC_GAS_LIMIT } from 'constants/general';
import { GetCallContractTransactionType, ProcessedFormTokenType } from 'types';

const getTokenTransferInteraction = ({
  tokens,
  interaction
}: {
  tokens: ProcessedFormTokenType[];
  interaction: Interaction;
}) => {
  try {
    const validTokens = tokens.filter((token) =>
      Boolean(
        (token.tokenType === 'native' ||
          token.tokenType === DcdtEnumType.FungibleDCDT ||
          token.tokenType === NftEnumType.MetaDCDT) &&
          token.tokenAmount !== ''
      )
    );

    const onlyTokens = validTokens.every(
      (token) => token.tokenType === DcdtEnumType.FungibleDCDT
    );
    const onlyMetaDcdtTokens = validTokens.every(
      (token) =>
        token.tokenNonce !== undefined &&
        token.tokenType === NftEnumType.MetaDCDT
    );

    if (
      validTokens.length === 1 &&
      validTokens.every((token) => token.tokenType === 'native')
    ) {
      return interaction.withValue(
        TokenTransfer.rewaFromAmount(validTokens[0].tokenAmount)
      );
    }

    if (onlyTokens) {
      const transfers = validTokens.map((token) =>
        TokenTransfer.fungibleFromAmount(
          token.tokenIdentifier,
          token.tokenAmount,
          token.tokenDecimals
        )
      );

      if (transfers.length === 1) {
        return interaction.withSingleDCDTTransfer(transfers[0]);
      }

      return interaction.withMultiDCDTNFTTransfer(transfers);
    }

    if (onlyMetaDcdtTokens) {
      const transfers = validTokens.map((token) => {
        const cleanIdentifier = token.tokenIdentifier.substring(
          0,
          token.tokenIdentifier.lastIndexOf('-')
        );
        return TokenTransfer.metaDcdtFromAmount(
          cleanIdentifier,
          token.tokenNonce ?? 0,
          token.tokenAmount,
          token.tokenDecimals
        );
      });

      if (transfers.length === 1) {
        return interaction.withSingleDCDTNFTTransfer(transfers[0]);
      }

      return interaction.withMultiDCDTNFTTransfer(transfers);
    }
  } catch (error) {
    console.error('Unable to prepare SC Token Trasnfer: ', error);
  }

  return;
};

export const getCallContractTransaction = ({
  contractAddress,
  callerAddress,
  abiRegistry,
  func,
  args,
  userGasLimit,
  tokens,
  nonce
}: GetCallContractTransactionType) => {
  if (contractAddress && callerAddress && abiRegistry && func && args) {
    try {
      const owner = new Address(contractAddress);
      const caller = new Address(callerAddress);
      const contract = new SmartContract({
        address: owner,
        abi: abiRegistry
      });

      if (contract) {
        const interaction = new Interaction(
          contract,
          new ContractFunction(func.toString()),
          args
        )
          .withChainID(getChainID())
          .withGasLimit(Number(userGasLimit ?? SC_GAS_LIMIT))
          .withSender(caller);

        if (nonce) {
          interaction.withNonce(nonce);
        }
        if (tokens && tokens.length > 0) {
          // Accept only native REWA, Fungible Tokens and metaDCDTs for now
          const tokenTransferInteraction = getTokenTransferInteraction({
            tokens,
            interaction
          });
          if (tokenTransferInteraction) {
            return tokenTransferInteraction.buildTransaction();
          }
        }

        return interaction.buildTransaction();
      }
    } catch (error) {
      console.error('Unable to prepare SC Call Transaction: ', error);
    }
  }

  return undefined;
};
