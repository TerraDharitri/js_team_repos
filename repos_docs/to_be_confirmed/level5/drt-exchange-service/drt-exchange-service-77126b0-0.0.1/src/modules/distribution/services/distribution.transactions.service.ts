import { Injectable } from '@nestjs/common';
import { gasConfig } from '../../../config';
import { TransactionModel } from '../../../models/transaction.model';
import { DRTProxyService } from '../../../services/dharitri-communication/drt.proxy.service';
import { TransactionOptions } from 'src/modules/common/transaction.options';

@Injectable()
export class DistributionTransactionsService {
    constructor(private drtProxy: DRTProxyService) {}

    async claimLockedAssets(sender: string): Promise<TransactionModel> {
        return await this.drtProxy.getDistributionSmartContractTransaction(
            new TransactionOptions({
                sender: sender,
                gasLimit: gasConfig.claimLockedAssets,
                function: 'claimLockedAssets',
            }),
        );
    }
}
