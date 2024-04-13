import { memo } from 'react';
import RentCard from '../../components/rentCard/rentCard';
import { CardType } from '../../const';
import { OfferPreview } from '../../types/offer';

type RentCardListProps = {
  offers: OfferPreview[];
  onActiveCardChanged?: (activeCard: string | null) => void;
  onFavoriteStatusChanged?: (offerId: string, isFavorite: boolean) => void;
};

function RentCardList({ offers, onActiveCardChanged, onFavoriteStatusChanged }: RentCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <RentCard key={offer.id} offer={offer} onActiveCardChanged={onActiveCardChanged} cardType={CardType.Regular} onFavoriteStatusChanged={onFavoriteStatusChanged}/>)}
    </div>);
}

export default memo(RentCardList);
