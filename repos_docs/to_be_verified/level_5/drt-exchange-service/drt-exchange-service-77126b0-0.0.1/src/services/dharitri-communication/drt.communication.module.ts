import { Module } from '@nestjs/common';
import { ApiConfigService } from 'src/helpers/api.config.service';
import { MXApiService } from './drt.api.service';
import { MXDataApiService } from './drt.data.api.service';
import { DRTGatewayService } from './drt.gateway.service';
import { DRTProxyService } from './drt.proxy.service';
import { DynamicModuleUtils } from 'src/utils/dynamic.module.utils';

@Module({
    imports: [DynamicModuleUtils.getCacheModule()],
    providers: [
        DRTProxyService,
        MXApiService,
        DRTGatewayService,
        MXDataApiService,
        ApiConfigService,
    ],
    exports: [
        DRTProxyService,
        MXApiService,
        DRTGatewayService,
        MXDataApiService,
        ApiConfigService,
    ],
})
export class MXCommunicationModule {}
