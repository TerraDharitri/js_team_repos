import { getModifiedLoginToken } from '../getModifiedLoginToken';

describe('getMultiSigLoginToken', () => {
  test('returns null if loginToken or multisig is null', async () => {
    const result = await getModifiedLoginToken({
      loginToken: undefined,
      extraInfoData: {
        multisig:
          'drt1qqqqqqqqqqqqqpgq944h7h6mckw6q0d3g223cjz4ytvken86u00slz07qs'
      }
    });

    expect(result).toBeNull();
  });

  test('returns null if data or timestamp is missing', async () => {
    const result = await getModifiedLoginToken({
      loginToken: 'invalidLoginToken',
      extraInfoData: {
        multisig:
          'drt1qqqqqqqqqqqqqpgq944h7h6mckw6q0d3g223cjz4ytvken86u00slz07qs'
      }
    });

    expect(result).toBeNull();
  });

  test('returns valid tokenLogin for valid input', async () => {
    const validInput = {
      loginToken:
        'aHR0cHM6Ly9kZXZuZXQuZGhhcml0cml4LmNvbQ.d9ee880c609d5fe482a675826eb7e74f707c882e796ec191913a6c18d762685d.86400.eyJ0aW1lc3RhbXAiOjE3MDYxODAwMjd9',
      extraInfoData: {
        multisig:
          'drt1qqqqqqqqqqqqqpgq944h7h6mckw6q0d3g223cjz4ytvken86u00slz07qs'
      }
    };

    const result = await getModifiedLoginToken(validInput);

    const expectedTokenLogin =
      'aHR0cHM6Ly9kZXZuZXQuZGhhcml0cml4LmNvbQ.d9ee880c609d5fe482a675826eb7e74f707c882e796ec191913a6c18d762685d.86400.eyJtdWx0aXNpZyI6ImRydDFxcXFxcXFxcXFxcXFxcGdxOTQ0aDdoNm1ja3c2cTBkM2cyMjNjano0eXR2a2VuODZ1MDBzbHowN3FzIiwidGltZXN0YW1wIjoxNzA2MTgwMDI3fQ';

    expect(result).toEqual(expectedTokenLogin);
  });
});
