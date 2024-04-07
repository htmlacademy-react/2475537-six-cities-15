import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { isAuthorized } from '../../services/utils';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);

  return (
    isAuthorized(authorizationStatus)
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
