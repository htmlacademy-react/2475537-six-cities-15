import { AuthorizationStatus } from '../../../const';
import { makeFakeUser } from '../../../mocks/mocks';
import { Namespace } from '../../const';
import { useAuthorizationStatusSelector, useUserSelector } from './selectors';

describe('ApplicationProcess selectors', () => {
  const state = {
    [Namespace.User]: {
      user: makeFakeUser(),
      authorizationStatus: AuthorizationStatus.Auth,
    }
  };

  it('should return user from state', () => {
    const { user } = state[Namespace.User];
    const result = useUserSelector(state);
    expect(result).toEqual(user);
  });

  it('should return authorizationStatus from state', () => {
    const { authorizationStatus } = state[Namespace.User];
    const result = useAuthorizationStatusSelector(state);
    expect(result).toBe(authorizationStatus);
  });
});
