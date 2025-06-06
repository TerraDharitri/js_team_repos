import { Module } from '@nestjs/common';
import { TestSocketController } from './endpoints/test-sockets/test.socket.controller';
import { TestSocketModule } from './endpoints/test-sockets/test.socket.module';
import { CacheController } from './endpoints/caching/cache.controller';
import { ApiMetricsController, HealthCheckController } from '@drt-monorepo/common';
import { ApiMetricsModule, DynamicModuleUtils } from '@drt-monorepo/common';
import { LoggingModule } from '@terradharitri/sdk-nestjs-common';
import configuration from '../config/configuration';

@Module({
  imports: [
    LoggingModule,
    ApiMetricsModule,
    DynamicModuleUtils.getCachingModule(configuration),
    TestSocketModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
    DynamicModuleUtils.getPubSubService(),
  ],
  controllers: [
    ApiMetricsController,
    CacheController,
    HealthCheckController,
    TestSocketController,
  ],
})
export class PrivateAppModule { }
