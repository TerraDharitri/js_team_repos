import { Module } from '@nestjs/common';
import { ApiMetricsModule, DynamicModuleUtils } from '@mvx-monorepo/common';
import { LoggingModule } from '@terradharitri/sdk-nestjs-common';
import { EndpointsModule } from './endpoints';

@Module({
  imports: [
    LoggingModule,
    ApiMetricsModule,
    EndpointsModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
  exports: [
  ],
})
export class PublicAppModule { }
