import { useEffect, useState, useCallback } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute, CardType } from '../../const';
import RentCardFull from '../../components/rentCardFull/rentCardFull';
import RentCard from '../../components/rentCard/rentCard';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import { fetchSingleOffer, fetchNearOffers, fetchSetNotFavoriteStatus, fetchSetFavoriteStatus } from '../../api/api-actions';
import { useIsNearOffersLoadingSelector, useIsSingleOfferLoadingSelector, useNearOffersSelector, useSingleOfferSelector } from '../../store/reducer/data/selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { OfferPreview } from '../../types/offer';

function Offer() {
  const dispatch = useAppDispatch();
  const offer = useAppSelector(useSingleOfferSelector);
  const isOfferLoading = useAppSelector(useIsSingleOfferLoadingSelector);
  const nearOffers = useAppSelector(useNearOffersSelector);
  const isNearOffersLoading = useAppSelector(useIsNearOffersLoadingSelector);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const { id } = useParams();

  const handleCardChanged = (newActiveCard: string | null) => {
    setActiveCard(newActiveCard);
  };

  const handleFavoriteStatusChanged = useCallback((changedOffer: OfferPreview) => {
    if (changedOffer.isFavorite) {
      dispatch(fetchSetNotFavoriteStatus(changedOffer.id));
    } else {
      dispatch(fetchSetFavoriteStatus(changedOffer.id));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSingleOffer(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchNearOffers(id));
  }, [dispatch, id]);

  if (isOfferLoading) {
    return (<Loader />);
  }

  if (!offer) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return (
    <main className="page__main page__main--offer">
      {!offer && (<Navigate to={AppRoute.Root} />)}
      {offer && (
        <RentCardFull offer={offer} >
          <Map activeOffer={activeCard} className="offer" offers={nearOffers} center={offer.city.location} />
        </RentCardFull>
      )}
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {isNearOffersLoading && (<Loader />)}
          {!isNearOffersLoading && (
            <div className="near-places__list places__list">
              {nearOffers.map((o) => (<RentCard offer={o} key={o.id} cardType={CardType.Regular} onActiveCardChanged={handleCardChanged} onFavoriteStatusChanged={handleFavoriteStatusChanged} />))}
            </div>
          )}
        </section>
      </div>
    </main>);
}

export default Offer;
