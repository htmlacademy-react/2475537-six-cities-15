import RentCard from '../../components/rentCard/rentCard';
import { OfferInfo } from '../../types/offer';

type RentCardListProps = {
  cardsCount: number;
  offers: OfferInfo[];
  onActiveCardChanged?: (activeCard: number) => void;
};

function RentCardList({ cardsCount, offers, onActiveCardChanged }: RentCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({ length: cardsCount }, (_, i) => i < offers.length ? <RentCard key={offers[i].id} offer={offers[i]} onActiveCardChanged={onActiveCardChanged} /> : undefined)}
    </div>);
}

export default RentCardList;
