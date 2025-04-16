import { ApiConfigService } from '@libs/common';
import { HttpStatus, Injectable } from '@nestjs/common';
import BigNumber from 'bignumber.js';
import { OriginLogger } from '@terradharitri/sdk-nestjs-common';
import { ApiService, ApiSettings } from '@terradharitri/sdk-nestjs-http';
import fs from 'fs';
import path from 'path';
import { ProviderLockedRewaInfo } from '../../../../common/entities/provider.locked.rewa.info';

@Injectable()
export class ElasticIndexerService {
  private readonly logger = new OriginLogger(ElasticIndexerService.name);

  constructor(
    private readonly apiConfigService: ApiConfigService,
    private readonly apiService: ApiService,
  ) { }

  async addLockedRewaForAddress(address: string, epoch: number, lockedRewaInfo: ProviderLockedRewaInfo[]): Promise<void> {
    if (!this.apiConfigService.isElasticExportEnabled()) {
      return;
    }

    const indexName = this.getIndexName(epoch);
    if (!await this.doesIndexExist(indexName)) {
      const successful = await this.createIndexWithMapping(indexName);
      if (!successful) {
        return;
      }
    }

    for (const lockedRewa of lockedRewaInfo) {
      await this.setLockedRewaValues(address, epoch, lockedRewa);
    }
  }

  async isIndexWritable(): Promise<boolean> {
    try {
      const healthCheckStructure = {
        testKey: 'testValue',
      };
      const esScript = `{"doc":${JSON.stringify(healthCheckStructure)}, "upsert": ${JSON.stringify(healthCheckStructure)}}`;
      const resp = await this.apiService.post(`${this.apiConfigService.getElasticUrl()}/healthcheckindex/_update/test`, esScript, this.getApiSettingsForESQueries());
      if (resp && resp.status && resp.status == HttpStatus.FORBIDDEN) {
        return false;
      }
    } catch (error) {
      this.logger.warn(`Elasticsearch is not writable: ${error}`);
      return false;
    }

    return true;
  }

  private async setLockedRewaValues(address: string, epoch: number, providerInfo: ProviderLockedRewaInfo) {
    const indexName = this.getIndexName(epoch);

    const totalLockedRewaStr = providerInfo.lockedRewa.toFixed();
    const totalLockedRewaNum = this.getNumericValueForBigInt(providerInfo.lockedRewa);
    const lockedRewaFields = {
      [`${providerInfo.providerName}_lockedRewa`]: totalLockedRewaStr,
      [`${providerInfo.providerName}_lockedRewaNum`]: totalLockedRewaNum,
    };

    const esScript = `{"doc":${JSON.stringify(lockedRewaFields)}, "upsert": ${JSON.stringify(lockedRewaFields)}}`;
    await this.apiService.post(`${this.apiConfigService.getElasticUrl()}/${indexName}/_update/${address}`, esScript, this.getApiSettingsForESQueries());

    this.logger.log(`Saved record for address ${address} and provider ${providerInfo.providerName}. Liquid staking balance: ${providerInfo.lockedRewa}.`);
  }

  private getIndexName(epoch: number): string {
    return `${this.apiConfigService.getElasticIndexPrefix()}_${epoch}`;
  }

  private getNumericValueForBigInt(bigNumber: BigNumber): number {
    return (parseFloat(bigNumber.dividedBy(1e18).toFixed(10)));
  }

  private async createIndexWithMapping(indexName: string): Promise<boolean> {
    const mapping = this.getIndexMapping();
    if (!mapping) {
      this.logger.error('cannot load mapping from file');
      return false;
    }

    await this.apiService.put(`${this.apiConfigService.getElasticUrl()}/${indexName}`, JSON.parse(mapping), this.getApiSettingsForESQueries());
    return true;
  }

  private async doesIndexExist(indexName: string): Promise<boolean> {
    try {
      const result = await this.apiService.head(`${this.apiConfigService.getElasticUrl()}/${indexName}`);
      return result && result.status && result.status == 200;
    } catch (error) {
      return false;
    }
  }

  private getApiSettingsForESQueries(): ApiSettings {
    const apiSettings = new ApiSettings();
    apiSettings.headers = { 'content-type': 'application/json' };

    return apiSettings;
  }

  private getIndexMapping(): string | undefined {
    const filePath = path.join(__dirname, './mappings/index.mapping.json');
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }

    return undefined;
  }
}
