import { EnumType, EnumVariantDefinition } from '@terradharitri/sdk-core/out';
import { Field, ObjectType } from '@nestjs/graphql';

export enum ComposableTaskType {
    WRAP_rewa = 'Wraprewa',
    UNWRAP_rewa = 'Unwraprewa',
    SWAP = 'Swap',
    ROUTER_SWAP = 'RouterSwap',
    SEND_rewa_OR_DCDT = 'SendrewaOrDcdt',
}

export class ComposableTaskEnumType {
    static getEnumType(): EnumType {
        return new EnumType('ComposableTaskType', [
            new EnumVariantDefinition('Wraprewa', 0),
            new EnumVariantDefinition('Unwraprewa', 1),
            new EnumVariantDefinition('Swap', 2),
            new EnumVariantDefinition('RouterSwap', 3),
            new EnumVariantDefinition('SendrewaOrDcdt', 4),
        ]);
    }
}

@ObjectType()
export class ComposableTaskModel {
    @Field()
    address: string;

    constructor(init: Partial<ComposableTaskModel>) {
        Object.assign(this, init);
    }
}
