import 'module-alias/register';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { join } from 'path';
import { ApiConfigService, SdkNestjsConfigServiceImpl } from '@drt-monorepo/common';
import { PrivateAppModule } from './private.app.module';
import { PublicAppModule } from './public.app.module';
import * as bodyParser from 'body-parser';
import { Logger, NestInterceptor } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import cookieParser from 'cookie-parser';
import { PubSubListenerModule } from '@drt-monorepo/common';
import { LoggingInterceptor, MetricsService } from '@terradharitri/sdk-nestjs-monitoring';
import { NativeAuthGuard } from '@terradharitri/sdk-nestjs-auth';
import { LoggerInitializer } from '@terradharitri/sdk-nestjs-common';
import { CacheService, CachingInterceptor } from '@terradharitri/sdk-nestjs-cache';

import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/array.extensions';
import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/date.extensions';
import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/number.extensions';
import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/string.extensions';
import configuration from '../config/configuration';

async function bootstrap() {
  const publicApp = await NestFactory.create(PublicAppModule);
  publicApp.use(bodyParser.json({ limit: '1mb' }));
  publicApp.enableCors();
  publicApp.useLogger(publicApp.get(WINSTON_MODULE_NEST_PROVIDER));
  publicApp.use(cookieParser());

  const apiConfigService = publicApp.get<ApiConfigService>(ApiConfigService);
  const cachingService = publicApp.get<CacheService>(CacheService);
  const metricsService = publicApp.get<MetricsService>(MetricsService);
  const httpAdapterHostService = publicApp.get<HttpAdapterHost>(HttpAdapterHost);

  if (apiConfigService.getIsAuthActive()) {
    publicApp.useGlobalGuards(new NativeAuthGuard(new SdkNestjsConfigServiceImpl(apiConfigService), cachingService));
  }

  const httpServer = httpAdapterHostService.httpAdapter.getHttpServer();
  httpServer.keepAliveTimeout = apiConfigService.getServerTimeout();
  httpServer.headersTimeout = apiConfigService.getHeadersTimeout(); //`keepAliveTimeout + server's expected response time`

  const globalInterceptors: NestInterceptor[] = [];
  globalInterceptors.push(new LoggingInterceptor(metricsService));

  if (apiConfigService.getUseCachingInterceptor()) {
    const cachingInterceptor = new CachingInterceptor(
      cachingService,
      httpAdapterHostService,
      metricsService,
    );

    globalInterceptors.push(cachingInterceptor);
  }

  publicApp.useGlobalInterceptors(...globalInterceptors);

  const description = readFileSync(join(__dirname, '..', 'docs', 'swagger.md'), 'utf8');

  const documentBuilder = new DocumentBuilder()
    .setTitle('Dharitri Microservice API')
    .setDescription(description)
    .setVersion('1.0.0')
    .setExternalDoc('Dharitri Docs', 'https://docs.dharitri.org')
    .addBearerAuth();

  const config = documentBuilder.build();

  const document = SwaggerModule.createDocument(publicApp, config);
  SwaggerModule.setup('', publicApp, document);

  if (apiConfigService.getIsPublicApiFeatureActive()) {
    await publicApp.listen(apiConfigService.getPublicApiFeaturePort());
  }

  if (apiConfigService.getIsPrivateApiFeatureActive()) {
    const privateApp = await NestFactory.create(PrivateAppModule);
    await privateApp.listen(apiConfigService.getPrivateApiFeaturePort());
  }

  const logger = new Logger('Bootstrapper');

  LoggerInitializer.initialize(logger);

  const pubSubApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    PubSubListenerModule.forRoot(configuration),
    {
      transport: Transport.REDIS,
      options: {
        host: apiConfigService.getRedisUrl(),
        port: 6379,
        retryAttempts: 100,
        retryDelay: 1000,
        retryStrategy: () => 1000,
      },
    },
  );
  pubSubApp.useLogger(pubSubApp.get(WINSTON_MODULE_NEST_PROVIDER));
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  pubSubApp.listen();

  logger.log(`Public API active: ${apiConfigService.getIsPublicApiFeatureActive()}`);
  logger.log(`Private API active: ${apiConfigService.getIsPrivateApiFeatureActive()}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
