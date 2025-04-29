import { Injectable } from '@nestjs/common';
import { Address, AddressValue, BytesValue, ContractFunction, TokenPayment, TokenTransfer, TypedValue } from '@terradharitri/sdk-core';
import { drtConfig, gas } from 'src/config';
import { SetNftRolesArgs } from './models/SetNftRolesArgs';
import { getSmartContract } from 'src/common';
import { TransactionNode } from '../common/transaction';
import { IssueCollectionRequest, StopNftCreateRequest, TransferNftCreateRoleRequest, SetNftRolesRequest } from './models/requests';

@Injectable()
export class CollectionsTransactionsService {
  async issueToken(ownerAddress: string, request: IssueCollectionRequest) {
    let transactionArgs = this.getIssueTokenArguments(request);

    const transaction = this.dcdtSmartContract.call({
      func: new ContractFunction(request.collectionType),
      value: TokenPayment.rewaFromBigInteger(drtConfig.issueNftCost),
      args: transactionArgs,
      gasLimit: gas.issueToken,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    return transaction.toPlainObject();
  }

  async stopNFTCreate(ownerAddress: string, request: StopNftCreateRequest): Promise<TransactionNode> {
    const smartContract = getSmartContract(request.ownerAddress);
    const transaction = smartContract.call({
      func: new ContractFunction('stopNFTCreate'),
      args: [BytesValue.fromUTF8(request.collection)],
      gasLimit: gas.stopNFTCreate,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    return transaction.toPlainObject();
  }

  async transferNFTCreateRole(ownerAddress: string, request: TransferNftCreateRoleRequest): Promise<TransactionNode> {
    const smartContract = getSmartContract(request.ownerAddress);
    let transactionArgs = this.getTransferCreateRoleArgs(request);
    const transaction = smartContract.call({
      func: new ContractFunction('transferNFTCreateRole'),
      args: transactionArgs,
      gasLimit: gas.transferNFTCreateRole,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    return transaction.toPlainObject();
  }

  async setNftRoles(ownerAddress: string, args: SetNftRolesRequest): Promise<TransactionNode> {
    let transactionArgs = this.getSetRolesArgs(args);
    const transaction = this.dcdtSmartContract.call({
      func: new ContractFunction('setSpecialRole'),
      args: transactionArgs,
      gasLimit: gas.setRoles,
      chainID: drtConfig.chainID,
      caller: Address.fromString(ownerAddress),
    });
    return transaction.toPlainObject();
  }

  private getIssueTokenArguments(args: IssueCollectionRequest) {
    let transactionArgs = [BytesValue.fromUTF8(args.tokenName), BytesValue.fromUTF8(args.tokenTicker)];
    if (args.canFreeze) {
      transactionArgs.push(BytesValue.fromUTF8('canFreeze'));
      transactionArgs.push(BytesValue.fromUTF8(args.canFreeze.toString()));
    }
    if (args.canWipe) {
      transactionArgs.push(BytesValue.fromUTF8('canWipe'));
      transactionArgs.push(BytesValue.fromUTF8(args.canWipe.toString()));
    }
    if (args.canPause) {
      transactionArgs.push(BytesValue.fromUTF8('canPause'));
      transactionArgs.push(BytesValue.fromUTF8(args.canPause.toString()));
    }
    if (args.canTransferNFTCreateRole) {
      transactionArgs.push(BytesValue.fromUTF8('canTransferNFTCreateRole'));
      transactionArgs.push(BytesValue.fromUTF8(args.canTransferNFTCreateRole.toString()));
    }
    return transactionArgs;
  }

  private getSetRolesArgs(args: SetNftRolesArgs) {
    let transactionArgs = [BytesValue.fromUTF8(args.collection), new AddressValue(new Address(args.addressToTransfer))];
    args.roles.forEach((role) => {
      transactionArgs.push(BytesValue.fromUTF8(role));
    });
    return transactionArgs;
  }

  private getTransferCreateRoleArgs(args: TransferNftCreateRoleRequest) {
    let transactionArgs: TypedValue[] = [BytesValue.fromUTF8(args.collection)];
    args.addressToTransferList.forEach((address) => {
      transactionArgs.push(new AddressValue(new Address(address)));
    });
    return transactionArgs;
  }

  private readonly dcdtSmartContract = getSmartContract(drtConfig.dcdtNftAddress);
}
