import { useState } from 'react';
import RentCardList from '../../components/rentCardList/rentCardList';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import { useAppSelector } from '../../hooks';
import { sortOffers } from './utils';
import { allowedSorting, SortOrder } from '../../types/sort';
import OfferSorting from '../../components/offerSorting/offerSorting';
import { fetchSetFavoriteStatus } from '../../api/api-calls';
import { OfferPreview } from '../../types/offer';
import { changeOffer } from '../../store/actions';
import { store } from '../../store/index';

type MainProps = {
  cardsCount: number;
};

function Main({ cardsCount }: MainProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentSorting, setCurrentSorting] = useState(allowedSorting[0]);

  const { offers, currentCity, isDataLoading } = useAppSelector((state) => ({
    currentCity: state.currentCity,
    offers: state.offers.filter((o) => o.city.name === state.currentCity.code),
    isDataLoading: state.isDataLoading,
  }));

  const filteredOffers = sortOffers(offers, currentSorting);

  const handleActiveCardChanged = (newActiveCard: string | null) => {
    setActiveCard(newActiveCard);
  };

  const handleSortingChanged = (newSorting: SortOrder) => {
    setCurrentSorting(newSorting);
  };

  const handleFavoriteStatusChanged = (offerId: string, isFavorite: boolean) => {
    fetchSetFavoriteStatus(offerId, isFavorite)
      .then(() => {
        const changedOffer = offers.find((o) => o.id === offerId) as OfferPreview;
        store.dispatch(changeOffer({ ...changedOffer, isFavorite }));
      });
  };

  if (isDataLoading) {
    return (<Loader />);
  }

  return (
    <main className="page__main page__main--index">
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffers.length} places to stay in {currentCity.title}</b>
            <OfferSorting allowedSorting={allowedSorting} currentSorting={currentSorting} onSortChanged={handleSortingChanged} />
            <RentCardList cardsCount={cardsCount} offers={filteredOffers} onActiveCardChanged={handleActiveCardChanged} onFavoriteStatusChanged={handleFavoriteStatusChanged}/>
          </section>
          <div className="cities__right-section">
            <Map offers={filteredOffers} activeOffer={activeCard} className="cities" center={currentCity.location} />
          </div>
        </div>
      </div>
    </main>);
}

export default Main;
