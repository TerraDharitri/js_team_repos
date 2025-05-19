import { Module } from "@nestjs/common";
import { DataIntegrationService } from "./data-integration.service";
import { DataIntegrationController } from "./data-integration.controller";
import { IndexerModule, ApiModule, DharitrixModule } from "@drt-monorepo/common";
import configuration from "../../../config/configuration";
import { OneDexModule } from "@drt-monorepo/common/providers";

@Module({
  imports: [
    IndexerModule.forRoot(configuration),
    ApiModule.forRoot(configuration),
    DharitrixModule.forRoot(configuration),
    OneDexModule.forRoot(configuration),
  ],
  providers: [
    DataIntegrationService,
  ],
  controllers: [
    DataIntegrationController,
  ],
})
export class DataIntegrationModule { }
