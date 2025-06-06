import { forwardRef, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule, ApiModule } from '@drt-monorepo/common';
import { ContractsModule } from '@drt-monorepo/common/contracts/contracts.module';
import { MessageApprovedProcessorService } from './message-approved.processor.service';

@Module({
  imports: [ScheduleModule.forRoot(), DatabaseModule, ContractsModule, forwardRef(() => ApiModule)],
  providers: [MessageApprovedProcessorService],
})
export class MessageApprovedProcessorModule {}
