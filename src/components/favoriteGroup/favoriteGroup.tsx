import { CardType } from '../../const';
import { OfferPreview } from '../../types/offer';
import RentCard from '../rentCard/rentCard';

type FavoriteGroupProps = {
  offers: OfferPreview[];
  city: string;
};

function FavoriteGroup({ offers, city }: FavoriteGroupProps) {
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
        {offers.map((o) => (<RentCard offer={o} key={o.id} cardType={CardType.Favorite} />))}
      </div>
    </>
  );
}

export default FavoriteGroup;
