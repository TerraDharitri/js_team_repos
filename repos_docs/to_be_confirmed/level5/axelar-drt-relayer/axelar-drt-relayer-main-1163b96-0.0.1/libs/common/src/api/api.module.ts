import { forwardRef, Module } from '@nestjs/common';
import { ApiConfigModule, ApiConfigService, DatabaseModule } from '@drt-monorepo/common';
import { AxelarGmpApi } from '@drt-monorepo/common/api/axelar.gmp.api';
import { ProviderKeys } from '@drt-monorepo/common/utils/provider.enum';
import * as https from 'https';
import { join } from 'path';
import { Client as AxelarGmpApiClient } from '@drt-monorepo/common/api/entities/axelar.gmp.api';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import { Document, OpenAPIClientAxios } from 'openapi-client-axios';
import { SlackApi } from '@drt-monorepo/common/api/slack.api';

@Module({
  imports: [forwardRef(() => DatabaseModule), ApiConfigModule],
  providers: [
    AxelarGmpApi,
    {
      provide: ProviderKeys.AXELAR_GMP_API_CLIENT,
      useFactory: async (apiConfigService: ApiConfigService) => {
        const httpsAgent = new https.Agent({
          cert: apiConfigService.getClientCert(),
          key: apiConfigService.getClientKey(),
        });

        const schema = join(__dirname, '../assets/axelar-gmp-api.schema.yaml');
        const doc = yaml.load(readFileSync(schema, 'utf8')) as Document;

        const api = new OpenAPIClientAxios({
          definition: doc,
          axiosConfigDefaults: {
            httpsAgent,
            timeout: 30_000,
          },
        });
        api.withServer({ url: apiConfigService.getAxelarGmpApiUrl() });

        await api.init();

        return await api.getClient<AxelarGmpApiClient>();
      },
      inject: [ApiConfigService],
    },
    SlackApi,
  ],
  exports: [AxelarGmpApi, SlackApi],
})
export class ApiModule {}
