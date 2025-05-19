import { Module } from "@nestjs/common";
import { CacheWarmerService } from "./cache-warmer.service";
import { DynamicModuleUtils, ApiModule, DharitrixModule } from "@drt-monorepo/common";
import configuration from "../../../config/configuration";
import { ScheduleModule } from "@nestjs/schedule";
import { OneDexModule } from "@drt-monorepo/common/providers";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DynamicModuleUtils.getCachingModule(configuration),
    DharitrixModule.forRoot(configuration),
    OneDexModule.forRoot(configuration),
    ApiModule.forRoot(configuration),
  ],
  providers: [
    DynamicModuleUtils.getPubSubService(),
    CacheWarmerService,
  ],
  exports: [
    CacheWarmerService,
  ],
})
export class CacheWarmerModule { }
