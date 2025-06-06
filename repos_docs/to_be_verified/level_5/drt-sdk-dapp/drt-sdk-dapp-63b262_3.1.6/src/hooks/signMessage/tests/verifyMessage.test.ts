import { verifyMessage } from '../verifyMessage';

jest.mock('../getVerifier', () => ({
  getVerifier: jest.fn().mockImplementation(() => ({
    verify: jest.fn().mockImplementation(() => true)
  }))
}));

describe('Verify Message test', () => {
  const signature =
    '{"address":"drt1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqd4f00j","message":"0x68656c6c6f20776f726c64","signature":"0x795b8437bdbcc9c2a3f610a96d95bd393d23d584d40121ea388999ebd9a34157117a665c86a0285cb207e7da23f4fced848f81c218ebab735da22a5cdb00f803","version":1,"signer":"DrtJS"}';

  it('should verify message successfully', () => {
    const { address, isVerified, message } = verifyMessage(signature);

    expect(address).toStrictEqual(
      'drt1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqd4f00j'
    );

    expect(isVerified).toStrictEqual(true);
    expect(message).toStrictEqual('hello world');
  });
});
