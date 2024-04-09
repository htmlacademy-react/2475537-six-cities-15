import { memo } from 'react';
import RentCard from '../../components/rentCard/rentCard';
import { CardType } from '../../const';
import { OfferPreview } from '../../types/offer';

type RentCardListProps = {
  cardsCount: number;
  offers: OfferPreview[];
  onActiveCardChanged?: (activeCard: string | null) => void;
  onFavoriteStatusChanged?: (offerId: string, isFavorite: boolean) => void;
};

function RentCardList({ cardsCount, offers, onActiveCardChanged, onFavoriteStatusChanged }: RentCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => i < cardsCount
        ? <RentCard key={offer.id} offer={offer} onActiveCardChanged={onActiveCardChanged} cardType={CardType.Regular} onFavoriteStatusChanged={onFavoriteStatusChanged}/>
        : null)}
    </div>);
}

export default memo(RentCardList);
