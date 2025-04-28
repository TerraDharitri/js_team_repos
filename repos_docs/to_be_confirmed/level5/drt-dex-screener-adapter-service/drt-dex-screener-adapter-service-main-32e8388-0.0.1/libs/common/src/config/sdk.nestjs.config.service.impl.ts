import { Injectable } from "@nestjs/common";
import { DrtnestConfigService } from "@terradharitri/sdk-nestjs-common";

@Injectable()
export class SdkNestjsConfigServiceImpl implements DrtnestConfigService {
  getSecurityAdmins(): string[] {
    return [];
  }

  getJwtSecret(): string {
    return '';
  }

  getApiUrl(): string {
    return '';
  }

  getNativeAuthMaxExpirySeconds(): number {
    return 0;
  }

  getNativeAuthAcceptedOrigins(): string[] {
    return [];
  }
}
