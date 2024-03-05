import { Link } from 'react-router-dom';
import { OfferInfo } from '../../types/offer';

type RentCardProps = {
  offer: OfferInfo;
  onActiveCardChanged?: (activeCard: number) => void;
};


function RentCard({ offer, onActiveCardChanged }: RentCardProps) {
  const [mainImage] = offer.images;

  const onMouseOver = () => {
    if (onActiveCardChanged) {
      onActiveCardChanged(offer.id);
    }
  };

  const onMouseOut = () => {
    if (onActiveCardChanged) {
      onActiveCardChanged(0);
    }
  };

  return (
    <article className="cities__card place-card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={mainImage.src}
            width={260}
            height={200}
            alt={mainImage.description}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.priceCurrency}{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;{offer.priceType}</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>);
}

export default RentCard;
