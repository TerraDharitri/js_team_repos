import { Constants, RedisCacheService } from '@terradharitri/sdk-nestjs';
import { Injectable } from '@nestjs/common';
import { DrtApiService } from 'src/common';
import { AssetsQuery } from '../assets/assets-query';
import { RedisValue } from '../common/redis-value.dto';
import { BaseCollectionsAssetsRedisHandler } from './base-collection-assets.redis-handler';

@Injectable()
export class CollectionsNftsCountRedisHandler extends BaseCollectionsAssetsRedisHandler {
  protected redisCacheService: RedisCacheService;
  constructor(
    redisCacheService: RedisCacheService,
    private apiService: DrtApiService,
  ) {
    super(redisCacheService, 'collectionAssetsCount');
  }
  mapValues(
    returnValues: { key: string; value: any }[],
    data: any,
  ): RedisValue[] {
    const redisValues = [];
    for (const item of returnValues) {
      if (item.value === null) {
        item.value = data[item.key][0].value;
        redisValues.push(item);
      }
    }
    return [new RedisValue({ values: redisValues, ttl: Constants.oneDay() })];
  }

  async getData(keys: string[]) {
    const getCountPromises = keys.map((identifier) =>
      this.apiService.getNftsCountForCollection(
        this.getQueryForCollection(identifier),
        identifier,
      ),
    );

    const nftsCountResponse = await Promise.all(getCountPromises);
    return nftsCountResponse?.groupBy((item) => item.key);
  }

  private getQueryForCollection(identifier: string): string {
    return new AssetsQuery().addCollection(identifier).build();
  }
}
