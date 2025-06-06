import { DRTNEST_CONFIG_SERVICE } from "@terradharitri/sdk-nestjs-common";
import { CacheModule, RedisCacheModuleOptions } from "@terradharitri/sdk-nestjs-cache";
import { DynamicModule, Provider } from "@nestjs/common";
import { ClientOptions, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CommonConfigModule, CommonConfigService, SdkNestjsConfigServiceImpl } from "../config";
import { ApiModule, ApiModuleOptions } from '@terradharitri/sdk-nestjs-http';

export class DynamicModuleUtils {
  static getCachingModule(): DynamicModule {
    return CacheModule.forRootAsync({
      imports: [CommonConfigModule],
      useFactory: (configService: CommonConfigService) => new RedisCacheModuleOptions({
        host: configService.config.redis.host,
        port: configService.config.redis.port,
      }, {
        poolLimit: 100,
        processTtl: 60,
      }),
      inject: [CommonConfigService],
    });
  }

  static getNestJsApiConfigService(): Provider {
    return {
      provide: DRTNEST_CONFIG_SERVICE,
      useClass: SdkNestjsConfigServiceImpl,
    };
  }

  static getPubSubService(): Provider {
    return {
      provide: 'PUBSUB_SERVICE',
      useFactory: (configService: CommonConfigService) => {
        const clientOptions: ClientOptions = {
          transport: Transport.REDIS,
          options: {
            host: configService.config.redis.host,
            port: configService.config.redis.port,
            retryDelay: 1000,
            retryAttempts: 10,
            retryStrategy: () => 1000,
          },
        };

        return ClientProxyFactory.create(clientOptions);
      },
      inject: [CommonConfigService],
    };
  }

  static getApiModule(): DynamicModule {
    return ApiModule.forRootAsync({
      imports: [CommonConfigModule],
      useFactory: (commonConfigService: CommonConfigService) =>
        new ApiModuleOptions({
          axiosTimeout: commonConfigService.config.keepAliveTimeout.downstream ?? 61000,
          rateLimiterSecret: commonConfigService.config.rateLimiterSecret,
          serverTimeout: commonConfigService.config.keepAliveTimeout.downstream ?? 60000,
          useKeepAliveAgent: commonConfigService.config.features.keepAliveAgent.enabled,
        }),
      inject: [CommonConfigService],
    });
  }
}
