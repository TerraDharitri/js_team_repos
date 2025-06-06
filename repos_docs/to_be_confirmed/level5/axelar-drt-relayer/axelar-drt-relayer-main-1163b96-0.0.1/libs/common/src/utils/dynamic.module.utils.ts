import { CacheModule, RedisCacheModule, RedisCacheModuleOptions } from '@terradharitri/sdk-nestjs-cache';
import { DynamicModule } from '@nestjs/common';
import { ApiConfigModule, ApiConfigService } from '../config';
import { RedisModule } from '@terradharitri/sdk-nestjs-redis';

export class DynamicModuleUtils {
  static getCacheModule(): DynamicModule {
    return CacheModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) =>
        new RedisCacheModuleOptions(
          {
            host: apiConfigService.getRedisUrl(),
            port: apiConfigService.getRedisPort(),
          },
          {
            poolLimit: apiConfigService.getPoolLimit(),
            processTtl: apiConfigService.getProcessTtl(),
          },
        ),
      inject: [ApiConfigService],
    });
  }

  static getRedisCacheModule(): DynamicModule {
    return RedisCacheModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) =>
        new RedisCacheModuleOptions(
          {
            host: apiConfigService.getRedisUrl(),
            port: apiConfigService.getRedisPort(),
          },
          {
            poolLimit: apiConfigService.getPoolLimit(),
            processTtl: apiConfigService.getProcessTtl(),
          },
        ),
      inject: [ApiConfigService],
    });
  }

  static getRedisModule(): DynamicModule {
    return RedisModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) => {
        return {
          config: {
            host: apiConfigService.getRedisUrl(),
            port: apiConfigService.getRedisPort(),
          },
        };
      },
      inject: [ApiConfigService],
    });
  }
}
