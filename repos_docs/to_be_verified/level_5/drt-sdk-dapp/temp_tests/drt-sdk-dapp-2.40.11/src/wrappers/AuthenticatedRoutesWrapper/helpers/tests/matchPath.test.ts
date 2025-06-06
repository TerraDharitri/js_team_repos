//
import { matchPath } from '../matchPath';

describe('matchPath', () => {
  it('should return true for simple routes', () => {
    const result = matchPath('/home', '/home');
    expect(Boolean(result)).toBe(true);
  });
  it('should return true for child routes', () => {
    const result = matchPath(
      '/accounts/:id',
      '/accounts/drt1abcd?withGuardianInfo=true'
    );
    expect(Boolean(result)).toBe(true);
  });
  it('should return true for nested child routes', () => {
    const result = matchPath(
      '/accounts/:id/tokens',
      '/accounts/drt1abcd/tokens'
    );
    expect(Boolean(result)).toBe(true);
  });
});
