import { Test, TestingModule } from '@nestjs/testing';
import { IssueCollectionRequest, SetNftRolesRequest, StopNftCreateRequest, TransferNftCreateRoleRequest } from '../models/requests';
import { CollectionsTransactionsService } from '../collections-transactions.service';

describe('Collections Transactions Service', () => {
  let service: CollectionsTransactionsService;
  let module: TestingModule;
  const ownerAddress = 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r';

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [CollectionsTransactionsService],
    }).compile();

    service = module.get<CollectionsTransactionsService>(CollectionsTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('issueToken', () => {
    it('returns built transaction for issue non fungible with right arguments', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'aXNzdWVOb25GdW5naWJsZUA0ZTYxNmQ2NTczQDRlNDE0ZDQ1QDYzNjE2ZTQ2NzI2NTY1N2E2NUA3NDcyNzU2NUA2MzYxNmU1MDYxNzU3MzY1QDc0NzI3NTY1QDYzNjE2ZTU0NzI2MTZlNzM2NjY1NzI0ZTQ2NTQ0MzcyNjU2MTc0NjU1MjZmNmM2NUA3NDcyNzU2NQ==',
        gasLimit: 60000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqzlllsd5j0s2',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '50000000000000000',
        version: 2,
      };

      const result = await service.issueToken(
        ownerAddress,
        new IssueCollectionRequest({
          tokenName: 'Names',
          tokenTicker: 'NAME',
          canFreeze: true,
          canPause: true,
          canTransferNFTCreateRole: true,
          collectionType: 'issueNonFungible',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });

    it('returns built transaction for issue semi fungible with right arguments', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'aXNzdWVTZW1pRnVuZ2libGVANGU2MTZkNjU3M0A0ZTQxNGQ0NUA2MzYxNmU0NjcyNjU2NTdhNjVANzQ3Mjc1NjVANjM2MTZlNTA2MTc1NzM2NUA3NDcyNzU2NUA2MzYxNmU1NDcyNjE2ZTczNjY2NTcyNGU0NjU0NDM3MjY1NjE3NDY1NTI2ZjZjNjVANzQ3Mjc1NjU=',
        gasLimit: 60000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqzlllsd5j0s2',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '50000000000000000',
        version: 2,
      };

      const result = await service.issueToken(
        ownerAddress,
        new IssueCollectionRequest({
          tokenName: 'Names',
          tokenTicker: 'NAME',
          canFreeze: true,
          canPause: true,
          canTransferNFTCreateRole: true,
          collectionType: 'issueSemiFungible',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('stopNFTCreate', () => {
    it('returns built transaction with right arguments', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'c3RvcE5GVENyZWF0ZUA2MzZmNmM2YzY1NjM3NDY5NmY2ZQ==',
        gasLimit: 60000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.stopNFTCreate(
        ownerAddress,
        new StopNftCreateRequest({
          ownerAddress: ownerAddress,
          collection: 'collection',
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('transferNFTCreateRole', () => {
    it('returns built transaction with right arguments', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'dHJhbnNmZXJORlRDcmVhdGVSb2xlQDYzNmY2YzZjNjU2Mzc0Njk2ZjZlQDAxMzk0NzJlZmY2ODg2NzcxYTk4MmYzMDgzZGE1ZDQyMWYyNGMyOTE4MWU2Mzg4ODIyOGRjODFjYTYwZDY5ZTE=',
        gasLimit: 60000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        sender:   'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.transferNFTCreateRole(
        ownerAddress,
        new TransferNftCreateRoleRequest({
          ownerAddress: ownerAddress,
          collection: 'collection',
          addressToTransferList: ['drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf'],
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('setNftRoles', () => {
    it('returns built transaction with right arguments', async () => {
      const expectedResult = {
        chainID: 'T',
        data: 'c2V0U3BlY2lhbFJvbGVANjM2ZjZjNmM2NTYzNzQ2OTZmNmVAMDEzOTQ3MmVmZjY4ODY3NzFhOTgyZjMwODNkYTVkNDIxZjI0YzI5MTgxZTYzODg4MjI4ZGM4MWNhNjBkNjllMUA1NDY1NzM3NA==',
        gasLimit: 60000000,
        gasPrice: 1000000000,
        nonce: 0,
        options: undefined,
        receiver: 'drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqzlllsd5j0s2',
        sender: 'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        signature: undefined,
        value: '0',
        version: 2,
      };

      const result = await service.setNftRoles(
        ownerAddress,
        new SetNftRolesRequest({
          collection: 'collection',
          addressToTransfer: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
          roles: ['Test'],
        }),
      );
      expect(result).toMatchObject(expectedResult);
    });
  });
});
