import { fetchSetNotFavoriteStatus } from '../../api/api-actions';
import FavoriteGroup from '../../components/favorite-group/favorite-group';
import Loader from '../../components/loader/loader';
import { OfferPreview } from '../../types/offer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useFavoritesSelector, useIsFavoritesLoadingSelector } from '../../store/reducer/data/selectors';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function Favorites() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(useFavoritesSelector);
  const isFavoritesLoading = useAppSelector(useIsFavoritesLoadingSelector);

  const handleFavoriteStatusChanged = (offerId: string) => {
    dispatch(fetchSetNotFavoriteStatus(offerId));
  };

  const groupOffers = () => {
    const cities = new Set(favorites.map((o) => o.city.name));
    const groupedOffers = new Map<string, OfferPreview[]>();
    for (const city of cities) {
      groupedOffers.set(city, favorites.filter((o) => o.city.name === city));
    }

    return groupedOffers;
  };

  const generateGroups = () => {
    const result: React.JSX.Element[] = [];
    for (const [city, cityOffers] of groupOffers()) {
      result.push(
        <li className="favorites__locations-items" key={`group_${city}`}>
          <FavoriteGroup city={city} offers={cityOffers} onFavoriteStatusChanged={handleFavoriteStatusChanged} />
        </li>
      );
    }
    return result;
  };

  if (isFavoritesLoading) {
    return (<Loader />);
  }

  const hasFavorites = favorites.length > 0;

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            {hasFavorites && (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {generateGroups()}
                </ul>
              </>
            )}
            {!hasFavorites && (
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Root} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>);
}

export default Favorites;
