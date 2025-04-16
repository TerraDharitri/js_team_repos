import { CacheInfo } from "@libs/common";
import { CacheService } from "@terradharitri/sdk-nestjs-cache";
import { Injectable } from "@nestjs/common";
import BigNumber from "bignumber.js";
import axios from 'axios';
import moment from "moment";
import { AppConfigService } from "apps/events-processor/src/config/app-config.service";
import { OriginLogger } from "@terradharitri/sdk-nestjs-common";

interface TokenPrice {
    name: string;
    identifier: string,
    price: BigNumber,
    date: moment.Moment
}

@Injectable()
export class DataService {
    private readonly logger = new OriginLogger(DataService.name);

    constructor(
        private readonly cachingService: CacheService,
        private readonly appConfigService: AppConfigService,
    ) { }

    async getTokenPrice(tokenId: string, date: moment.Moment, market?: string): Promise<BigNumber> {
        return await this.cachingService.getOrSet(
            CacheInfo.TokenPrice(tokenId, date).key,
            async () => await this.getTokenPriceRaw(tokenId, date, market),
            CacheInfo.TokenPrice(tokenId, date).ttl
        );
    }

    async getTokenPriceRaw(tokenId: string, date: moment.Moment, market?: string): Promise<BigNumber> {
        try {
            if (market) {
                switch (market) {
                    case 'hatom':
                        return (await axios.get<TokenPrice>(`${this.appConfigService.getDataApiHatomUrl()}/${tokenId}?date=${date.format('YYYY-MM-DD')}`)).data.price;
                    case 'xexchange':
                        return (await axios.get<TokenPrice>(`${this.appConfigService.getDataApiXexchangeUrl()}/${tokenId}?date=${date.format('YYYY-MM-DD')}`)).data.price;
                    case 'cex':
                        return (await axios.get<TokenPrice>(`${this.appConfigService.getDataApiCexUrl()}/${tokenId}?date=${date.format('YYYY-MM-DD')}`)).data.price;
                    default:
                        throw Error('Invalid market !');
                }
            }

            if (tokenId.startsWith('USD')) {
                return (await axios.get<TokenPrice>(`${this.appConfigService.getDataApiCexUrl()}/${tokenId}?date=${date.format('YYYY-MM-DD')}`)).data.price;
            }
            return (await axios.get<TokenPrice>(`${this.appConfigService.getDataApiXexchangeUrl()}/${tokenId}?date=${date.format('YYYY-MM-DD')}`)).data.price;
        }
        catch (error) {
            this.logger.error(error);
            return new BigNumber(0);
        }
    }

    async getTokenPrecision(tokenId: string): Promise<number> {
        return await this.cachingService.getOrSet(
            CacheInfo.TokenPrecision(tokenId).key,
            async () => await this.getTokenPrecisionRaw(tokenId),
            CacheInfo.TokenPrecision(tokenId).ttl
        );
    }

    async getTokenPrecisionRaw(tokenId: string): Promise<number> {
        try {
            const precision = (await axios.get(`${this.appConfigService.getApiUrl()}/tokens/${tokenId}?fields=decimals`)).data.decimals;
            return precision;
        } catch (error) {
            this.logger.error(error);
            return 18;
        }
    }
}
