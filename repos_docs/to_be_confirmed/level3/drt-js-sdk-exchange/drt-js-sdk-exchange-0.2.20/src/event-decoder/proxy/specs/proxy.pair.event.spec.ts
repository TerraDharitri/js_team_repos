import { AddLiquidityProxyEvent } from '../addLiquidityProxy.event';
import { ClaimRewardsProxyEvent } from '../claimRewardsProxy.event';
import { EnterFarmProxyEvent } from '../enterFarmProxy.event';
import { ExitFarmProxyEvent } from '../exitFarmProxy.event';
import {
    rawAddLiquidityProxyEvent,
    rawClaimRewardsProxyEvent,
    rawEnterFarmProxyEvent,
    rawExitFarmProxyEvent,
    rawRemoveLiquidityProxyEvent,
} from '../mocks/mocked.raw.event';
import { PairProxyEvent } from '../pairProxy.event';

describe('test proxy pair event decoders', () => {
    it('should decode add liquidity proxy event', () => {
        const addLiquidityProxyEvent = new AddLiquidityProxyEvent(
            rawAddLiquidityProxyEvent,
        );
        expect(addLiquidityProxyEvent.toJSON()).toEqual({
            address:
                'drt1qqqqqqqqqqqqqpgqrc4pg2xarca9z34njcxeur622qmfjp8w2jps6e79sp',
            identifier: 'addLiquidityProxy',
            caller: 'drt1ztrzzq4xd3sx7aqr9rl368r3cz7843tnelf367dlfzrg37s94xlsezpd3q',
            block: 9266338,
            epoch: 643,
            timestamp: 1651755090,
            firstToken: {
                tokenID: 'WREWA-bd4d79',
                nonce: 0,
                amount: '127871379362263892',
            },
            secondToken: {
                tokenID: 'WREWA-bd4d79',
                nonce: 0,
                amount: '127871379362263892',
            },
            wrappedLpToken: {
                tokenID: 'LKLP-03a2fa',
                nonce: 1051065,
                amount: '84152534155050442',
            },
            wrappedLpAttributes: {
                lpTokenID: 'REWAMOA-0be9e5',
                lpTokenTotalAmount: '84152534155050442',
                lockedAssetsInvested: '89242243357071189167161',
                lockedAssetsNonce: 3717058,
            },
            createdWithMerge: false,
        });
    });

    it('should decode remove liquidity proxy event', () => {
        const removeLiquidityProxyEvent = new PairProxyEvent(
            rawRemoveLiquidityProxyEvent,
        );
        expect(removeLiquidityProxyEvent.toJSON()).toEqual({
            address:
                'drt1qqqqqqqqqqqqqpgqrc4pg2xarca9z34njcxeur622qmfjp8w2jps6e79sp',
            identifier: 'removeLiquidityProxy',
            caller: 'drt1advjt988u7pm5ltsh5jeudewfydh52xcn0u5ft3jzwm3ltum0q0qqlls30',
            block: 9263913,
            epoch: 643,
            timestamp: 1651740540,
            firstToken: {
                tokenID: 'WREWA-bd4d79',
                nonce: 0,
                amount: '11015349012935035301',
            },
            secondToken: {
                tokenID: 'WREWA-bd4d79',
                nonce: 0,
                amount: '11015349012935035301',
            },
            wrappedLpToken: {
                tokenID: 'LKLP-03a2fa',
                nonce: 786325,
                amount: '7251153915989114663',
            },
            wrappedLpAttributes: {
                lpTokenID: 'REWAMOA-0be9e5',
                lpTokenTotalAmount: '7251153915989114663',
                lockedAssetsInvested: '6185740014381025411493263',
                lockedAssetsNonce: 1777951,
            },
        });
    });
});

