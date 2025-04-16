import { NftTypeEnum } from 'src/modules/assets/models';
import { ElasticQuery, QueryType } from '@terradharitri/sdk-nestjs';
import { constants } from 'src/config';

export const getNsfwNotMarkedQuery = ElasticQuery.create()
  .withMustNotExistCondition('nft_nsfw_mark')
  .withMustExistCondition('identifier')
  .withMustMultiShouldCondition(
    [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
    (type) => QueryType.Match('type', type),
  )
  .withMustCondition(QueryType.Nested('data', { 'data.nonEmptyURIs': true }))
  .withPagination({ from: 0, size: constants.elasticMaxBatch });

export const getNsfwMarkedQuery = ElasticQuery.create()
  .withFields(['nft_nsfw_mark'])
  .withMustExistCondition('identifier')
  .withMustMultiShouldCondition(
    [NftTypeEnum.NonFungibleDCDT, NftTypeEnum.SemiFungibleDCDT],
    (type) => QueryType.Match('type', type),
  )
  .withMustCondition(QueryType.Nested('data', { 'data.nonEmptyURIs': true }))
  .withPagination({ from: 0, size: constants.elasticMaxBatch });
