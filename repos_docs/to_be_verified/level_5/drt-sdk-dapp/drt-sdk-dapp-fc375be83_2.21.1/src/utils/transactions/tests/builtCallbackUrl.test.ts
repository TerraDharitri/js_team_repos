import { builtCallbackUrl } from '../builtCallbackUrl';

describe('builtCallbackUrl tests', () => {
  const url = 'https://wallet.dharitri.org';

  test('returns callbackUrl unmodified if urlParams is empty', () => {
    expect(builtCallbackUrl({ callbackUrl: url })).toBe(url);
  });

  test('adds urlParams', () => {
    expect(
      builtCallbackUrl({
        callbackUrl: url,
        urlParams: { status: 'success' }
      })
    ).toBe('https://wallet.dharitri.org/?status=success');
  });

  test('adds urlParams and keeps existing hash', () => {
    expect(
      builtCallbackUrl({
        callbackUrl: url + '#test',
        urlParams: { status: 'success' }
      })
    ).toBe('https://wallet.dharitri.org/?status=success#test');
  });

  test('keeps existing urlParams', () => {
    expect(
      builtCallbackUrl({
        callbackUrl: url + '?page=1',
        urlParams: { status: 'success' }
      })
    ).toBe('https://wallet.dharitri.org/?page=1&status=success');
  });

  test('keeps existing hash', () => {
    expect(
      builtCallbackUrl({
        callbackUrl: url + '?page=1#logs',
        urlParams: { status: 'success' }
      })
    ).toBe('https://wallet.dharitri.org/?page=1&status=success#logs');
  });

  test('throws error if callbackUrl is invalid and urlParams are defined', () => {
    expect(
      builtCallbackUrl({
        callbackUrl: '',
        urlParams: { status: 'success' }
      })
    ).toBe('');
  });
});
