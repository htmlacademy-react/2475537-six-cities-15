import { makeFakeCity, makeFakeOfferInfo, makeFakeOfferPreview, makeFakeReview } from '../../../mocks/mocks';
import { Namespace } from '../../const';
import {
  useOffersSelector,
  useIsDataLoadingSelector,
  useIsSingleOfferLoadingSelector,
  useSingleOfferSelector,
  useIsNearOffersLoadingSelector,
  useNearOffersSelector,
  useIsOfferReviewsLoadingSelector,
  useOfferReviewsSelector,
  useIsFavoritesLoadingSelector,
  useFavoritesSelector,
} from './selectors';

describe('ApplicationProcess selectors', () => {
  const currentCity = makeFakeCity();
  const state = {
    [Namespace.Application]: {
      currentCity,
    },
    [Namespace.Data]: {
      offers: [makeFakeOfferPreview(currentCity)],
      nearOffers: [makeFakeOfferPreview()],
      singleOffer: makeFakeOfferInfo(),
      offerReviews: [makeFakeReview()],
      favorites: [makeFakeOfferPreview()],
      isDataLoading: true,
      isSingleOfferLoading: true,
      isNearOffersLoading: true,
      isOfferReviewsLoading: true,
      isFavoritesLoading: true,
    },
  };

  it('should return isDataLoading from state', () => {
    const { isDataLoading } = state[Namespace.Data];
    const result = useIsDataLoadingSelector(state);
    expect(result).toEqual(isDataLoading);
  });

  it('should return isSingleOfferLoading from state', () => {
    const { isSingleOfferLoading } = state[Namespace.Data];
    const result = useIsSingleOfferLoadingSelector(state);
    expect(result).toBe(isSingleOfferLoading);
  });

  it('should return isNearOffersLoading from state', () => {
    const { isNearOffersLoading } = state[Namespace.Data];
    const result = useIsNearOffersLoadingSelector(state);
    expect(result).toBe(isNearOffersLoading);
  });

  it('should return isOfferReviewsLoading from state', () => {
    const { isOfferReviewsLoading } = state[Namespace.Data];
    const result = useIsOfferReviewsLoadingSelector(state);
    expect(result).toBe(isOfferReviewsLoading);
  });

  it('should return isFavoritesLoading from state', () => {
    const { isFavoritesLoading } = state[Namespace.Data];
    const result = useIsFavoritesLoadingSelector(state);
    expect(result).toBe(isFavoritesLoading);
  });

  it('should return offers from state', () => {
    const { offers } = state[Namespace.Data];
    const result = useOffersSelector(state);
    expect(result).toEqual(offers);
  });

  it('should return nearOffers from state', () => {
    const { nearOffers } = state[Namespace.Data];
    const result = useNearOffersSelector(state);
    expect(result).toEqual(nearOffers);
  });

  it('should return singleOffer from state', () => {
    const { singleOffer } = state[Namespace.Data];
    const result = useSingleOfferSelector(state);
    expect(result).toEqual(singleOffer);
  });

  it('should return offerReviews from state', () => {
    const { offerReviews } = state[Namespace.Data];
    const result = useOfferReviewsSelector(state);
    expect(result).toEqual(offerReviews);
  });

  it('should return favorites from state', () => {
    const { favorites } = state[Namespace.Data];
    const result = useFavoritesSelector(state);
    expect(result).toEqual(favorites);
  });
});
