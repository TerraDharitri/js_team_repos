import * as dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config({
  path: resolve(process.cwd(), '.env'),
});
import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ApiConfigService } from '@drt-monorepo/common';
import { PrivateAppModule } from './private.app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PubSubListenerModule } from '@drt-monorepo/common';
import { LoggerInitializer } from '@terradharitri/sdk-nestjs-common';

import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/array.extensions';
import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/date.extensions';
import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/number.extensions';
import '@terradharitri/sdk-nestjs-common/lib/utils/extensions/string.extensions';
import configuration from '../config/configuration';
import { OfflineJobsAppModule } from './offline-jobs.app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrapper');

  LoggerInitializer.initialize(logger);

  const offlineJobsApp = await NestFactory.create(OfflineJobsAppModule);
  const apiConfigService = offlineJobsApp.get<ApiConfigService>(ApiConfigService);

  await offlineJobsApp.listen(apiConfigService.getOfflineJobsFeaturePort());

  const privateApp = await NestFactory.create(PrivateAppModule);
  await privateApp.listen(apiConfigService.getPrivateApiFeaturePort());

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

  logger.log(`Cache Warmer WORKER active on port ${apiConfigService.getOfflineJobsFeaturePort()}`);
  logger.log(`Private API active on port ${apiConfigService.getPrivateApiFeaturePort()}`);

}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
