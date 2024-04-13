import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import PrivateRoute from '../privateRoute/privateRoute';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/notFound/notFound';
import Offer from '../../pages/offer/offer';
import ScrollTop from '../scrollTop/scrollTop';
import Loader from '../loader/loader';
import { useAppSelector } from '../../hooks';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';
import { isCheckingAuthorization } from '../../services/utils';

function App() {
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);

  if (isCheckingAuthorization(authorizationStatus)) {
    return (<Loader />);
  }

  return (
    <HelmetProvider>
      <ScrollTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
        </Route>
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HelmetProvider>);
}

export default App;
