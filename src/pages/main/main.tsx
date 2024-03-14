import { useState } from 'react';
import RentCardList from '../../components/rentCardList/rentCardList';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { sortOffers } from './utils';
import { allowedSorting, SortOrder } from '../../types/sort';
import OfferSorting from '../../components/offerSorting/offerSorting';

type MainProps = {
  cardsCount: number;
};

function Main({ cardsCount }: MainProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentSorting, setCurrentSorting] = useState(allowedSorting[0]);
  const { offers, currentCity} = useAppSelector((state) => state);

  const filteredOffers = sortOffers(offers.filter((o) => o.city === currentCity.code), currentSorting);

  const handleCardChanged = (newActiveCard: number | null) => {
    setActiveCard(newActiveCard);
  };

  const handleSortingChanged = (newSorting: SortOrder) => {
    setCurrentSorting(newSorting);
  };

  return (
    <main className="page__main page__main--index">
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffers.length} places to stay in {currentCity.title}</b>
            <OfferSorting allowedSorting={allowedSorting} currentSorting={currentSorting} onSortChanged={handleSortingChanged} />
            <RentCardList cardsCount={cardsCount} offers={filteredOffers} onActiveCardChanged={handleCardChanged}/>
          </section>
          <div className="cities__right-section">
            <Map offers={filteredOffers} activeOffer={activeCard} className="cities" center={currentCity.coords} />
          </div>
        </div>
      </div>
    </main>);
}

export default Main;
