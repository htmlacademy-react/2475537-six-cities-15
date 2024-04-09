import { PropsWithChildren } from 'react';
import { AppRoute } from '../../const';
import { isAuthorized } from '../../services/utils';
import { OfferPreview } from '../../types/offer';
import HostCard from '../hostCard/hostCard';
import Rating from '../rating/rating';
import ReviewList from '../reviewList/reviewList';
import { useAppSelector } from '../../hooks/index';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSingleOfferSelector } from '../../store/reducer/data/selectors';

type RentCardFullProps = {
  onFavoriteStatusChanged?: (offer: OfferPreview) => void;
};

function RentCardFull({ children, onFavoriteStatusChanged }: PropsWithChildren<RentCardFullProps>) {
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);
  const navigate = useNavigate();
  const offer = useAppSelector(useSingleOfferSelector);

  const handleFavoriteStatusChanged = (changedOffer: OfferPreview) => {
    if (!isAuthorized(authorizationStatus)) {
      navigate(AppRoute.Login);
    }
    onFavoriteStatusChanged?.(changedOffer);
  };

  if (!offer) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.map((img) => (
            <div className="offer__image-wrapper" key={Math.random()}>
              <img className="offer__image" src={img} alt={offer.title} />
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
            <h1 className="offer__name">{offer.title}</h1>
            <button className={`offer__bookmark-button button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
              type="button"
              data-testid='offer-is-favorite'
              onClick={() => handleFavoriteStatusChanged(offer)}
            >
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <Rating rating={offer.rating} className="offer" showNumberValue />
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">Apartment</li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((item) => (<li className="offer__inside-item" key={Math.random()}>{item}</li>))}
            </ul>
          </div>
          <HostCard host={offer.host} />
          <ReviewList offerId={offer.id} />
        </div>
      </div>
      {children}
    </section>);
}

export default RentCardFull;
