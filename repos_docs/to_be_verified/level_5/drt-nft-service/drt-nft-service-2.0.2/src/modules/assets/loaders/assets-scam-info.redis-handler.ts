import { Injectable } from '@nestjs/common';
import { Constants, RedisCacheService } from '@terradharitri/sdk-nestjs';

import { RedisValue } from 'src/modules/common/redis-value.dto';
import { RedisKeyValueDataloaderHandler } from 'src/modules/common/redis-key-value-dataloader.handler';
import { CacheInfo } from 'src/common/services/caching/entities/cache.info';

@Injectable()
export class AssetScamInfoRedisHandler extends RedisKeyValueDataloaderHandler<string> {
  constructor(redisCacheService: RedisCacheService) {
    super(redisCacheService, CacheInfo.NftScamInfo.key);
  }

  mapValues(
    returnValues: { key: string; value: any }[],
    assetsIdentifiers: { [key: string]: any[] },
  ) {
    const redisValues = [];
    for (const item of returnValues) {
      if (item.value === null) {
        item.value =
          assetsIdentifiers && assetsIdentifiers[item.key]
            ? assetsIdentifiers[item.key][0]?.scamInfo
            : { key: item.key };
        redisValues.push(item);
      }
    }

    return [
      new RedisValue({
        values: redisValues,
        ttl: CacheInfo.NftScamInfo.ttl,
      }),
    ];
  }

  batchScamInfo = async (keys: string[], data: any) => {
    const cacheKeys = this.getCacheKeys(keys);
    const getDataFromRedis: { key: string; value: any }[] =
      await this.redisCacheService.getMany(cacheKeys);
    const returnValues: { key: string; value: any }[] =
      this.mapReturnValues<string>(keys, getDataFromRedis);
    const getNotCachedKeys = returnValues
      .filter((item) => item.value === null)
      .map((value) => value.key);
    if (getNotCachedKeys?.length > 0) {
      const redisValues = this.mapValues(returnValues, data);

      for (const val of redisValues) {
        const cacheKeys = this.getCacheKeys(
          val.values.map((value) => value.key),
        );
        await this.redisCacheService.setMany(
          cacheKeys,
          val.values,
          5 * Constants.oneMinute(),
        );
      }
      return returnValues;
    }
    return getDataFromRedis;
  };
}
