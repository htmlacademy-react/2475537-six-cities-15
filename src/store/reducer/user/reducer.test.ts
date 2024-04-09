import { AuthorizationStatus } from '../../../const';
import { checkAuthorization, authorize, signOut } from '../../../api/api-actions';
import { userProcess } from './reducer';
import { makeFakeUser } from '../../../mocks/mocks';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: makeFakeUser() };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const emptyInitialState = { authorizationStatus: AuthorizationStatus.Unknown, user: null };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(emptyInitialState);
  });

  it('should set "Auth" status and user with "checkAuthorization.fulfilled" action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: makeFakeUser() };

    const result = userProcess.reducer(undefined, checkAuthorization.fulfilled(expectedState.user, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" status and reset user with "checkAuthorization.rejected" action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    const result = userProcess.reducer(undefined, checkAuthorization.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" status and user with "authorize.fulfilled" action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: makeFakeUser() };

    const result = userProcess.reducer(undefined, authorize.fulfilled(expectedState.user, '', { login:'', password: '' }));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" status and reset user with "authorize.rejected" action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    const result = userProcess.reducer(undefined, authorize.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" status and reset user with "signOut.fulfilled" action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    const result = userProcess.reducer(undefined, signOut.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
