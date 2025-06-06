import { TokenHelpers } from "src/utils/token.helpers";

describe('Token Utils', () => {
  describe('canBool', () => {
    it('Check function canBool', () => {
      expect(TokenHelpers.canBool('EWLD-e23800')).toBeFalsy();
      expect(TokenHelpers.canBool('MARS-96823d-01')).toBeFalsy();
    });
  });

  describe('getUrlHash', () => {
    it('Check function getUrlHash', () => {
      expect(TokenHelpers.getUrlHash('https://media.dharitri.org/nfts/asset/QmUUhAmBQKGkSqN775NZAAYUaqd8ssMadFg2UYSECSERz6/914.png')).toStrictEqual('dde8c4e1');
    });
  });

  describe('getThumbnailUrlIdentifier', () => {
    it('Check function getThumbnailUrlIdentifier', () => {
      expect(TokenHelpers.getThumbnailUrlIdentifier('MOS-b9b4b2-2710', 'https://media.dharitri.org/nfts/asset/QmUUhAmBQKGkSqN775NZAAYUaqd8ssMadFg2UYSECSERz6/914.png'))
        .toStrictEqual('MOS-b9b4b2-dde8c4e1');
    });
  });
});
