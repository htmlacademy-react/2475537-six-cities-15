import { AppRoute, CardType } from '../../const';
import { OfferPreview } from '../../types/offer';
import RentCard from '../rentCard/rentCard';
import { Link } from 'react-router-dom';

type FavoriteGroupProps = {
  offers: OfferPreview[];
  city: string;
  onFavoriteStatusChanged?: (offerId: string) => void;
};

function FavoriteGroup({ offers, city, onFavoriteStatusChanged }: FavoriteGroupProps) {

  const handleFavoriteStatusChanged = (offerId: string, isFavorite: boolean) => {
    if (isFavorite) {
      onFavoriteStatusChanged?.(offerId);
    }
  };

  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.Root}?city=${city}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((o) => (<RentCard offer={o} key={o.id} cardType={CardType.Favorite} onFavoriteStatusChanged={handleFavoriteStatusChanged} />))}
      </div>
    </>
  );
}

export default FavoriteGroup;
