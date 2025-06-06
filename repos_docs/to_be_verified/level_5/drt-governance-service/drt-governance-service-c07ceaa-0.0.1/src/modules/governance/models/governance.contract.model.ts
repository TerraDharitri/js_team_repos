import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { GovernanceProposalModel } from './governance.proposal.model';
import { DcdtToken } from '../../tokens/models/dcdtToken.model';

@ObjectType()
export class GovernanceTokenSnapshotContract {
    @Field()
    address: string;
    @Field(() => Int)
    shard: number;
    @Field()
    minFeeForPropose: string;
    @Field()
    quorum: string;
    @Field(() => Int)
    votingDelayInBlocks: number;
    @Field(() => Int)
    votingPeriodInBlocks: number;
    @Field()
    feeToken: DcdtToken;
    @Field(() => Int)
    withdrawPercentageDefeated: number;
    @Field(() => [GovernanceProposalModel])
    proposals: GovernanceProposalModel[];
    @Field(() => Float)
    vetoPercentageLimit: number = 33.33;
    @Field(() => Int)
    votingPowerDecimals: number;

    constructor(init: Partial<GovernanceTokenSnapshotContract>) {
        Object.assign(this, init);
    }
}

@ObjectType()
export class GovernanceEnergyContract extends GovernanceTokenSnapshotContract {
    @Field()
    minEnergyForPropose: string;
    @Field()
    feesCollectorAddress: string;
    @Field()
    energyFactoryAddress: string;

    constructor(init: Partial<GovernanceEnergyContract>) {
        super(init);
        Object.assign(this, init);
    }
}
