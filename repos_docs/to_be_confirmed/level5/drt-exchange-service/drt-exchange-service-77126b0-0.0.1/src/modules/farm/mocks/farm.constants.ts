import { Address } from '@terradharitri/sdk-core/out';

export const farms = [
    {
        address: Address.fromHex(
            '0000000000000000000000000000000000000000000000000000000000000021',
        ).bech32(),
        farmedTokenID: 'MOA-123456',
        farmTokenID: 'rewaMOAFL-abcdef',
        farmingTokenID: 'rewaMOALP-abcdef',
        farmTotalSupply: '2000000000000000000',
        farmingTokenReserve: '1500000000000000000',
        rewardsPerBlock: '1000000000000000000',
        rewardPerShare: '0',
    },
    {
        address: Address.fromHex(
            '0000000000000000000000000000000000000000000000000000000000000031',
        ).bech32(),
        farmedTokenID: 'MOA-123456',
        farmTokenID: 'rewaMOAF-abcdef',
        farmingTokenID: 'rewaMOALP-abcdef',
        farmTotalSupply: '1000000000000000000',
        farmingTokenReserve: '1000000000000000000',
        rewardsPerBlock: '1000000000000000000',
        rewardPerShare: '0',
    },
    {
        address: Address.fromHex(
            '0000000000000000000000000000000000000000000000000000000000000032',
        ).bech32(),
        farmedTokenID: 'MOA-123456',
        farmTokenID: 'rewaMOAFL-bcdefg',
        farmingTokenID: 'rewaMOALP-abcdef',
        farmTotalSupply: '1000000000000000000',
        farmingTokenReserve: '1000000000000000000',
        rewardsPerBlock: '1000000000000000000',
        rewardPerShare: '0',
    },
    {
        address: Address.fromHex(
            '0000000000000000000000000000000000000000000000000000000000000033',
        ).bech32(),
        farmedTokenID: 'TOK4-123456',
        farmTokenID: 'rewaTOK4FL-abcdef',
        farmingTokenID: 'rewaTOK4LP-abcdef',
        farmTotalSupply: '1000000000000000000',
        farmingTokenReserve: '1000000000000000000',
        rewardsPerBlock: '2000000000000000000',
        rewardPerShare: '0',
    },
    {
        address: Address.fromHex(
            '0000000000000000000000000000000000000000000000000000000000000041',
        ).bech32(),
        farmedTokenID: 'MOA-123456',
        farmTokenID: 'rewaMOAFL-ghijkl',
        farmingTokenID: 'rewaMOALP-abcdef',
        farmTotalSupply: '1000000000000000000',
        farmingTokenReserve: '1000000000000000000',
        rewardsPerBlock: '2000000000000000000',
        rewardPerShare: '0',
    },
];
