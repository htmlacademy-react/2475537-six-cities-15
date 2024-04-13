import { OfferPreview } from '../../types/offer';
import { SortOrder, SortType } from '../../types/sort';

export function sortOffers(offers: OfferPreview[], order: SortOrder) {
  switch (order.type) {
    case SortType.Popular:
      return offers;
    case SortType.PriceLowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortType.PriceHighToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortType.Rating:
      return [...offers].sort((a, b) => b.rating - a.rating);
  }
}
