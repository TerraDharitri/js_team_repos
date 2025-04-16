import { forwardRef, Module } from '@nestjs/common';
import { ApiConfigModule } from '../api-config/api.config.module';

import { MetricsModule } from '@terradharitri/sdk-nestjs-monitoring';
import { CacheModule } from '@terradharitri/sdk-nestjs-cache';
import { ApiModule } from '@terradharitri/sdk-nestjs-http';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    ApiConfigModule,
    ApiModule,
    forwardRef(() => MetricsModule),
    forwardRef(() => CacheModule),
  ],
  providers: [GatewayService],
  exports: [GatewayService],
})
export class GatewayModule {}
