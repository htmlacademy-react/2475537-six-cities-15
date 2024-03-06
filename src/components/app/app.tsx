import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferInfo, Review } from '../../types/offer';
import Layout from '../layout/layout';
import PrivateRoute from '../privateRoute/privateRoute';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/notFound/notFound';
import Offer from '../../pages/offer/offer';

type AppProps = {
  cardsCount: number;
  offers: OfferInfo[];
  reviews: Review[];
};

function App({ cardsCount, offers, reviews }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main cardsCount={cardsCount} offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer offers={offers} reviews={reviews}/>}
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
