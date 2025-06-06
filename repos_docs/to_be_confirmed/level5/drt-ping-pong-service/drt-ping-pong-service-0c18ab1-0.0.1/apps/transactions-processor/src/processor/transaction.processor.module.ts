import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ApiConfigModule, DynamicModuleUtils } from '@drt-monorepo/common';
import { TransactionProcessorService } from './transaction.processor.service';
import configuration from '../../config/configuration';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ApiConfigModule.forRoot(configuration),
    DynamicModuleUtils.getCachingModule(configuration),
  ],
  providers: [
    DynamicModuleUtils.getPubSubService(),
    TransactionProcessorService,
  ],
})
export class TransactionProcessorModule { }
