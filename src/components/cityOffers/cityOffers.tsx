import { useState, useCallback } from 'react';
import RentCardList from '../rentCardList/rentCardList';
import Map from '../map/map';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortOffers } from './utils';
import { allowedSorting, SortOrder } from '../../types/sort';
import OfferSorting from '../offerSorting/offerSorting';
import { fetchSetFavoriteStatus, fetchSetNotFavoriteStatus } from '../../api/api-actions';
import { OfferPreview } from '../../types/offer';
import { useCurrentCitySelector } from '../../store/reducer/application/selectors';

type CityOffersProps = {
  cardsCount: number;
  offers: OfferPreview[];
};

function CityOffers({ cardsCount, offers }: CityOffersProps) {
  const dispatch = useAppDispatch();

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentSorting, setCurrentSorting] = useState(allowedSorting[0]);
  const currentCity = useAppSelector(useCurrentCitySelector);

  const filteredOffers = sortOffers(offers, currentSorting);

  const handleActiveCardChanged = useCallback((newActiveCard: string | null) => {
    setActiveCard(newActiveCard);
  }, []);

  const handleSortingChanged = useCallback((newSorting: SortOrder) => {
    setCurrentSorting(newSorting);
  }, []);

  const handleFavoriteStatusChanged = useCallback((offer: OfferPreview) => {
    if (offer.isFavorite) {
      dispatch(fetchSetNotFavoriteStatus(offer.id));
    } else {
      dispatch(fetchSetFavoriteStatus(offer.id));
    }
  }, [dispatch]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} places to stay in {currentCity.title}</b>
        <OfferSorting allowedSorting={allowedSorting} currentSorting={currentSorting} onSortChanged={handleSortingChanged} />
        <RentCardList cardsCount={cardsCount} offers={filteredOffers} onActiveCardChanged={handleActiveCardChanged} onFavoriteStatusChanged={handleFavoriteStatusChanged} />
      </section>
      <div className="cities__right-section">
        <Map offers={filteredOffers} activeOffer={activeCard} className="cities" center={currentCity.location} />
      </div>
    </div>);
}

export default CityOffers;
