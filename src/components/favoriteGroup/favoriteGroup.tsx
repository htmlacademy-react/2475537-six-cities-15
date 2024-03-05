import { OfferInfo } from '../../types/offer';
import FavoriteCard from '../favoriteCard/favoriteCard';

type FavoriteGroupProps = {
  offers: OfferInfo[];
  city: string;
};

function FavoriteGroup({ offers, city }: FavoriteGroupProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((o) => (<FavoriteCard offer={o} key={`favorite_${o.id}`}/>))}
      </div>
    </li>);
}

export default FavoriteGroup;
