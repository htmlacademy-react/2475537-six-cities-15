import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import { OfferInfo } from '../../types/offer';

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

  const renderRegularCard = () => (
    <article className="cities__card place-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
    </article>
  );

  const renderFavoriteCard = () => (
    <article className="favorites__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={mainImage.src}
            width={150}
            height={110}
            alt={mainImage.description}
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.priceCurrency}{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;{offer.priceType}</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
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
    </article>
  );

  return cardType === CardType.Regular ? renderRegularCard() : renderFavoriteCard();
}

export default RentCard;
