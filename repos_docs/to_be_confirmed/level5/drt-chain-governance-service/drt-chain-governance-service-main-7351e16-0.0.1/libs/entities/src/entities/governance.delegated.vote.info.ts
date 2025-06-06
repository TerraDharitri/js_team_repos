import { ApiProperty } from '@nestjs/swagger';
import { BinaryUtils } from '@terradharitri/sdk-nestjs-common';
import { VmQueryResponse } from '@libs/common/vm-query/dtos/vm-query.response';

export class GovernanceDelegatedVoteInfo {
  constructor(init?: Partial<GovernanceDelegatedVoteInfo>) {
    Object.assign(this, init);
  }

  @ApiProperty({ description: 'The used stake for the delegated address.', example: '1000000000000000000' })
  usedStake?: string;

  @ApiProperty({ description: 'The used power for the delegated address.', example: '1000000000000000000' })
  usedPower?: string;

  @ApiProperty({ description: 'The total stake of the address.', example: '1000000000000000000' })
  totalStake?: string;

  @ApiProperty({ description: 'The address power of the address.', example: '1000000000000000000' })
  totalPower?: string;

  static fromVmQueryResponse(queryResponse: VmQueryResponse): GovernanceDelegatedVoteInfo {
    const returnData = queryResponse?.data?.data?.returnData;
    if (!returnData || !Array.isArray(returnData) || returnData.length < 4) {
      throw new Error(`Cannot parse governance delegated vote info vm-query response. Return data: ${JSON.stringify(returnData)}`);
    }

    return new GovernanceDelegatedVoteInfo({
      usedStake: BinaryUtils.base64Decode(returnData[0]),
      usedPower: BinaryUtils.base64Decode(returnData[1]),
      totalStake: BinaryUtils.base64Decode(returnData[2]),
      totalPower: BinaryUtils.base64Decode(returnData[3]),
    });
  }
}
