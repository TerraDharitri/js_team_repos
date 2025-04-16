import { Injectable } from '@nestjs/common';
import { DrtApiService } from 'src/common';
import { CacheInfo } from 'src/common/services/caching/entities/cache.info';
import { drtConfig } from 'src/config';
import { computeUsdAmount } from 'src/utils/helpers';
import { CachingService } from '@terradharitri/sdk-nestjs';
import { Token } from './Token.model';
import { DrtDataApiService } from 'src/common/services/drt-communication/drt-data.service';
import { DateUtils } from 'src/utils/date-utils';

@Injectable()
export class UsdPriceService {
  constructor(
    private readonly cacheService: CachingService,
    private readonly drtApiService: DrtApiService,
    private readonly drtDataApi: DrtDataApiService,
  ) {}

  async getUsdAmountDenom(token: string, amount: string): Promise<string> {
    if (amount === '0') {
      return amount;
    }

    const tokenData = await this.getToken(token);
    if (!tokenData.priceUsd) {
      return;
    }
    return computeUsdAmount(tokenData.priceUsd, amount, tokenData.decimals);
  }

  public async getAllCachedTokens(): Promise<Token[]> {
    return await this.cacheService.getOrSetCache(
      CacheInfo.AllTokens.key,
      async () => await this.setAllCachedTokens(),
      CacheInfo.AllTokens.ttl,
    );
  }

  public async getTokenPriceFromDate(
    token: string,
    timestamp: number,
  ): Promise<number> {
    return await this.cacheService.getOrSetCache(
      `${CacheInfo.TokenHistoricalPrice.key}_${token}_${timestamp}`,
      async () => await this.getTokenHistoricalPrice(token, timestamp),
      CacheInfo.TokenHistoricalPrice.ttl,
    );
  }

  public async getToken(tokenId: string): Promise<Token> {
    if (tokenId === drtConfig.rewa || tokenId === drtConfig.wrewa) {
      return new Token({
        identifier: drtConfig.rewa,
        symbol: drtConfig.rewa,
        name: drtConfig.rewa,
        decimals: drtConfig.decimals,
        priceUsd: await this.getCurrentRewaPrice(),
      });
    }

    const tokens = await this.getAllCachedTokens();
    const token = tokens.find((token) => token.identifier === tokenId);
    if (token) {
      return token;
    }

    return await this.cacheService.getOrSetCache(
      `token_${tokenId}`,
      async () => await this.drtApiService.getTokenData(tokenId),
      CacheInfo.AllTokens.ttl,
    );
  }

  async getTokenPriceUsd(token: string): Promise<string | undefined> {
    if (token === drtConfig.rewa || token === drtConfig.wrewa) {
      return await this.getCurrentRewaPrice();
    }
    return await this.getDcdtPriceUsd(token);
  }

  private async getDcdtPriceUsd(tokenId: string): Promise<string | undefined> {
    const dexTokens = await this.getCachedDexTokens();
    const token = dexTokens.find((token) => token.identifier === tokenId);
    return token?.priceUsd;
  }

  private async setAllCachedTokens(): Promise<Token[]> {
    let [apiTokens, rewaPriceUSD] = await Promise.all([
      this.getCachedApiTokens(),
      this.getCurrentRewaPrice(),
    ]);

    const rewaToken: Token = new Token({
      identifier: drtConfig.rewa,
      symbol: drtConfig.rewa,
      name: drtConfig.rewa,
      decimals: drtConfig.decimals,
      priceUsd: rewaPriceUSD,
    });
    return apiTokens.concat([rewaToken]);
  }

  private async getTokenHistoricalPrice(
    tokenId: string,
    timestamp: number,
  ): Promise<number> {
    let [cexTokens, DharitriXTokens] = await Promise.all([
      this.getCexTokens(),
      this.getDharitriXTokens(),
    ]);

    if (cexTokens.includes(tokenId)) {
      {
        return await this.drtDataApi.getCexPrice(
          DateUtils.timestampToIsoStringWithoutTime(timestamp),
        );
      }
    } else if (DharitriXTokens.includes(tokenId)) {
      return await this.drtDataApi.getXechangeTokenPrice(
        tokenId,
        DateUtils.timestampToIsoStringWithoutTime(timestamp),
      );
    }
  }

  private async getCachedDexTokens(): Promise<Token[]> {
    return await this.cacheService.getOrSetCache(
      CacheInfo.AllDexTokens.key,
      async () => await this.drtApiService.getAllDexTokens(),
      CacheInfo.AllDexTokens.ttl,
    );
  }

  private async getCachedApiTokens(): Promise<Token[]> {
    return await this.cacheService.getOrSetCache(
      CacheInfo.AllApiTokens.key,
      async () => await this.drtApiService.getAllTokens(),
      CacheInfo.AllApiTokens.ttl,
    );
  }

  private async getCurrentRewaPrice(): Promise<string> {
    return await this.cacheService.getOrSetCache(
      CacheInfo.RewaToken.key,
      async () => await this.drtApiService.getRewaPriceFromEconomics(),
      CacheInfo.RewaToken.ttl,
    );
  }

  private async getCexTokens(): Promise<string[]> {
    return await this.cacheService.getOrSetCache(
      CacheInfo.CexTokens.key,
      async () => await this.drtDataApi.getCexTokens(),
      CacheInfo.CexTokens.ttl,
    );
  }

  private async getDharitriXTokens(): Promise<string[]> {
    return await this.cacheService.getOrSetCache(
      CacheInfo.DharitriXTokens.key,
      async () => await this.drtDataApi.getDharitriXTokens(),
      CacheInfo.DharitriXTokens.ttl,
    );
  }
}
