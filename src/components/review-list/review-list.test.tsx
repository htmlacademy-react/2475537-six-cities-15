import { render, screen } from '@testing-library/react';
import { fetchOfferReviews } from '../../api/api-actions';
import { APIRoutes } from '../../api/routes';
import { AuthorizationStatus } from '../../const';
import { withStore } from '../../mocks/mock-components';
import { extractActionsTypes, makeFakeReview, makeFakeStore } from '../../mocks/mocks';
import { Namespace } from '../../store/const';
import ReviewList from './review-list';

vi.mock('../review-form/review-form', () => ({
  default: () => (<p>ReviewForm</p>)
}));

vi.mock('../review-card/review-card', () => ({
  default: () => (<p>ReviewCard</p>)
}));

describe('ReviewList', () => {
  const offerId = 'id1';
  const requestUrl = APIRoutes.Comments.replace('{offerId}', offerId);

  it('should fetch reviews on ReviewList component', () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<ReviewList offerId={offerId} />, makeFakeStore());
    mockAxiosAdapter.onGet(requestUrl).reply(200);

    render(withStoreComponent);
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchOfferReviews.pending.type,
    ]);
  });

  it('should render ReviewList component with reviews', () => {
    const { withStoreComponent } = withStore(<ReviewList offerId={offerId} />, makeFakeStore({
      [Namespace.Data]: {
        offerReviews: [makeFakeReview(), makeFakeReview()],
        isOfferReviewsLoading: false,
        offers: [],
        nearOffers: [],
        singleOffer: null,
        favorites: [],
        isDataLoading: true,
        isSingleOfferLoading: true,
        isNearOffersLoading: true,
        isFavoritesLoading: true,
      }
    }));

    render(withStoreComponent);

    expect(screen.getAllByText('ReviewCard').length).toBe(2);
  });

  it('should render ReviewList component with reviewForm', () => {
    const { withStoreComponent } = withStore(<ReviewList offerId={offerId} />, makeFakeStore({
      [Namespace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: null,
      },
      [Namespace.Data]: {
        offers: [],
        nearOffers: [],
        singleOffer: null,
        offerReviews: [],
        favorites: [],
        isDataLoading: true,
        isSingleOfferLoading: true,
        isNearOffersLoading: true,
        isOfferReviewsLoading: false,
        isFavoritesLoading: true,
      },
    }));

    render(withStoreComponent);

    expect(screen.getByText('ReviewForm')).toBeInTheDocument();
  });
});
