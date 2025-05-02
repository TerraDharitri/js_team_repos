import { Module } from '@nestjs/common';
import { DRTCommunicationModule } from 'src/services/dharitri-communication/drt.communication.module';
import { TokenModule } from '../tokens/token.module';
import { MetabondingResolver } from './metabonding.resolver';
import { MetabondingAbiService } from './services/metabonding.abi.service';
import { MetabondingService } from './services/metabonding.service';
import { MetabondingSetterService } from './services/metabonding.setter.service';
import { MetabondingTransactionService } from './services/metabonding.transactions.service';

@Module({
    imports: [DRTCommunicationModule, TokenModule],
    providers: [
        MetabondingService,
        MetabondingAbiService,
        MetabondingSetterService,
        MetabondingTransactionService,
        MetabondingResolver,
    ],
    exports: [MetabondingAbiService, MetabondingSetterService],
})
export class MetabondingModule {}
