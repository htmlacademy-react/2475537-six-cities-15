import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { authorize, fetchFavorites } from '../../api/api-actions';
import { APIRoutes } from '../../api/routes';
import { withHistory, withStore } from '../../mocks/mockComponents';
import { extractActionsTypes } from '../../mocks/mocks';
import LoginForm from './loginForm';

describe('LoginForm', () => {
  it('should render LoginForm correctly', () => {
    const { withStoreComponent } = withStore(<LoginForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const emailElementTestId = 'email';
    const passwordElementTestId = 'password';
    const expectedLoginValue = 'petr';
    const expectedPasswordValue = '123456';
    const { withStoreComponent } = withStore(<LoginForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedLoginValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedLoginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });

  it('should dispatch login event', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<LoginForm />);
    const withHistoryComponent = withHistory(withStoreComponent);
    mockAxiosAdapter.onPost(APIRoutes.Login).reply(200, { token: 'secret' });
    mockAxiosAdapter.onGet(APIRoutes.Favorites).reply(200);

    render(withHistoryComponent);
    await userEvent.click(screen.getByTestId('sign-in-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      authorize.pending.type,
      fetchFavorites.pending.type,
      authorize.fulfilled.type,
      fetchFavorites.fulfilled.type,
    ]);
  });
});
