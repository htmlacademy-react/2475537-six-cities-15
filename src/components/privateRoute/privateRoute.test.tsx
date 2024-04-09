import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus } from '../../const';
import { withHistory } from '../../mocks/mockComponents';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { render, screen } from '@testing-library/react';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  const renderBaseComponent = (authorizationStatus: AuthorizationStatus, publicText: string, privateText: string) => (
    <Routes>
      <Route path={AppRoute.Login} element={<span>{publicText}</span>} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute authorizationStatus={authorizationStatus}>
          <span>{privateText}</span>
        </PrivateRoute>
      }
      />
    </Routes>
  );

  it('should render component for public route, when user not authorized', () => {
    const publicText = 'public route';
    const privateText = 'private route';
    const preparedComponent = withHistory(
      renderBaseComponent(AuthorizationStatus.NoAuth, publicText, privateText),
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(publicText)).toBeInTheDocument();
    expect(screen.queryByText(privateText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const privateText = 'private route';
    const publicText = 'public route';
    const preparedComponent = withHistory(
      renderBaseComponent(AuthorizationStatus.Auth, publicText, privateText),
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(privateText)).toBeInTheDocument();
    expect(screen.queryByText(publicText)).not.toBeInTheDocument();
  });
});
