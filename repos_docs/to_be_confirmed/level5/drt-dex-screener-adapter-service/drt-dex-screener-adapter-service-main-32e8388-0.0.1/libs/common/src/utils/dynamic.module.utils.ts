import { DRTNEST_CONFIG_SERVICE } from "@terradharitri/sdk-nestjs-common";
import { ElasticModule, ElasticModuleOptions } from "@terradharitri/sdk-nestjs-elastic";
import { CacheModule, RedisCacheModuleOptions } from "@terradharitri/sdk-nestjs-cache";
import { DynamicModule, Provider } from "@nestjs/common";
import { ClientOptions, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { ApiConfigModule, ApiConfigService, SdkNestjsConfigServiceImpl } from "../config";
import { ApiModule, ApiModuleOptions } from "@terradharitri/sdk-nestjs-http";

export class DynamicModuleUtils {
  static getElasticModule(configuration: () => Record<string, any>): DynamicModule {
    return ElasticModule.forRootAsync({
      imports: [ApiConfigModule.forRoot(configuration)],
      useFactory: (apiConfigService: ApiConfigService) => new ElasticModuleOptions({
        url: apiConfigService.getElasticUrl(),
        customValuePrefix: 'api',
      }),
      inject: [ApiConfigService],
    });
  }

  static getCachingModule(configuration: () => Record<string, any>): DynamicModule {
    return CacheModule.forRootAsync({
      imports: [ApiConfigModule.forRoot(configuration)],
      useFactory: (apiConfigService: ApiConfigService) => new RedisCacheModuleOptions({
        host: apiConfigService.getRedisUrl(),
      }, {
        poolLimit: apiConfigService.getPoolLimit(),
        processTtl: apiConfigService.getProcessTtl(),
      }),
      inject: [ApiConfigService],
    });
  }

  static getApiModule(configuration: () => Record<string, any>): DynamicModule {
    return ApiModule.forRootAsync({
      imports: [ApiConfigModule.forRoot(configuration)],
      useFactory: (apiConfigService: ApiConfigService) => new ApiModuleOptions({
        axiosTimeout: apiConfigService.getAxiosTimeout(),
        rateLimiterSecret: apiConfigService.getRateLimiterSecret(),
        serverTimeout: apiConfigService.getServerTimeout(),
        useKeepAliveAgent: apiConfigService.getUseKeepAliveAgentFlag(),
      }),
      inject: [ApiConfigService],
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
      useFactory: (apiConfigService: ApiConfigService) => {
        const clientOptions: ClientOptions = {
          transport: Transport.REDIS,
          options: {
            host: apiConfigService.getRedisUrl(),
            port: 6379,
            retryDelay: 1000,
            retryAttempts: 10,
            retryStrategy: () => 1000,
          },
        };

        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ApiConfigService],
    };
  }
}
