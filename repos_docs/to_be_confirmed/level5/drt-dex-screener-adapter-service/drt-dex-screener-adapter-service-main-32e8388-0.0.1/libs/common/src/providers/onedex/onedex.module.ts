import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "@drt-monorepo/common";
import { IndexerModule } from "../../services/indexer";
import { ApiModule } from "../../services/dharitri.api";
import { OneDexService } from "./onedex.service";

@Module({})
export class OneDexModule {
  static forRoot(configuration: () => Record<string, any>) {
    return {
      module: OneDexModule,
      imports: [
        DynamicModuleUtils.getApiModule(configuration),
        DynamicModuleUtils.getCachingModule(configuration),
        IndexerModule.forRoot(configuration),
        ApiModule.forRoot(configuration),
      ],
      providers: [
        OneDexService,
      ],
      exports: [
        OneDexService,
      ],
    };
  }
}
