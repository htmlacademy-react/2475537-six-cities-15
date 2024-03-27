import FavoriteGroup from '../../components/favoriteGroup/favoriteGroup';
import Loader from '../../components/loader/loader';
import { useAppSelector } from '../../hooks';
import { OfferPreview } from '../../types/offer';

function Favorites() {
  const { offers, isDataLoading } = useAppSelector((state) => ({
    offers: state.offers.filter((o) => o.isFavorite),
    isDataLoading: state.isDataLoading,
  }));

  const groupOffers = () => {
    const cities = new Set(offers.map((o) => o.city.name));
    const groupedOffers = new Map<string, OfferPreview[]>();
    for (const city of cities) {
      groupedOffers.set(city, offers.filter((o) => o.city.name === city));
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

  if (isDataLoading) {
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
