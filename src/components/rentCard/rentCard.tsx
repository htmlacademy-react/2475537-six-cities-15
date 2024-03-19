import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import { OfferInfo } from '../../types/offer';
import Rating from '../rating/rating';

type RentCardProps = {
  offer: OfferInfo;
  onActiveCardChanged?: (activeCard: number | null) => void;
  cardType: CardType;
};


function RentCard({ offer, onActiveCardChanged, cardType }: RentCardProps) {
  const [mainImage] = offer.images;

  const handleMouseOver = () => {
    if (onActiveCardChanged) {
      onActiveCardChanged(offer.id);
    }
  };

  const handleMouseOut = () => {
    if (onActiveCardChanged) {
      onActiveCardChanged(null);
    }
  };

  const className = cardType === CardType.Regular ? 'cities' : 'favorites';
  const imageWidth = cardType === CardType.Regular ? 260 : 150;
  const imageHeight = cardType === CardType.Regular ? 200 : 110;

  return (
    <article className={`${className}__card place-card`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={mainImage.src}
            width={imageWidth}
            height={imageHeight}
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
        <Rating rating={offer.rating} className="place-card" showNumberValue={false} />
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default RentCard;
