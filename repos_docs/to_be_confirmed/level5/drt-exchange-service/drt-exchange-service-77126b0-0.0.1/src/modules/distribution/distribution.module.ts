import { Module } from '@nestjs/common';
import { ContextModule } from '../../services/context/context.module';
import { DistributionAbiService } from './services/distribution.abi.service';
import { DistributionResolver } from './distribution.resolver';
import { DistributionTransactionsService } from './services/distribution.transactions.service';
import { DRTCommunicationModule } from '../../services/dharitri-communication/drt.communication.module';

@Module({
    imports: [ContextModule, DRTCommunicationModule],
    providers: [
        DistributionAbiService,
        DistributionTransactionsService,
        DistributionResolver,
    ],
})
export class DistributionModule {}
