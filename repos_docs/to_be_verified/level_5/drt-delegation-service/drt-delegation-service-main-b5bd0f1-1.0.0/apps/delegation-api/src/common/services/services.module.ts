import { Module } from '@nestjs/common';
import { RedlockService } from './redlock';
import { RedisModule } from 'nestjs-redis';
import { ProviderManagerModule } from './provider-manager/provider-manager.module';
import { CacheManagerModule } from './cache-manager/cache-manager.module';
import { NumbatCommunicationModule } from './numbat-communication/numbat-communication.module';
import { ApiConfigModule } from './api-config/api.config.module';
import { CacheWarmerModule } from './cache-warmer/cache-warmer.module';

@Module({
  providers: [RedlockService],
  exports: [RedlockService, ProviderManagerModule, CacheManagerModule, NumbatCommunicationModule, ApiConfigModule],
  imports: [
    RedisModule.register({
      keyPrefix: process.env.REDIS_PREFIX,
      sentinels: [{
        host: process.env.SENTINEL_URL,
        port: parseInt(process.env.SENTINEL_PORT),
      }],
      name: process.env.SENTINEL_NAME,
    }),
    ProviderManagerModule,
    CacheManagerModule,
    NumbatCommunicationModule,
    ApiConfigModule,
    CacheWarmerModule,
  ],
})
export class ServicesModule { }
