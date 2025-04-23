import { Injectable, Logger } from '@nestjs/common';
import { drtConfig } from 'src/config';
import { ApiService } from './api.service';
import { ApiConfigService } from 'src/modules/common/api-config/api.config.service';

@Injectable()
export class DrtDataApiService {
  private url: string;

  constructor(
    private readonly logger: Logger,
    private readonly apiConfigService: ApiConfigService,
    private readonly apiService: ApiService,
  ) {
    this.url = this.apiConfigService.getToolsUrl();
  }

  async getCexPrice(timestamp: string): Promise<number> {
    let requestUrl = `${this.url}/v1/quotes/cex/${drtConfig.rewa}?fields=price&date=${timestamp}`;

    try {
      let response = await this.apiService.get(requestUrl);
      return response.data.price;
    } catch (error) {
      this.logger.error(
        `An error occurred while calling the drt data service on url ${requestUrl}`,
        {
          path: this.getCexPrice.name,
          exception: error,
        },
      );
      return;
    }
  }

  async getCexTokens(): Promise<string[]> {
    const requestUrl = `${this.url}/v1/tokens/cex?fields=identifier`;
    try {
      let response = await this.apiService.get(requestUrl);
      return response?.data?.identifier;
    } catch (error) {
      this.logger.error(
        `An error occurred while calling the drt data service on url ${requestUrl}`,
        {
          path: this.getCexTokens.name,
          exception: error,
        },
      );
      return;
    }
  }

  async getDharitriXTokens(): Promise<string[]> {
    const requestUrl = `${this.url}/v1/tokens/DharitriX?fields=identifier`;
    try {
      let response = await this.apiService.get(requestUrl);
      return response?.data?.identifier;
    } catch (error) {
      this.logger.error(
        `An error occurred while calling the drt data service on url ${requestUrl}`,
        {
          path: this.getDharitriXTokens.name,
          exception: error,
        },
      );
      return;
    }
  }

  async getXechangeTokenPrice(
    token: string,
    isoDateOnly: string,
  ): Promise<number> {
    const requestUrl = `${this.url}/v1/quotes/DharitriX/${token}?date=${isoDateOnly}&fields=price`;
    try {
      let response = await this.apiService.get(requestUrl);
      return response.data.price;
    } catch (error) {
      this.logger.error(
        `An error occurred while calling the drt data service on url ${requestUrl}`,
        {
          path: this.getCexPrice.name,
          exception: error,
        },
      );
      return;
    }
  }
}
