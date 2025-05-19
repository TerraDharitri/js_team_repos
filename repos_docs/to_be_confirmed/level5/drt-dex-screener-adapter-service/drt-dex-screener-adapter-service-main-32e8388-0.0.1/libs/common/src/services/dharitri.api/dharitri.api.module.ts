import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "@drt-monorepo/common";
import { ApiService } from "./dharitri.api.service";

@Module({})
export class ApiModule {
  static forRoot(configuration: () => Record<string, any>) {
    return {
      module: ApiModule,
      imports: [
        DynamicModuleUtils.getApiModule(configuration),
        DynamicModuleUtils.getCachingModule(configuration),
      ],
      providers: [
        ApiService,
      ],
      exports: [
        ApiService,
      ],
    };
  }
}
