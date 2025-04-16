import { ApiConfigService } from '@libs/common';
import { Injectable } from '@nestjs/common';
import { OriginLogger } from '@terradharitri/sdk-nestjs-common';
import fs from 'fs';
import { ProviderLockedRewaInfo } from '../../../../common/entities/provider.locked.rewa.info';

@Injectable()
export class JsonExporterService {
  private readonly logger = new OriginLogger(JsonExporterService.name);

  constructor(
    private readonly apiConfigService: ApiConfigService,
  ) {}

  exportJson(users: Record<string, ProviderLockedRewaInfo[]>) {
    if (!this.apiConfigService.isJsonExportEnabled()) {
      return;
    }

    try {
      fs.writeFileSync(this.apiConfigService.getJsonExportPath(), JSON.stringify(users));
      // file written successfully
    } catch (err) {
      this.logger.error(`Error while exporting the user's liquid stake to file: ${err}`);
    }
  }
}
