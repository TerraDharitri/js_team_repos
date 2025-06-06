import { RedisCacheModuleOptions } from '@terradharitri/sdk-nestjs-cache';
import {
    ElasticModule,
    ElasticModuleOptions,
} from '@terradharitri/sdk-nestjs-elastic';
import { ApiModule, ApiModuleOptions } from '@terradharitri/sdk-nestjs-http';
import { DynamicModule } from '@nestjs/common';
import { CommonAppModule } from 'src/common.app.module';
import { drtConfig } from 'src/config';
import { ApiConfigService } from 'src/helpers/api.config.service';
import { CacheModule } from 'src/services/caching/cache.module';

export class DynamicModuleUtils {
    static getCacheModule(): DynamicModule {
        return CacheModule.forRootAsync({
            imports: [CommonAppModule],
            inject: [ApiConfigService],
            useFactory: (configService: ApiConfigService) =>
                new RedisCacheModuleOptions({
                    host: configService.getRedisUrl(),
                    port: configService.getRedisPort(),
                    password: configService.getRedisPassword(),
                    enableAutoPipelining: true,
                }),
        });
    }

    static getElasticModule(): DynamicModule {
        return ElasticModule.forRootAsync({
            imports: [CommonAppModule],
            inject: [ApiConfigService],
            useFactory: (configService: ApiConfigService) =>
                new ElasticModuleOptions({
                    url: configService.getElasticSearchUrl(),
                }),
        });
    }

    static getApiModule(): DynamicModule {
        return ApiModule.forRootAsync({
            imports: [CommonAppModule],
            inject: [ApiConfigService],
            useFactory: (configService: ApiConfigService) =>
                new ApiModuleOptions({
                    axiosTimeout:
                        configService.getKeepAliveTimeoutDownstream() ?? 61000,
                    rateLimiterSecret:
                        configService.getRateLimiterSecret() ?? '',
                    serverTimeout:
                        configService.getKeepAliveTimeoutDownstream() ?? 60000,
                    useKeepAliveAgent: drtConfig.keepAlive,
                }),
        });
    }
}
