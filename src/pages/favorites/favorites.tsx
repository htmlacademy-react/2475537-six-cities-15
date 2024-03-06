import FavoriteGroup from '../../components/favoriteGroup/favoriteGroup';
import { OfferInfo } from '../../types/offer';

type FavoritesProps = {
  offers: OfferInfo[];
};

function Favorites({ offers }: FavoritesProps) {

  const groupOffers = () => {
    const onlyFavorites = offers.filter((o) => o.isFavorite);

    const cities = new Set(onlyFavorites.map((o) => o.city));
    const groupedOffers = new Map<string, OfferInfo[]>();
    for (const city of cities) {
      groupedOffers.set(city, onlyFavorites.filter((o) => o.city === city));
    }

    return groupedOffers;
  };

  const generateGroups = () => {
    const result: React.JSX.Element[] = [];
    for (const [city, cityOffers] of groupOffers()) {
      result.push(
        <li className="favorites__locations-items" key={`group_${city}`}>
          <FavoriteGroup city={city} offers={cityOffers} />
        </li>
      );
    }
    return result;
  };

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
