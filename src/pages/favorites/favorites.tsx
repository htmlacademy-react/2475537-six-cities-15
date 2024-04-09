import { fetchSetNotFavoriteStatus } from '../../api/api-actions';
import FavoriteGroup from '../../components/favoriteGroup/favoriteGroup';
import Loader from '../../components/loader/loader';
import { OfferPreview } from '../../types/offer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useFavoritesSelector, useIsFavoritesLoadingSelector } from '../../store/reducer/data/selectors';

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

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {generateGroups()}
          </ul>
        </section>
      </div>
    </main>);
}

export default Favorites;