describe('test proxy farm event decoders', () => {
    it('should decode enter farm proxy event', () => {
        const enterFarmProxyEvent = new EnterFarmProxyEvent(
            rawEnterFarmProxyEvent,
        );
        expect(enterFarmProxyEvent.toJSON()).toEqual({
            address:
                'drt1qqqqqqqqqqqqqpgqrc4pg2xarca9z34njcxeur622qmfjp8w2jps6e79sp',
            identifier: 'enterFarmProxy',
            caller: 'drt16vutspr88q6q33wwcfgwwhkymas2g9vzv33m69e9fzpjykdmctxq42jezd',
            block: 9266441,
            epoch: 643,
            timestamp: 1651755708,
            farmAddress:
                'drt1qqqqqqqqqqqqqpgqyawg3d9r4l27zue7e9sz7djf7p9aj3sz2jpsxnfv3h',
            farmingToken: {
                tokenID: 'LKLP-03a2fa',
                nonce: 1051072,
                amount: '298944491380449379',
            },
            wrappedFarmToken: {
                tokenID: 'REWAMOAFL-ef2065',
                nonce: 695995,
                amount: '6347318843650466162',
            },
            wrappedFarmAttributes: {
                farmTokenID: 'REWAMOAFL-ef2065',
                farmTokenNonce: 695995,
                farmTokenAmount: '6347318843650466162',
                farmingTokenID: 'LKLP-03a2fa',
                farmingTokenNonce: 1051074,
                farmingTokenAmount: '6347318843650466162',
            },
            createdWithMerge: true,
        });
    });

    it('should decode exit farm proxy event', () => {
        const exitFarmProxyEvent = new ExitFarmProxyEvent(
            rawExitFarmProxyEvent,
        );
        expect(exitFarmProxyEvent.toJSON()).toEqual({
            address:
                'drt1qqqqqqqqqqqqqpgqrc4pg2xarca9z34njcxeur622qmfjp8w2jps6e79sp',
            identifier: 'exitFarmProxy',
            caller: 'drt1qpesj652rr4fqt4ta8r34e3lvaxek94a2cedn0ff69uj02auecnqa6rrvy',
            block: 9266409,
            epoch: 643,
            timestamp: 1651755516,
            farmAddress:
                'drt1qqqqqqqqqqqqqpgqyawg3d9r4l27zue7e9sz7djf7p9aj3sz2jpsxnfv3h',
            wrappedFarmToken: {
                tokenID: 'LKFARM-9d1ea8',
                nonce: 8074823,
                amount: '2352200000000000000',
            },
            wrappedFarmAttributes: {
                farmTokenID: 'REWAMOAFL-ef2065',
                farmTokenNonce: 692078,
                farmTokenAmount: '6190019886884648569',
                farmingTokenID: 'LKLP-03a2fa',
                farmingTokenNonce: 985117,
                farmingTokenAmount: '6190019886884648569',
            },
            farmingToken: {
                tokenID: 'LKLP-03a2fa',
                nonce: 985117,
                amount: '2352200000000000000',
            },
            rewardToken: {
                tokenID: 'LKMOA-aab910',
                nonce: 2630660,
                amount: '9506632551545870494600',
            },
        });
    });

    it('should decode claim rewards proxy event', () => {
        const claimRewardsProxyEvent = new ClaimRewardsProxyEvent(
            rawClaimRewardsProxyEvent,
        );
        expect(claimRewardsProxyEvent.toJSON()).toEqual({
            address:
                'drt1qqqqqqqqqqqqqpgqrc4pg2xarca9z34njcxeur622qmfjp8w2jps6e79sp',
            identifier: 'claimRewardsProxy',
            caller: 'drt1hcp4gdp5rxguqz50303ckawfkzfhjeckgf8yshpf6t3gvs465qgqvtv43e',
            block: 9266424,
            epoch: 643,
            timestamp: 1651755606,
            farmAddress:
                'drt1qqqqqqqqqqqqqpgqyawg3d9r4l27zue7e9sz7djf7p9aj3sz2jpsxnfv3h',
            oldWrappedFarmToken: {
                tokenID: 'LKFARM-9d1ea8',
                nonce: 7735612,
                amount: '1161978112252118146',
            },
            newWrappedFarmToken: {
                tokenID: 'REWAMOAFL-ef2065',
                nonce: 695988,
                amount: '1161978112252118146',
            },
            oldWrappedFarmAttributes: {
                farmTokenID: 'REWAMOAFL-ef2065',
                farmTokenNonce: 576971,
                farmTokenAmount: '1161978112252118146',
                farmingTokenID: 'LKLP-03a2fa',
                farmingTokenNonce: 955398,
                farmingTokenAmount: '1161978112252118146',
            },
            newWrappedFarmAttributes: {
                farmTokenID: 'REWAMOAFL-ef2065',
                farmTokenNonce: 695988,
                farmTokenAmount: '1161978112252118146',
                farmingTokenID: 'LKLP-03a2fa',
                farmingTokenNonce: 955398,
                farmingTokenAmount: '1161978112252118146',
            },
            createdWithMerge: false,
            rewardToken: {
                tokenID: 'LKMOA-aab910',
                nonce: 2630660,
                amount: '136612574091656043899502',
            },
        });
    });
});
