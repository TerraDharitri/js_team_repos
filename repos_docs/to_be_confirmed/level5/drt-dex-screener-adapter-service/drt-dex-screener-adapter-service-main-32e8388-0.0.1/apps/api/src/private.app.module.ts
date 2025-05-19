import { Module } from '@nestjs/common';
import { ApiMetricsController, HealthCheckController } from '@drt-monorepo/common';
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
