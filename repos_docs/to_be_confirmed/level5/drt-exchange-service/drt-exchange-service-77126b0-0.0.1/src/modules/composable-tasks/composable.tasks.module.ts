import { Module } from '@nestjs/common';
import { DRTCommunicationModule } from 'src/services/dharitri-communication/drt.communication.module';
import { ComposableTasksTransactionService } from './services/composable.tasks.transaction';
import { ComposableTasksResolver } from './composable.tasks.resolver';
import { WrappingModule } from '../wrapping/wrap.module';

@Module({
    imports: [DRTCommunicationModule, WrappingModule],
    providers: [ComposableTasksTransactionService, ComposableTasksResolver],
    exports: [ComposableTasksTransactionService],
})
export class ComposableTasksModule {}
