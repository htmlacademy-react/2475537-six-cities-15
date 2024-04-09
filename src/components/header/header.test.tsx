import { render, screen } from '@testing-library/react';
import Header from './header';
import { withHistory, withStore } from '../../mocks/mockComponents';
import { AuthorizationStatus } from '../../const';
import { Namespace } from '../../store/const';

vi.mock('./logged', () => ({
  default: () => (<p>Logged</p>)
}));

vi.mock('./notLogged', () => ({
  default: () => (<p>Not Logged</p>)
}));


describe('Header', () => {
  it('should render Header component when user is not logged', () => {
    const { withStoreComponent } = withStore(<Header />, { [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null } });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(/Not Logged/i)).toBeInTheDocument();
  });

  it('should render Header when user is logged', () => {
    const { withStoreComponent } = withStore(<Header />, { [Namespace.User]: { authorizationStatus: AuthorizationStatus.Auth, user: null } });
    const withHistoryComponent = withHistory(withStoreComponent);

    render(withHistoryComponent);

    expect(screen.getByText(/Logged/i)).toBeInTheDocument();
  });
});
