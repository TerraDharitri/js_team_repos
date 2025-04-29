import { numbatConfig } from '../../../config';
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '../http';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getHttpAgent, getHttpsAgent } from '../../../utils/http';
import { ApiNetworkStake } from './models/network-stake.dto';
import { ApiValidatorAuctionNode, ApiValidatorAuctionResponse } from './models/validator-auction.dto';

@Injectable()
export class NumbatApiService {
  private readonly httpAgent = getHttpAgent(parseInt(process.env.KEEPALIVE_TIMEOUT_DOWNSTREAM));
  private readonly httspAgent = getHttpsAgent(parseInt(process.env.KEEPALIVE_TIMEOUT_DOWNSTREAM));
  private readonly logger = new Logger(NumbatApiService.name);
  constructor(
    private readonly httpService: HttpService
  ) { }

  private getConfig = (): AxiosRequestConfig => {
    return {
      baseURL: numbatConfig.numbatApi,
      timeout: parseInt(process.env.KEEPALIVE_TIMEOUT_DOWNSTREAM),
      httpAgent: this.httpAgent,
      httpsAgent: this.httspAgent,
    };
  };

  async getNetworkStake(): Promise<ApiNetworkStake | undefined> {
    const response = await this.get<ApiNetworkStake>(`stake`);

    const data = response.data;
    if (data == null) {
      return;
    }

    return data;
  }

  async getValidatorUnqualifiedNodes(provider: string): Promise<ApiValidatorAuctionNode[]> {
    const response = await this.get<ApiValidatorAuctionResponse>(`validator/auction`);

    const data = response.data;
    if (data == null) {
      return [];
    }

    const auctionList = data.data.auctionList;
    if (auctionList == null || auctionList.length === 0) {
      return [];
    }

    const providerNodes = auctionList.find(auction => auction.owner === provider)?.nodes;
    if (!providerNodes) {
      return [];
    }

    const unqualifiedNodes = providerNodes.filter(node => !node.qualified);

    return unqualifiedNodes;
  }

  private async get<T = never, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R | undefined> {
    try {
      return await this.httpService.get(
        url,
        {
          ...this.getConfig(),
          ...config,
        }
      );
    } catch (error) {
      this.logger.error('Error fetching data from Numbat API', {
        url,
        path: 'numbat-api.service.get',
        error,
      });
      return;
    }
  }


}
