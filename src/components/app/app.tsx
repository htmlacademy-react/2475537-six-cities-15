import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Review } from '../../types/offer';
import Layout from '../layout/layout';
import PrivateRoute from '../privateRoute/privateRoute';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/notFound/notFound';
import Offer from '../../pages/offer/offer';
import ScrollTop from '../scrollTop/scrollTop';
import { useAppDispatch } from '../../hooks';
import { fetchOffers } from '../../api/api-actions';

type AppProps = {
  cardsCount: number;
  reviews: Review[];
};

function App({ cardsCount, reviews }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main cardsCount={cardsCount} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer reviews={reviews}/>}
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
    </BrowserRouter>);
}

export default App;
