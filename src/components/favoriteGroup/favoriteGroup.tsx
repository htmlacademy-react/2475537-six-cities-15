import { CardType } from '../../const';
import { OfferPreview } from '../../types/offer';
import RentCard from '../rentCard/rentCard';

type FavoriteGroupProps = {
  offers: OfferPreview[];
  city: string;
  onFavoriteStatusChanged?: (offer: OfferPreview) => void;
};

function FavoriteGroup({ offers, city, onFavoriteStatusChanged }: FavoriteGroupProps) {
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((o) => (<RentCard offer={o} key={o.id} cardType={CardType.Favorite} onFavoriteStatusChanged={onFavoriteStatusChanged} />))}
      </div>
    </>
  );
}

export default FavoriteGroup;
