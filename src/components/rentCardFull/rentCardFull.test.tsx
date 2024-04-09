import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../mocks/mockComponents';
import { makeFakeOfferInfo, makeFakeStore } from '../../mocks/mocks';
import { Namespace } from '../../store/const';
import RentCardFull from './rentCardFull';

vi.mock('../reviewList/reviewList', () => ({
  default: () => (<p></p>)
}));

describe('RentCardFull', () => {
  const offer = makeFakeOfferInfo();

  it('should render RentCardFull component', () => {
    const { withStoreComponent } = withStore(<RentCardFull />, makeFakeStore({
      [Namespace.Data]: {
        offers: [],
        nearOffers: [],
        singleOffer: offer,
        offerReviews: [],
        favorites: [],
        isDataLoading: true,
        isSingleOfferLoading: false,
        isNearOffersLoading: true,
        isOfferReviewsLoading: true,
        isFavoritesLoading: true,
      },
    }));
    const withHistoryComponent = withHistory(withStoreComponent);
    render(withHistoryComponent);

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(`${offer.bedrooms} Bedrooms`)).toBeInTheDocument();
    expect(screen.getByText(`Max ${offer.maxAdults} adults`)).toBeInTheDocument();
  });

  it('should render RentCardFull component with isFavorite mark', () => {
    offer.isFavorite = true;
    const { withStoreComponent } = withStore(<RentCardFull />, makeFakeStore({
      [Namespace.Data]: {
        offers: [],
        nearOffers: [],
        singleOffer: offer,
        offerReviews: [],
        favorites: [],
        isDataLoading: true,
        isSingleOfferLoading: false,
        isNearOffersLoading: true,
        isOfferReviewsLoading: true,
        isFavoritesLoading: true,
      },
    }));
    const withHistoryComponent = withHistory(withStoreComponent);
    render(withHistoryComponent);

    expect(screen.getByTestId('offer-is-favorite')).toBeInTheDocument();
  });

  it('should render RentCardFull component with isPremium mark', () => {
    offer.isPremium = true;
    const { withStoreComponent } = withStore(<RentCardFull />, makeFakeStore({
      [Namespace.Data]: {
        offers: [],
        nearOffers: [],
        singleOffer: offer,
        offerReviews: [],
        favorites: [],
        isDataLoading: true,
        isSingleOfferLoading: false,
        isNearOffersLoading: true,
        isOfferReviewsLoading: true,
        isFavoritesLoading: true,
      },
    }));
    const withHistoryComponent = withHistory(withStoreComponent);
    render(withHistoryComponent);

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
