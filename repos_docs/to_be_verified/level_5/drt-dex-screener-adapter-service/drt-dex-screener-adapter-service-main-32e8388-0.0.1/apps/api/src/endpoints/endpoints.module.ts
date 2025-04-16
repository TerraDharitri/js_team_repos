import { ApiConfigModule, DynamicModuleUtils } from "@mvx-monorepo/common";
import { Module } from "@nestjs/common";
import { DataIntegrationModule } from "./data-integration";
import configuration from "../../config/configuration";

@Module({
  imports: [
    ApiConfigModule.forRoot(configuration),
    DataIntegrationModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
})
export class EndpointsModule { }
