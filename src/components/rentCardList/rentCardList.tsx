import RentCard from '../../components/rentCard/rentCard';
import { CardType } from '../../const';
import { OfferInfo } from '../../types/offer';

type RentCardListProps = {
  cardsCount: number;
  offers: OfferInfo[];
  onActiveCardChanged?: (activeCard: number | null) => void;
};

function RentCardList({ cardsCount, offers, onActiveCardChanged }: RentCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => i < cardsCount ? <RentCard key={offer.id} offer={offer} onActiveCardChanged={onActiveCardChanged} cardType={CardType.Regular} /> : null)}
    </div>);
}

export default RentCardList;
