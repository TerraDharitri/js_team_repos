// TODO add configs
import { DrtnestConfigService } from '@terradharitri/sdk-nestjs-common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SdkNestJsConfigServiceImpl implements DrtnestConfigService {
  getSecurityAdmins(): string[] {
    return [];
    // return this.apiConfig.getNativeAuthAdmins().map((admin) => admin.address);
  }

  getJwtSecret(): string {
    return '';
  }

  getApiUrl(): string {
    return '';
    // return this.apiConfig.getDharitriApiUrl();
  }

  getNativeAuthMaxExpirySeconds(): number {
    return 0;
    // return this.apiConfig.getNativeAuthMaxExpirySeconds();
  }

  getNativeAuthAcceptedOrigins(): string[] {
    return [];
    // return this.apiConfig.getNativeAuthAcceptedOrigins();
  }
}
