import { Module } from '@nestjs/common';
import { PairModule } from 'src/modules/pair/pair.module';
import { ProxyPairAbiService } from './proxy.pair.abi.service';
import { ProxyPairTransactionsService } from './proxy.pair.transactions.service';
import { DRTCommunicationModule } from 'src/services/TerraDharitri-communication/drt.communication.module';
import { WrappingModule } from 'src/modules/wrapping/wrap.module';
import { TokenModule } from 'src/modules/tokens/token.module';
import { CommonAppModule } from 'src/common.app.module';
import { ProxyModuleV2 } from '../../v2/proxy.v2.module';

@Module({
    imports: [
        CommonAppModule,
        DRTCommunicationModule,
        PairModule,
        WrappingModule,
        TokenModule,
        ProxyModuleV2,
    ],
    providers: [ProxyPairAbiService, ProxyPairTransactionsService],
    exports: [ProxyPairAbiService, ProxyPairTransactionsService],
})
export class ProxyPairModule {}
