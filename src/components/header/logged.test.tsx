import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Logged from './logged';
import { withHistory, withStore } from '../../mocks/mockComponents';
import { AuthorizationStatus } from '../../const';
import { Namespace } from '../../store/const';
import { extractActionsTypes, makeFakeStore, makeFakeUser } from '../../mocks/mocks';
import { signOut } from '../../api/api-actions';
import { APIRoutes } from '../../api/routes';
import { clearFavorites } from '../../store/reducer/data/reducer';

describe('Logged', () => {
  const fakeUser = makeFakeUser();

  it('should render Logged component', () => {
    const { withStoreComponent } = withStore(<Logged />, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: fakeUser },
    }));
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
    expect(screen.getByText(fakeUser.email)).toBeInTheDocument();
  });

  it('should dispatch sign out event', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<Logged />, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: fakeUser },
    }));
    const withHistoryComponent = withHistory(withStoreComponent);
    mockAxiosAdapter.onDelete(APIRoutes.Logout).reply(204);

    render(withHistoryComponent);
    await userEvent.click(screen.getByTestId('sign-out-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      signOut.pending.type,
      clearFavorites.type,
      signOut.fulfilled.type,
    ]);
  });
});
