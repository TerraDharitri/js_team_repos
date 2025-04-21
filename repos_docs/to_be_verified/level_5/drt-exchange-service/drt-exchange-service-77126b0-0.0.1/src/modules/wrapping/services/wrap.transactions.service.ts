import { Injectable } from '@nestjs/common';
import { Token, TokenTransfer } from '@terradharitri/sdk-core';
import { TransactionModel } from '../../../models/transaction.model';
import { drtConfig, gasConfig } from '../../../config';
import { WrapService } from './wrap.service';
import { DRTProxyService } from '../../../services/TerraDharitri-communication/drt.proxy.service';
import { TransactionOptions } from 'src/modules/common/transaction.options';

@Injectable()
export class WrapTransactionsService {
    constructor(
        private readonly drtProxy: DRTProxyService,
        private readonly wrapService: WrapService,
    ) {}

    async wraprewa(sender: string, amount: string): Promise<TransactionModel> {
        const shardID = await this.drtProxy.getAddressShardID(sender);

        return this.drtProxy.getWrapSmartContractTransaction(
            shardID,
            new TransactionOptions({
                function: 'wraprewa',
                chainID: drtConfig.chainID,
                gasLimit: gasConfig.wraprewa,
                sender: sender,
                nativeTransferAmount: amount,
            }),
        );
    }

    async unwraprewa(
        sender: string,
        amount: string,
    ): Promise<TransactionModel> {
        const [shardID, wrappedrewaToken] = await Promise.all([
            this.drtProxy.getAddressShardID(sender),
            this.wrapService.wrappedrewaToken(),
        ]);

        return this.drtProxy.getWrapSmartContractTransaction(
            shardID,
            new TransactionOptions({
                function: 'unwraprewa',
                chainID: drtConfig.chainID,
                gasLimit: gasConfig.wraprewa,
                sender: sender,
                tokenTransfers: [
                    new TokenTransfer({
                        token: new Token({
                            identifier: wrappedrewaToken.identifier,
                        }),
                        amount: BigInt(amount),
                    }),
                ],
            }),
        );
    }
}
