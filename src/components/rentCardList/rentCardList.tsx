import { useState } from 'react';
import RentCard from '../../components/rentCard/rentCard';
import { OfferInfo } from '../../types/offer';

type RentCardListProps = {
  cardsCount: number;
  offers: OfferInfo[];
};

function RentCardList({ cardsCount, offers }: RentCardListProps) {
  const [activeCard, setActiveCard] = useState(0);

  const activeCardChanged = (newActiveCard: number) => {
    setActiveCard(newActiveCard);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({ length: cardsCount }, (_, i) => i < offers.length ? <RentCard key={i} offer={offers[i]} onActiveCardChanged={activeCardChanged} /> : undefined)}
    </div>);
}

export default RentCardList;
