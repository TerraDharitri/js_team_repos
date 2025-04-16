import { Controller, Logger } from '@nestjs/common';
import { CachingService } from '@terradharitri/sdk-nestjs';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class PubSubListenerController {
  private logger: Logger;
  constructor(private readonly cachingService: CachingService) {
    this.logger = new Logger(PubSubListenerController.name);
  }

  @EventPattern('deleteCacheKeys')
  async deleteCacheKey(keys: string[]) {
    for (const key of keys) {
      this.logger.log(`Deleting local cache key ${key}`);
      await this.cachingService.deleteInCacheLocal(key);
    }
  }

  @EventPattern('refreshCacheKey')
  async refreshCacheKey(@Payload() event: { key: string; ttl: number }) {
    this.logger.log(
      `Refreshing local cache key ${event.key} with ttl ${event.ttl}`,
    );
    await this.cachingService.refreshCacheLocal(event.key, event.ttl);
  }
}
