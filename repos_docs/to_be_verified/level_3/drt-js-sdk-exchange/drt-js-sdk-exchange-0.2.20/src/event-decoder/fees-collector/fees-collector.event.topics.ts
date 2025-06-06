import { Address } from '@terradharitri/sdk-core/out';
import { DcdtTokenPayment } from '../../attributes-decoder';

export class FeesCollectorEventTopics {
    readonly eventName: string;
    readonly caller: Address;
    readonly payment: DcdtTokenPayment;
    readonly currentWeek: number;

    constructor(rawTopics: string[]) {
        this.eventName = Buffer.from(rawTopics[0], 'base64').toString();
        this.caller = new Address(Buffer.from(rawTopics[1], 'base64'));
        this.currentWeek = parseInt(
            Buffer.from(rawTopics[2], 'base64').toString('hex'),
            16,
        );
        this.payment = DcdtTokenPayment.fromAttributes(rawTopics[3]);
    }

    toJSON() {
        return {
            eventName: this.eventName,
            caller: this.caller.bech32(),
            payment: this.payment.toJSON(),
            currentWeek: this.currentWeek,
        };
    }
}
