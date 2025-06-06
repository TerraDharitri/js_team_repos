import { Module } from '@nestjs/common';
import { HealthCheckController } from './endpoints/health-check/health.check.controller';
import { ApiMetricsController } from '@drt-monorepo/common/metrics/api.metrics.controller';
import { ApiMetricsModule, DynamicModuleUtils } from '@drt-monorepo/common';
import { LoggingModule } from '@terradharitri/sdk-nestjs-common';
import configuration from '../config/configuration';

@Module({
  imports: [
    LoggingModule,
    ApiMetricsModule,
    DynamicModuleUtils.getCachingModule(configuration),
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
    DynamicModuleUtils.getPubSubService(),
  ],
  controllers: [
    ApiMetricsController,
    HealthCheckController,
  ],
})
export class PrivateAppModule { }
