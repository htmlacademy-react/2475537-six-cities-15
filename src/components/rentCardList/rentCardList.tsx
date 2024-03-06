import { useState } from 'react';
import RentCard from '../../components/rentCard/rentCard';
import { CardType } from '../../const';
import { OfferInfo } from '../../types/offer';

type RentCardListProps = {
  cardsCount: number;
  offers: OfferInfo[];
};

function RentCardList({ cardsCount, offers }: RentCardListProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const activeCardChanged = (newActiveCard: number | null) => {
    setActiveCard(newActiveCard);
  };

  return (
    <div className={`cities__places-list places__list tabs__content active-card-${activeCard}`}>
      {offers.map((offer, i) => i < cardsCount ? <RentCard key={offer.id} offer={offer} onActiveCardChanged={activeCardChanged} cardType={CardType.Regular} /> : null)}
    </div>);
}

export default RentCardList;
