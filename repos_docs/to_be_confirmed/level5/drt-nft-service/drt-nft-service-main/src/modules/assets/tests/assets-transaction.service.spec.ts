import { Test, TestingModule } from '@nestjs/testing';
import { DrtApiService } from 'src/common';
import { RedisCacheService } from '@terradharitri/sdk-nestjs-cache';
import { Logger, NotFoundException } from '@nestjs/common';
import { Attribute, CreateNftRequest, TransferNftRequest, UpdateQuantityRequest } from '../models/requests';
import { AssetsTransactionService } from '../assets-transaction.service';
import { PinataService } from 'src/modules/ipfs/pinata.service';
import { S3Service } from 'src/modules/s3/s3.service';
import { DrtStats } from 'src/common/services/drt-communication/models/drt-stats.model';
import { NftTypeEnum } from '../models';
import { UploadToIpfsResult } from 'src/modules/ipfs/ipfs.model';

describe('Assets Transaction Service', () => {
  let service: AssetsTransactionService;
  let module: TestingModule;
  const ownerAddress = 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r';

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        AssetsTransactionService,
        {
          provide: PinataService,
          useValue: {},
        },
        {
          provide: S3Service,
          useValue: {},
        },
        {
          provide: DrtApiService,
          useValue: {},
        },
        {
          provide: RedisCacheService,
          useValue: {},
        },
        {
          provide: Logger,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<AssetsTransactionService>(AssetsTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('updateQuantity', () => {
    const expectedResult = {
      chainID: 'T',
      data: 'RENEVE5GVEFkZFF1YW50aXR5QDQ3NDU0ZTJkNjU2NjY2MzUzMTYzQDAzQDBh',
      gasLimit: 200000,
      gasPrice: 1000000000,
      nonce: 0,
      options: undefined,
      receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
      sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
      signature: undefined,
      value: '0',
      version: 2,
    };

    it('returns built transaction with right arguments', async () => {
      const result = await service.updateQuantity(
        ownerAddress,
        new UpdateQuantityRequest({
          functionName: 'DCDTNFTAddQuantity',
          identifier: 'GEN-eff51c-03',
          quantity: '10',
          updateQuantityRoleAddress: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('burnQuantity', () => {
    const burnRequest = new UpdateQuantityRequest({
      functionName: 'DCDTNFTBurn',
      identifier: 'GEN-eff51c-03',
      quantity: '10',
      updateQuantityRoleAddress: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
    });

    it('returns built transaction with right arguments', async () => {
      const apiService = module.get<DrtApiService>(DrtApiService);
      apiService.getNftByIdentifier = jest.fn().mockReturnValueOnce({
        type: NftTypeEnum.SemiFungibleDCDT,
        balance: 10,
        identifier: 'GEN-8984e7-01',
      });

      const redisCacheService = module.get<RedisCacheService>(RedisCacheService);
      redisCacheService.getOrSet = jest.fn().mockReturnValueOnce(new DrtStats({}));
      const expectedResult = {
        chainID: 'T',
        data: 'RENEVE5GVFRyYW5zZmVyQDQ3NDU0ZTJkNjU2NjY2MzUzMTYzQDAzQDBhQDZlN2FkNmU3YWQ2ZTdhZDZlN2FkNmU3YWQ2ZTdhZDZlN2FkNmU3YWQ2ZTdhZDZlN2FkNmU3YWQ2ZTdhZDZlN2E=',
        gasLimit: 1000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.burnQuantity(ownerAddress, burnRequest);
      expect(result).toMatchObject(expectedResult);
    });

    it('if no nft for identifier throws expected error', async () => {
      const apiService = module.get<DrtApiService>(DrtApiService);
      apiService.getNftByIdentifier = jest.fn().mockReturnValueOnce(null);

      const redisCacheService = module.get<RedisCacheService>(RedisCacheService);
      redisCacheService.getOrSet = jest.fn().mockReturnValueOnce(new DrtStats({}));

      const result = service.burnQuantity(ownerAddress, burnRequest);
      await expect(result).rejects.toThrowError(new NotFoundException('NFT not found'));
    });

    it('returns burn transaction if after activation epoch', async () => {
      const apiService = module.get<DrtApiService>(DrtApiService);
      apiService.getNftByIdentifier = jest.fn().mockReturnValueOnce({
        type: NftTypeEnum.SemiFungibleDCDT,
        balance: 10,
        identifier: 'GEN-8984e7-01',
        timestamp: 1691678405,
      });

      const redisCacheService = module.get<RedisCacheService>(RedisCacheService);
      redisCacheService.getOrSet = jest
        .fn()
        .mockReturnValueOnce(new DrtStats({ epoch: 5957, roundsPassed: 496, roundsPerEpoch: 1200, refreshRate: 6000 }));
      const expectedResult = {
        chainID: 'T',
        data: 'RENEVE5GVFRyYW5zZmVyQDQ3NDU0ZTJkNjU2NjY2MzUzMTYzQDAzQDBhQDZlN2FkNmU3YWQ2ZTdhZDZlN2FkNmU3YWQ2ZTdhZDZlN2FkNmU3YWQ2ZTdhZDZlN2FkNmU3YWQ2ZTdhZDZlN2E=',
        gasLimit: 1000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.burnQuantity(ownerAddress, burnRequest);
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('transferNft', () => {
    it('returns built transaction with right arguments for NFT', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'RENEVE5GVFRyYW5zZmVyQDQ3NDU0ZTJkNjU2NjY2MzUzMTYzQDAzQDAxQDZlMjI0MTE4ZDkwNjhhZTYyNjg3OGExY2ZiZWJjYjZhOTVhNDcxNWRiODZkMWI1MWUwNmEwNDIyNmNmMzBmZDY=',
        gasLimit: 1000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.transferNft(
        ownerAddress,
        new TransferNftRequest({
          identifier: 'GEN-eff51c-03',
          destinationAddress: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });

    it('returns built transaction with right arguments for SFT', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'RENEVE5GVFRyYW5zZmVyQDQ3NDU0ZTJkNjU2NjY2MzUzMTYzQDAzQDBhQDZlMjI0MTE4ZDkwNjhhZTYyNjg3OGExY2ZiZWJjYjZhOTVhNDcxNWRiODZkMWI1MWUwNmEwNDIyNmNmMzBmZDY=',
        gasLimit: 1000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.transferNft(
        ownerAddress,
        new TransferNftRequest({
          identifier: 'GEN-eff51c-03',
          quantity: '10',
          destinationAddress: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('createNft', () => {
    it('returns built transaction with right arguments for mint', async () => {
      const pinataService = module.get<PinataService>(PinataService);
      pinataService.uploadFile = jest.fn().mockReturnValueOnce(new UploadToIpfsResult({ hash: 'hash', url: 'url' }));
      pinataService.uploadText = jest.fn().mockReturnValueOnce(new UploadToIpfsResult({ hash: 'hash', url: 'url' }));

      const s3Service = module.get<S3Service>(S3Service);
      s3Service.upload = jest.fn().mockReturnValueOnce(true);
      s3Service.uploadText = jest.fn().mockReturnValueOnce(true);

      const expectedResult = {
        chainID: 'T',
        data: 'RENEVE5GVENyZWF0ZUA0MzZmNmM2YzY1NjM3NDY5NmY2ZUAwMUA0ZTYxNmQ2NUAwM2U4QDY4NjE3MzY4QDc0NjE2NzczM2E3NDYxNjczYjZkNjU3NDYxNjQ2MTc0NjEzYTY4NjE3MzY4QDc1NzI2Yw==',
        gasLimit: 3728000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.createNft(
        ownerAddress,
        new CreateNftRequest({
          attributes: new Attribute({ description: 'desciption', tags: ['tag'] }),
          collection: 'Collection',
          name: 'Name',
          royalties: '1000',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });
});
