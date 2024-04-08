import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { Outlet } from 'react-router-dom';
import App from './app';
import { withHistory, withStore } from '../../mocks/mockComponents';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Namespace } from '../../store/const';

vi.mock('../layout/layout', () => ({
  default: () => (<Outlet />)
}));

vi.mock('../../pages/main/main', () => ({
  default: () => (<p>Main page</p>)
}));

vi.mock('../../pages/offer/offer', () => ({
  default: () => (<p>Offer page</p>)
}));

vi.mock('../../pages/favorites/favorites', () => ({
  default: () => (<p>Favorites page</p>)
}));

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render main page when user navigate to "/"', () => {
    const { withStoreComponent } = withStore(<App />, { [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, } });
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    mockHistory.push(AppRoute.Root);

    render(withHistoryComponent);

    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });

  it('should render offer page when user navigate to "/offer"', () => {
    const { withStoreComponent } = withStore(<App />, { [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, } });
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    mockHistory.push(AppRoute.Offer);

    render(withHistoryComponent);

    expect(screen.getByText(/Offer page/i)).toBeInTheDocument();
  });

  it('should render favorites page when user navigate to "/favorites"', () => {
    const { withStoreComponent } = withStore(<App />, { [Namespace.User]: { authorizationStatus: AuthorizationStatus.Auth, } });
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    mockHistory.push(AppRoute.Favorites);

    render(withHistoryComponent);

    expect(screen.getByText(/Favorites page/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    const { withStoreComponent } = withStore(<App />, { [Namespace.User]: { authorizationStatus: AuthorizationStatus.Auth, } });
    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    mockHistory.push('/unknown-route');

    render(withHistoryComponent);

    expect(screen.getByText('404. Not found')).toBeInTheDocument();
  });
});
