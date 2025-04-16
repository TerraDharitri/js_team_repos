import { forwardRef, Module } from '@nestjs/common';
import { PrimarySaleResolver } from './primary-sale.resolver';
import { DrtCommunicationModule } from 'src/common/services/drt-communication/drt-communication.module';
import { PrimarySaleService } from './primary-sale.service';
import { CommonModule } from 'src/common.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [PrimarySaleService, PrimarySaleResolver],
  imports: [
    forwardRef(() => DrtCommunicationModule),
    forwardRef(() => CommonModule),
    forwardRef(() => AuthModule),
  ],
  exports: [PrimarySaleService],
})
export class PrimarySaleModuleGraph {}
