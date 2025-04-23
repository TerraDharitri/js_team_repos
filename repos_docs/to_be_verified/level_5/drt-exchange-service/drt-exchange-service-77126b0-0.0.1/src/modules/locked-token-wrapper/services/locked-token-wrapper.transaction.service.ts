import { Injectable } from '@nestjs/common';
import { DRTProxyService } from '../../../services/TerraDharitri-communication/drt.proxy.service';
import { TransactionModel } from '../../../models/transaction.model';
import { Token, TokenTransfer } from '@terradharitri/sdk-core';
import { gasConfig, scAddress } from '../../../config';
import { InputTokenModel } from '../../../models/inputToken.model';
import { DRTApiService } from 'src/services/TerraDharitri-communication/drt.api.service';
import { ContextGetterService } from 'src/services/context/context.getter.service';
import { tokenIdentifier } from 'src/utils/token.converters';
import {
    LockedTokenAttributes,
    WrappedLockedTokenAttributes,
} from '@terradharitri/sdk-exchange';
import { EnergyAbiService } from 'src/modules/energy/services/energy.abi.service';
import { TransactionOptions } from 'src/modules/common/transaction.options';

@Injectable()
export class LockedTokenWrapperTransactionService {
    constructor(
        private readonly energyAbi: EnergyAbiService,
        private readonly drtProxy: DRTProxyService,
        private readonly drtApi: DRTApiService,
        private readonly contextGetter: ContextGetterService,
    ) {}

    async unwrapLockedToken(
        sender: string,
        inputToken: InputTokenModel,
    ): Promise<TransactionModel> {
        const [currentEpoch, lockedTokenID, wrappedLockedTokenAttributesRaw] =
            await Promise.all([
                this.contextGetter.getCurrentEpoch(),
                this.energyAbi.lockedTokenID(),
                this.drtApi.getNftAttributesByTokenIdentifier(
                    sender,
                    tokenIdentifier(inputToken.tokenID, inputToken.nonce),
                ),
            ]);

        const wrappedLockedTokenAttributes =
            WrappedLockedTokenAttributes.fromAttributes(
                wrappedLockedTokenAttributesRaw,
            );
        const LockedTokenAttributesRaw =
            await this.drtApi.getNftAttributesByTokenIdentifier(
                scAddress.lockedTokenWrapper,
                tokenIdentifier(
                    lockedTokenID,
                    wrappedLockedTokenAttributes.lockedTokenNonce,
                ),
            );

        const lockedTokenAttributes = LockedTokenAttributes.fromAttributes(
            LockedTokenAttributesRaw,
        );

        if (currentEpoch >= lockedTokenAttributes.unlockEpoch) {
            throw new Error('Cannot unwrap token after unlock epoch');
        }

        return this.drtProxy.getLockedTokenWrapperSmartContractTransaction(
            new TransactionOptions({
                sender: sender,
                gasLimit: gasConfig.lockedTokenWrapper.unwrapLockedToken,
                function: 'unwrapLockedToken',
                tokenTransfers: [
                    new TokenTransfer({
                        token: new Token({
                            identifier: inputToken.tokenID,
                            nonce: BigInt(inputToken.nonce),
                        }),
                        amount: BigInt(inputToken.amount),
                    }),
                ],
            }),
        );
    }

    async wrapLockedToken(
        sender: string,
        inputToken: InputTokenModel,
    ): Promise<TransactionModel> {
        return this.drtProxy.getLockedTokenWrapperSmartContractTransaction(
            new TransactionOptions({
                sender: sender,
                gasLimit: gasConfig.lockedTokenWrapper.wrapLockedToken,
                function: 'wrapLockedToken',
                tokenTransfers: [
                    new TokenTransfer({
                        token: new Token({
                            identifier: inputToken.tokenID,
                            nonce: BigInt(inputToken.nonce),
                        }),
                        amount: BigInt(inputToken.amount),
                    }),
                ],
            }),
        );
    }
}
