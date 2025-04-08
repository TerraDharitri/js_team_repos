import { METACHAIN } from "./utils/constants";
import { HttpService } from "./utils/http.service";

export class ShardsMaintainerService {
  private shardIds: number[] | undefined = undefined;

  async get(
    baseUrl: string | undefined,
    timeout: number | undefined,
  ) {
    if (this.shardIds != null) {
      return this.shardIds;
    }

    return this.shardIds = await this.getShards(baseUrl, timeout);
  }

  private async getShards(
    baseUrl: string | undefined,
    timeout: number | undefined,
  ): Promise<number[]> {
    const httpService = new HttpService(baseUrl, timeout);
    const networkConfig = await httpService.get('network/config');
    const shardCount = networkConfig.config.drt_num_shards_without_meta;

    const result = [];
    for (let i = 0; i < shardCount; i++) {
      result.push(i);
    }
    result.push(METACHAIN);

    return result;
  }
}
