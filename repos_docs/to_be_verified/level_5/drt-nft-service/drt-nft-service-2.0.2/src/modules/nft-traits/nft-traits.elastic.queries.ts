import {
  ElasticQuery,
  QueryType,
  QueryOperator,
  RangeGreaterThan,
  RangeLowerThanOrEqual,
  ElasticSortOrder,
} from '@terradharitri/sdk-nestjs';
import { constants } from 'src/config';
import { NftTypeEnum } from '../assets/models';

export const getAllEncodedNftValuesFromElasticQuery = (
  collection: string,
  startNonce?: number,
  endNonce?: number,
): ElasticQuery => {
  let query = ElasticQuery.create()
    .withMustExistCondition('nonce')
    .withMustCondition(QueryType.Match('token', collection, QueryOperator.AND))
    .withFields(['nft_traitValues', 'nonce'])
    .withMustMultiShouldCondition(
      [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
      (type) => QueryType.Match('type', type),
    )
    .withPagination({
      from: 0,
      size: constants.getNftsFromElasticBatchSize,
    });
  if (startNonce !== undefined && endNonce !== undefined) {
    query = query.withRangeFilter(
      'nonce',
      new RangeGreaterThan(startNonce),
      new RangeLowerThanOrEqual(endNonce),
    );
  }
  return query;
};

export const getAllEncodedNftValuesFromElasticBeforeTimestampQuery = (
  beforeTimestamp?: number,
): ElasticQuery => {
  let query = ElasticQuery.create()
    .withMustExistCondition('nonce')
    .withFields(['nft_traitValues', 'timestamp', 'identifier'])
    .withRangeFilter('timestamp', new RangeLowerThanOrEqual(beforeTimestamp))
    .withSort([{ name: 'timestamp', order: ElasticSortOrder.descending }])
    .withMustMultiShouldCondition(
      [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
      (type) => QueryType.Match('type', type),
    )
    .withPagination({
      from: 0,
      size: constants.getNftsFromElasticBatchSize,
    });

  return query;
};

export const getAllCollectionsFromElasticQuery = (): ElasticQuery => {
  return ElasticQuery.create()
    .withMustExistCondition('token')
    .withMustNotExistCondition('nonce')
    .withMustMultiShouldCondition(
      [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
      (type) => QueryType.Match('type', type),
    )
    .withFields(['token'])
    .withPagination({
      from: 0,
      size: constants.getCollectionsFromElasticBatchSize,
    });
};

export const getAllCollectionsWithTraitsFlagFromElasticQuery =
  (): ElasticQuery => {
    return ElasticQuery.create()
      .withMustExistCondition('token')
      .withMustNotExistCondition('nonce')
      .withMustMultiShouldCondition(
        [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
        (type) => QueryType.Match('type', type),
      )
      .withFields(['token', 'nft_hasTraitSummary'])
      .withPagination({
        from: 0,
        size: constants.getCollectionsFromElasticBatchSize,
      });
  };

export const getNftWithTraitValuesFromElasticQuery = (
  identifier: string,
): ElasticQuery => {
  return ElasticQuery.create()
    .withMustExistCondition('nonce')
    .withMustCondition(
      QueryType.Match('identifier', identifier, QueryOperator.AND),
    )
    .withFields(['nft_traitValues'])
    .withMustMultiShouldCondition(
      [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
      (type) => QueryType.Match('type', type),
    )
    .withPagination({
      from: 0,
      size: 1,
    });
};

export const getCollectionsWhereTraitsFlagNotSetFromElasticQuery = (
  maxCollectionsToUpdate: number,
): ElasticQuery => {
  return ElasticQuery.create()
    .withMustExistCondition('token')
    .withMustNotExistCondition('nonce')
    .withMustNotCondition(QueryType.Match('nft_hasTraitSummary', true))
    .withMustMultiShouldCondition(
      [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
      (type) => QueryType.Match('type', type),
    )
    .withFields(['token'])
    .withPagination({
      from: 0,
      size: Math.min(
        constants.getCollectionsFromElasticBatchSize,
        maxCollectionsToUpdate,
      ),
    });
};

export const getCollectionsWithTraitSummaryFromElasticQuery = (
  maxCollectionsToValidate: number,
): ElasticQuery => {
  return ElasticQuery.create()
    .withMustExistCondition('token')
    .withMustNotExistCondition('nonce')
    .withMustCondition(QueryType.Match('nft_hasTraitSummary', true))
    .withMustMultiShouldCondition(
      [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
      (type) => QueryType.Match('type', type),
    )
    .withPagination({
      from: 0,
      size: Math.min(
        constants.getCollectionsFromElasticBatchSize,
        maxCollectionsToValidate,
      ),
    });
};
