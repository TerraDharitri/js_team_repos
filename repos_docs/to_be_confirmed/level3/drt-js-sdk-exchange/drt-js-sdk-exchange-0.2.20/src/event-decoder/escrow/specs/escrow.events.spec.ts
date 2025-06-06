import {
    EscrowCancelTransferEvent,
    EscrowLockFundsEvent,
    EscrowWithdrawEvent,
} from '../escrow.event';
import {
    EscrowCancelTransferEventMock,
    EscrowLockFundsEventMock,
    EscrowWithdrawEventMock,
} from '../mocks/escrow.events.mock';

describe('Escrow Events', () => {
    it('should decode lock funds event', () => {
        const decodedEvent = new EscrowLockFundsEvent(EscrowLockFundsEventMock);

        expect(decodedEvent.decodedTopics.eventName).toEqual(
            'lock_funds_event',
        );

        expect(decodedEvent.toJSON()).toEqual({
            sender: 'drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z',
            receiver:
                'drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z',
            lockedFunds: {
                funds: [
                    {
                        tokenIdentifier: 'XMOA-fda355',
                        tokenNonce: 1,
                        amount: '100000000000000000000000',
                    },
                ],
                lockedEpoch: 1440,
            },
        });
    });

    it('should decode withdraw funds event', () => {
        const decodedEvent = new EscrowWithdrawEvent(EscrowWithdrawEventMock);

        expect(decodedEvent.decodedTopics.eventName).toEqual('withdraw_event');

        expect(decodedEvent.toJSON()).toEqual({
            sender: 'drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z',
            receiver:
                'drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z',
            lockedFunds: {
                funds: [
                    {
                        tokenIdentifier: 'XMOA-fda355',
                        tokenNonce: 1,
                        amount: '100000000000000000000000',
                    },
                    {
                        tokenIdentifier: 'XMOA-fda355',
                        tokenNonce: 1,
                        amount: '100000000000000000000000',
                    },
                ],
                lockedEpoch: 1440,
            },
        });
    });

    it('should decode cancel transfer event', () => {
        const decodedEvent = new EscrowCancelTransferEvent(
            EscrowCancelTransferEventMock,
        );

        expect(decodedEvent.decodedTopics.eventName).toEqual(
            'cancel_transfer_event',
        );

        expect(decodedEvent.toJSON()).toEqual({
            sender: 'drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z',
            receiver:
                'drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z',
            lockedFunds: {
                funds: [
                    {
                        tokenIdentifier: 'XMOA-fda355',
                        tokenNonce: 1,
                        amount: '100000000000000000000000',
                    },
                ],
                lockedEpoch: 1440,
            },
        });
    });
});
