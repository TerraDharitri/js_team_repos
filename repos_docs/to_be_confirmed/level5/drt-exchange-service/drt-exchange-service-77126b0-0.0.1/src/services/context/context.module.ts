import { Module } from '@nestjs/common';
import { DRTCommunicationModule } from '../dharitri-communication/drt.communication.module';
import { ContextGetterService } from './context.getter.service';
import { ContextSetterService } from './context.setter.service';

@Module({
    imports: [DRTCommunicationModule],
    providers: [ContextGetterService, ContextSetterService],
    exports: [ContextGetterService, ContextSetterService],
})
export class ContextModule {}
