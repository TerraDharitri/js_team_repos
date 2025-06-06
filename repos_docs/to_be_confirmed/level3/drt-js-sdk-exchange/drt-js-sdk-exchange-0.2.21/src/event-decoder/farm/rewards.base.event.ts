import { BinaryCodec, StructType } from '@terradharitri/sdk-core';
import BigNumber from 'bignumber.js';
import { ErrInvalidDataField } from '../../errors';
import { GenericToken } from '../../generic.token';
import { GenericEvent } from '../generic.event';
import { RawEventType } from '../generic.types';
import { FarmEventsTopics } from './farm.event.topics';
import { BaseRewardsEventType } from './rewards.types';

export class BaseRewardsEvent extends GenericEvent {
    private decodedTopics: FarmEventsTopics;
    protected decodedEvent: any;

    readonly oldFarmToken: GenericToken;
    readonly newFarmToken: GenericToken;
    readonly farmSupply: BigNumber;
    readonly rewardToken: GenericToken;
    readonly rewardTokenReserves: BigNumber;
    readonly createdWithMerge: boolean;

    constructor(init: RawEventType) {
        super(init);
        this.decodedTopics = new FarmEventsTopics(this.topics);
        this.decodedEvent = this.decodeEvent();

        this.block = this.decodedEvent.block;
        this.caller = this.decodedEvent.caller;
        this.epoch = this.decodedEvent.epoch;
        this.timestamp = this.decodedEvent.timestamp;

        this.farmSupply = this.decodedEvent.farmSupply;
        this.rewardTokenReserves = this.decodedEvent.rewardTokenReserves;
        this.createdWithMerge = this.decodedEvent.createdWithMerge;

        this.oldFarmToken = new GenericToken({
            tokenID: this.decodedEvent.oldFarmTokenID.toString(),
            nonce: this.decodedEvent.oldFarmTokenNonce,
            amount: this.decodedEvent.oldFarmTokenAmount,
        });
        this.newFarmToken = new GenericToken({
            tokenID: this.decodedEvent.newFarmTokenID.toString(),
            nonce: this.decodedEvent.newFarmTokenNonce,
            amount: this.decodedEvent.newFarmTokenAmount,
        });
        this.rewardToken = new GenericToken({
            tokenID: this.decodedEvent.rewardTokenID.toString(),
            nonce: this.decodedEvent.rewardTokenNonce,
            amount: this.decodedEvent.rewardTokenAmount,
        });
    }

    toJSON(): BaseRewardsEventType {
        return {
            ...super.toJSON(),
            oldFarmToken: this.oldFarmToken.toJSON(),
            newFarmToken: this.newFarmToken.toJSON(),
            farmSupply: this.farmSupply.toFixed(),
            rewardToken: this.rewardToken.toJSON(),
            rewardTokenReserves: this.rewardTokenReserves.toFixed(),
            createdWithMerge: this.createdWithMerge,
        };
    }

    getTopics() {
        return this.decodedTopics.toPlainObject();
    }

    decodeEvent() {
        if (this.data == undefined) {
            throw new ErrInvalidDataField(BaseRewardsEvent.name);
        }

        const data = Buffer.from(this.data, 'base64');
        const codec = new BinaryCodec();

        const eventStruct = this.getStructure();

        const [decoded] = codec.decodeNested(data, eventStruct);
        return decoded.valueOf();
    }

    getStructure(): StructType {
        throw new Error('Method not implemented');
    }
}
