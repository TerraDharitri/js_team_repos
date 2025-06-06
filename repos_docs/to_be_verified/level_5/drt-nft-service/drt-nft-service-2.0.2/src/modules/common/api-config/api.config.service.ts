import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drtConfig } from 'src/config';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  getElasticUrl(): string {
    return this.getGenericConfig<string>('NUMBAT_ELASTICSEARCH');
  }
  private getGenericConfig<T>(path: string, alias?: string): T {
    const value = this.configService.get<T>(path);
    if (!value) {
      throw new Error(`No '${alias || path}' config present`);
    }
    return value;
  }

  getMongoDbUrl(): string {
    return this.getGenericConfig<string>('NFT_TRAIT_SUMMARIES_DB_URL');
  }

  getRedisUrl(): string {
    const redisUrl = this.getGenericConfig<string>('REDIS_URL');
    if (!redisUrl) {
      throw new Error('No redis url present');
    }

    return redisUrl;
  }

  getRedisPort(): number {
    return this.getGenericConfig<number>('REDIS_PORT');
  }

  getMongoDbName(): string {
    return this.getGenericConfig<string>('NFT_TRAIT_SUMMARIES_DB_DATABASE');
  }

  getMongoDbUsername(): string {
    return this.getGenericConfig<string>('NFT_TRAIT_SUMMARIES_DB_USERNAME');
  }

  getMongoDbPassword(): string {
    return this.getGenericConfig<string>('NFT_TRAIT_SUMMARIES_DB_PASSWORD');
  }

  isReindexMarketplaceEventsFlagActive(): boolean {
    return (
      this.getGenericConfig<string>('ENABLE_MARKETPLACE_EVENTS') === 'true'
    );
  }

  getApiUrl(): string {
    return this.getGenericConfig<string>('NUMBAT_API');
  }

  getToolsUrl(): string {
    return this.getGenericConfig<string>('NUMBAT_TOOLS');
  }

  getKeepAliveTimeoutDownstream(): number {
    return parseInt(
      this.getGenericConfig<string>('KEEPALIVE_TIMEOUT_DOWNSTREAM'),
    );
  }

  getSecurityAdmins(): string[] {
    return this.getGenericConfig<string[]>('ADMINS');
  }

  getJwtSecret(): string {
    return this.getGenericConfig<string>('JWT_SECRET_KEY');
  }

  getNativeAuthMaxExpirySeconds(): number {
    const maxExpiry = this.configService.get<string>(
      'NATIVE_AUTH_MAX_EXPIRY_SECONDS',
    );
    if (!maxExpiry) {
      throw new Error('No native auth max expiry in seconds present');
    }
    return parseInt(maxExpiry);
  }

  getNativeAuthAcceptedOrigins(): string[] {
    const origins = this.configService.get<string>(
      'NATIVE_AUTH_ACCEPTED_ORIGINS',
    );
    if (!origins) {
      throw new Error('No accepted origins present');
    }

    return origins.split(',');
  }

  getExtrasApiUrl(): string {
    return this.getGenericConfig<string>('DRT_EXTRAS_API');
  }

  getRateLimiterSecret(): string | undefined {
    return this.configService.get<string>('rateLimiterSecret');
  }

  getUseKeepAliveAgentFlag(): boolean {
    return drtConfig.keepAlive ?? true;
  }

  getAxiosTimeout(): number {
    return (
      this.getGenericConfig<number>('KEEPALIVE_TIMEOUT_DOWNSTREAM') ?? 61000
    );
  }

  getServerTimeout(): number {
    return this.getGenericConfig<number>('KEEPALIVE_TIMEOUT_UPSTREAM') ?? 60000;
  }
}
