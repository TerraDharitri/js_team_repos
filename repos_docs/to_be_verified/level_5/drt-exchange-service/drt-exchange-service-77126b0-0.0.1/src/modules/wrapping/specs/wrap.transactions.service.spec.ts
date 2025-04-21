import { Test, TestingModule } from '@nestjs/testing';
import { WrapTransactionsService } from '../services/wrap.transactions.service';
import { WrapAbiServiceProvider } from '../mocks/wrap.abi.service.mock';
import { WrapService } from '../services/wrap.service';
import { TokenServiceProvider } from 'src/modules/tokens/mocks/token.service.mock';
import { DRTProxyServiceProvider } from 'src/services/TerraDharitri-communication/drt.proxy.service.mock';
import { Address } from '@terradharitri/sdk-core/out';
import { TransactionModel } from 'src/models/transaction.model';
import { gasConfig, drtConfig } from 'src/config';
import { encodeTransactionData } from 'src/helpers/helpers';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from 'src/helpers/api.config.service';
import winston from 'winston';

describe('WrapTransactionsService', () => {
    let module: TestingModule;
    const senderAddress = Address.newFromHex(
        '0000000000000000000000000000000000000000000000000000000000000001',
    ).toBech32();

    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [
                WinstonModule.forRoot({
                    transports: [new winston.transports.Console({})],
                }),
                ConfigModule.forRoot({}),
            ],
            providers: [
                WrapTransactionsService,
                WrapAbiServiceProvider,
                WrapService,
                TokenServiceProvider,
                DRTProxyServiceProvider,
                ApiConfigService,
            ],
        }).compile();
    });

    it('should be defined', () => {
        const service: WrapTransactionsService =
            module.get<WrapTransactionsService>(WrapTransactionsService);
        expect(service).toBeDefined();
    });

    it('should return wrap transaction', async () => {
        const service: WrapTransactionsService =
            module.get<WrapTransactionsService>(WrapTransactionsService);
        const rewaValue = '1000000000000000000';
        const transaction = await service.wraprewa(senderAddress, rewaValue);

        expect(transaction).toEqual(
            new TransactionModel({
                nonce: 0,
                chainID: drtConfig.chainID,
                gasLimit: gasConfig.wraprewa,
                value: rewaValue,
                data: encodeTransactionData('wraprewa'),
                receiver:
                    'drt1qqqqqqqqqqqqqpgqd77fnev2sthnczp2lnfx0y5jdycynjfhzzgq8axq7c',
                sender: senderAddress,
                receiverUsername: undefined,
                senderUsername: undefined,
                gasPrice: 1000000000,
                options: undefined,
                version: 2,
                signature: undefined,
                guardian: undefined,
                guardianSignature: undefined,
            }),
        );
    });

    it('should return unwrap transaction', async () => {
        const service: WrapTransactionsService =
            module.get<WrapTransactionsService>(WrapTransactionsService);
        const dcdtValue = '1000000000000000000';
        const transaction = await service.unwraprewa(senderAddress, dcdtValue);

        expect(transaction).toEqual(
            new TransactionModel({
                nonce: 0,
                chainID: drtConfig.chainID,
                gasLimit: gasConfig.wraprewa,
                value: '0',
                data: encodeTransactionData(
                    `DCDTTransfer@Wrewa-123456@${dcdtValue}@unwraprewa`,
                ),
                receiver:
                    'drt1qqqqqqqqqqqqqpgqd77fnev2sthnczp2lnfx0y5jdycynjfhzzgq8axq7c',
                sender: senderAddress,
                receiverUsername: undefined,
                senderUsername: undefined,
                gasPrice: 1000000000,
                options: undefined,
                version: 2,
                signature: undefined,
                guardian: undefined,
                guardianSignature: undefined,
            }),
        );
    });
});
