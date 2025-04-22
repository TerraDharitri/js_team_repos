import { Module } from '@nestjs/common';
import { FaucetController } from './faucet.controller';
import { CacheModule } from '@terradharitri/sdk-nestjs-cache';
import { CommonConfigModule, DynamicModuleUtils } from '@libs/common';
import { FaucetService } from './faucet.service';
import { ApiModule } from '@terradharitri/sdk-nestjs-http';
import { NativeAuthGuard } from '@terradharitri/sdk-nestjs-auth';
import { AppConfigModule } from '../../config/app-config.module';

@Module({
  imports: [
    ApiModule,
    CacheModule,
    AppConfigModule,
    CommonConfigModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
    NativeAuthGuard,
    FaucetService,
  ],
  controllers: [
    FaucetController,
  ],
  exports: [
    FaucetService,
  ],
})

export class FaucetModule {}
