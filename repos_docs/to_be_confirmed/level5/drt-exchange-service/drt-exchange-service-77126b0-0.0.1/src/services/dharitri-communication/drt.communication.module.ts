import { Module } from '@nestjs/common';
import { ApiConfigService } from 'src/helpers/api.config.service';
import { DRTApiService } from './drt.api.service';
import { DRTDataApiService } from './drt.data.api.service';
import { DRTGatewayService } from './drt.gateway.service';
import { DRTProxyService } from './drt.proxy.service';
import { DynamicModuleUtils } from 'src/utils/dynamic.module.utils';

@Module({
    imports: [DynamicModuleUtils.getCacheModule()],
    providers: [
        DRTProxyService,
        DRTApiService,
        DRTGatewayService,
        DRTDataApiService,
        ApiConfigService,
    ],
    exports: [
        DRTProxyService,
        DRTApiService,
        DRTGatewayService,
        DRTDataApiService,
        ApiConfigService,
    ],
})
export class DRTCommunicationModule {}
