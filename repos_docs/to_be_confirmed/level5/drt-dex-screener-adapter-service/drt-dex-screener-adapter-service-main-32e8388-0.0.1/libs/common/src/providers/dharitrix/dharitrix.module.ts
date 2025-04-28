import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "@mvx-monorepo/common";
import { DharitrixService } from "./dharitrix.service";
import { IndexerModule } from "../../services/indexer";
import { ApiModule } from "../../services/dharitri.api";

@Module({})
export class DharitrixModule {
  static forRoot(configuration: () => Record<string, any>) {
    return {
      module: DharitrixModule,
      imports: [
        DynamicModuleUtils.getApiModule(configuration),
        DynamicModuleUtils.getCachingModule(configuration),
        IndexerModule.forRoot(configuration),
        ApiModule.forRoot(configuration),
      ],
      providers: [
        DharitrixService,
      ],
      exports: [
        DharitrixService,
      ],
    };
  }
}
