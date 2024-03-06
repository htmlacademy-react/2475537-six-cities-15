import { OfferInfo, Review } from '../../types/offer';
import HostCard from '../hostCard/hostCard';
import Rating from '../rating/rating';
import ReviewList from '../reviewList/reviewList';

type RentCardFullProps = {
  offer: OfferInfo;
  reviews: Review[];
};

function RentCardFull({ offer, reviews }: RentCardFullProps) {
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.map((img) => (
            <div className="offer__image-wrapper" key={Math.random()}>
              <img className="offer__image" src={img.src} alt={img.description} />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{offer.name}</h1>
            <button className={`offer__bookmark-button button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <Rating rating={offer.rating} className="offer" showNumberValue={true} />
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">Apartment</li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offer.maxGuests} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">{offer.priceCurrency}{offer.price}</b>
            <span className="offer__price-text">&nbsp;{offer.priceType}</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.inside.map((item) => (<li className="offer__inside-item" key={Math.random()}>{item}</li>))}
            </ul>
          </div>
          <HostCard host={offer.host} />
          <ReviewList reviews={reviews}/>
        </div>
      </div>
      <section className="offer__map map" />
    </section>);
}

export default RentCardFull;
