import { Injectable } from "@nestjs/common";
import { Token } from "./entities";
import { ApiService } from "@terradharitri/sdk-nestjs-http";
import { ApiConfigService, CacheInfo } from "@drt-monorepo/common";
import { OriginLogger } from "@terradharitri/sdk-nestjs-common";
import { CacheService } from "@terradharitri/sdk-nestjs-cache";

@Injectable()
export class ApiService {
  private readonly logger = new OriginLogger(ApiService.name);

  constructor(
    private readonly apiConfigService: ApiConfigService,
    private readonly apiService: ApiService,
    private readonly cacheService: CacheService,
  ) { }

  public async getToken(identifier: string): Promise<Token | null> {
    return await this.cacheService.getOrSet(
      CacheInfo.Token(identifier).key,
      async () => await this.getTokenRaw(identifier),
      CacheInfo.Token(identifier).ttl,
    );
  }

  public async getTokenRaw(identifier: string): Promise<Token | null> {
    try {
      const { data } = await this.apiService.get(`${this.apiConfigService.getApiUrl()}/tokens/${identifier}`);
      return data as Token;
    } catch (error: any) {
      if (error?.status === 404) {
        return null;
      }

      this.logger.error(`Failed to get token with identifier: ${identifier}`);
      this.logger.error(error);

      throw error;
    }
  }

  public async getContractDeployInfo(address: string): Promise<{ deployTxHash?: string, deployedAt?: number }> {
    return await this.cacheService.getOrSet(
      CacheInfo.ContractDeployInfo(address).key,
      async () => await this.getContractDeployInfoRaw(address),
      CacheInfo.ContractDeployInfo(address).ttl,
    );
  }

  private async getContractDeployInfoRaw(address: string): Promise<{ deployTxHash?: string, deployedAt?: number }> {
    try {
      const { data } = await this.apiService.get(`${this.apiConfigService.getApiUrl()}/accounts/${address}/?fields=deployTxHash,deployedAt`);
      return data;
    } catch (error: any) {
      this.logger.error(`Failed to get contract deploy info with address: ${address}`);
      this.logger.error(error);

      return {};
    }
  }
}
