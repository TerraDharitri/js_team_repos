import {
    BigUIntType,
    BinaryCodec,
    BooleanType,
    BytesType,
    FieldDefinition,
    StructType,
} from '@terradharitri/sdk-core';
import { ErrInvalidDataField } from '../../../errors';
import { RawEventType } from '../../generic.types';
import { RawEvent } from '../../raw.event';
import { FarmEventsTopicsV2 } from './farm.event.topics.v2';
import {
    DcdtTokenPayment,
    FarmTokenAttributesV2,
} from '../../../attributes-decoder';
import BigNumber from 'bignumber.js';
import { ClaimRewardsEventTypeV2 } from './farm.v2.types';

export class ClaimRewardsEventV2 extends RawEvent {
    readonly decodedTopics: FarmEventsTopicsV2;

    readonly oldFarmToken: DcdtTokenPayment;
    readonly newFarmToken: DcdtTokenPayment;
    readonly farmSupply: BigNumber;
    readonly rewardTokens: DcdtTokenPayment;
    readonly rewardTokenReserves: BigNumber;
    readonly oldFarmAttributes: FarmTokenAttributesV2;
    readonly newFarmAttributes: FarmTokenAttributesV2;
    readonly createdWithMerge: boolean;

    constructor(init: RawEventType) {
        super(init);

        this.decodedTopics = new FarmEventsTopicsV2(this.topics);
        const decodedEvent = this.decodeEvent();
        this.oldFarmToken = DcdtTokenPayment.fromDecodedAttributes(
            decodedEvent.old_farm_token,
        );
        this.newFarmToken = DcdtTokenPayment.fromDecodedAttributes(
            decodedEvent.new_farm_token,
        );
        this.farmSupply = decodedEvent.farm_supply;
        this.rewardTokens = DcdtTokenPayment.fromDecodedAttributes(
            decodedEvent.reward_tokens,
        );
        this.rewardTokenReserves = decodedEvent.reward_reserve;
        this.oldFarmAttributes = FarmTokenAttributesV2.fromAttributes(
            Buffer.from(decodedEvent.old_farm_attributes).toString('base64'),
        );
        this.newFarmAttributes = FarmTokenAttributesV2.fromAttributes(
            Buffer.from(decodedEvent.new_farm_attributes).toString('base64'),
        );
        this.createdWithMerge = decodedEvent.created_with_merge;
    }

    toJSON(): ClaimRewardsEventTypeV2 {
        return {
            oldFarmToken: this.oldFarmToken.toJSON(),
            newFarmToken: this.newFarmToken.toJSON(),
            farmSupply: this.farmSupply.toFixed(),
            rewardTokens: this.rewardTokens.toJSON(),
            rewardTokenReserves: this.rewardTokenReserves.toFixed(),
            oldFarmAttributes: this.oldFarmAttributes.toJSON(),
            newFarmAttributes: this.newFarmAttributes.toJSON(),
            createdWithMerge: this.createdWithMerge,
        };
    }

    decodeEvent() {
        if (this.data == undefined) {
            throw new ErrInvalidDataField(ClaimRewardsEventV2.name);
        }

        const data = Buffer.from(this.data, 'base64');
        const codec = new BinaryCodec();

        const eventStruct = this.getStructure();
        const [decoded] = codec.decodeNested(data, eventStruct);
        return decoded.valueOf();
    }

    getStructure(): StructType {
        return new StructType('EnterFarmEvent', [
            new FieldDefinition(
                'old_farm_token',
                '',
                DcdtTokenPayment.getStructure(),
            ),
            new FieldDefinition(
                'new_farm_token',
                '',
                DcdtTokenPayment.getStructure(),
            ),
            new FieldDefinition('farm_supply', '', new BigUIntType()),
            new FieldDefinition(
                'reward_tokens',
                '',
                DcdtTokenPayment.getStructure(),
            ),
            new FieldDefinition('reward_reserve', '', new BigUIntType()),
            new FieldDefinition('old_farm_attributes', '', new BytesType()),
            new FieldDefinition('new_farm_attributes', '', new BytesType()),
            new FieldDefinition('created_with_merge', '', new BooleanType()),
        ]);
    }
}
