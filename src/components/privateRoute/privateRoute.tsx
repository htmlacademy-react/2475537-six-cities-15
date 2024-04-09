import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { isAuthorized } from '../../services/utils';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    isAuthorized(authorizationStatus)
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
