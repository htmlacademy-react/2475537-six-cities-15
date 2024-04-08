import { fetchAddReview, fetchFavorites, fetchNearOffers, fetchOfferReviews, fetchOffers, fetchSetFavoriteStatus, fetchSetNotFavoriteStatus, fetchSingleOffer } from '../../../api/api-actions';
import { dataProcess, clearFavorites } from './reducer';
import { makeFakeOfferInfo, makeFakeOfferPreview, makeFakeReview } from '../../../mocks/mocks';

describe('DataProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [makeFakeOfferPreview()],
      nearOffers: [makeFakeOfferPreview()],
      singleOffer: makeFakeOfferInfo(),
      offerReviews: [makeFakeReview()],
      favorites: [makeFakeOfferPreview()],
      isDataLoading: true,
      isSingleOfferLoading: true,
      isNearOffersLoading: true,
      isOfferReviewsLoading: true,
      isFavoritesLoading: true,
    };

    const result = dataProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const emptyInitialState = {
      offers: [],
      nearOffers: [],
      singleOffer: null,
      offerReviews: [],
      favorites: [],
      isDataLoading: true,
      isSingleOfferLoading: true,
      isNearOffersLoading: true,
      isOfferReviewsLoading: true,
      isFavoritesLoading: true,
    };

    const result = dataProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(emptyInitialState);
  });

  it('should clearFavorites with "clearFavorites" action', () => {
    const { favorites } = dataProcess.reducer(undefined, clearFavorites);

    expect(favorites).toEqual([]);
  });

  it('should set offers with "fetchOffers.fulfilled" action', () => {
    const expectedOffers = [makeFakeOfferPreview()];
    const { offers, isDataLoading } = dataProcess.reducer(undefined, fetchOffers.fulfilled(expectedOffers, '', undefined));

    expect(offers).toStrictEqual(expectedOffers);
    expect(isDataLoading).toBe(false);
  });

  it('should set isDataLoading as false with "fetchOffers.rejected" action', () => {
    const { isDataLoading } = dataProcess.reducer(undefined, fetchOffers.fulfilled);

    expect(isDataLoading).toBe(false);
  });

  it('should set isDataLoading as true with "fetchOffers.pending" action', () => {
    const { isDataLoading } = dataProcess.reducer(undefined, fetchOffers.pending);

    expect(isDataLoading).toBe(true);
  });

  it('should set single offer with "fetchSingleOffer.fulfilled" action', () => {
    const expectedOffer = makeFakeOfferInfo();
    const { singleOffer, isSingleOfferLoading } = dataProcess.reducer(undefined, fetchSingleOffer.fulfilled(expectedOffer, '', undefined));

    expect(singleOffer).toStrictEqual(expectedOffer);
    expect(isSingleOfferLoading).toBe(false);
  });

  it('should set isSingleOfferLoading as false with "fetchSingleOffer.rejected" action', () => {
    const { isSingleOfferLoading } = dataProcess.reducer(undefined, fetchSingleOffer.fulfilled);

    expect(isSingleOfferLoading).toBe(false);
  });

  it('should set isSingleOfferLoading as true with "fetchSingleOffer.pending" action', () => {
    const { singleOffer, isSingleOfferLoading } = dataProcess.reducer(undefined, fetchSingleOffer.pending);

    expect(singleOffer).toBe(null);
    expect(isSingleOfferLoading).toBe(true);
  });

  it('should set near offers with "fetchNearOffers.fulfilled" action', () => {
    const expectedOffers = [makeFakeOfferPreview()];
    const { nearOffers, isNearOffersLoading } = dataProcess.reducer(undefined, fetchNearOffers.fulfilled(expectedOffers, '', undefined));

    expect(nearOffers).toStrictEqual(expectedOffers);
    expect(isNearOffersLoading).toBe(false);
  });

  it('should set isNearOffersLoading as false with "fetchNearOffers.rejected" action', () => {
    const { isNearOffersLoading } = dataProcess.reducer(undefined, fetchNearOffers.fulfilled);

    expect(isNearOffersLoading).toBe(false);
  });

  it('should set isNearOffersLoading as true with "fetchNearOffers.pending" action', () => {
    const { nearOffers, isNearOffersLoading } = dataProcess.reducer(undefined, fetchNearOffers.pending);

    expect(nearOffers).toStrictEqual([]);
    expect(isNearOffersLoading).toBe(true);
  });

  it('should set offer reviews with "fetchOfferReviews.fulfilled" action', () => {
    const expectedReviews = [makeFakeReview()];
    const { offerReviews, isOfferReviewsLoading } = dataProcess.reducer(undefined, fetchOfferReviews.fulfilled(expectedReviews, '', ''));

    expect(offerReviews).toStrictEqual(expectedReviews);
    expect(isOfferReviewsLoading).toBe(false);
  });

  it('should set isOfferReviewsLoading as false with "fetchOfferReviews.rejected" action', () => {
    const { isOfferReviewsLoading } = dataProcess.reducer(undefined, fetchOfferReviews.fulfilled);

    expect(isOfferReviewsLoading).toBe(false);
  });

  it('should set isOfferReviewsLoading as true with "fetchOfferReviews.pending" action', () => {
    const { offerReviews, isOfferReviewsLoading } = dataProcess.reducer(undefined, fetchOfferReviews.pending);

    expect(offerReviews).toStrictEqual([]);
    expect(isOfferReviewsLoading).toBe(true);
  });

  it('should add new review with "fetchAddReview.fulfilled" action', () => {
    const expectedReviews = [makeFakeReview()];
    const { offerReviews } = dataProcess.reducer(undefined, fetchAddReview.fulfilled(expectedReviews[0], '', undefined));

    expect(offerReviews).toStrictEqual(expectedReviews);
  });

  it('should set favorites with "fetchFavorites.fulfilled" action', () => {
    const expectedFavorites = [makeFakeOfferPreview()];
    const { favorites, isFavoritesLoading } = dataProcess.reducer(undefined, fetchFavorites.fulfilled(expectedFavorites, '', undefined));

    expect(favorites).toStrictEqual(favorites);
    expect(isFavoritesLoading).toBe(false);
  });

  it('should set isFavoritesLoading as false with "fetchFavorites.rejected" action', () => {
    const { isFavoritesLoading } = dataProcess.reducer(undefined, fetchFavorites.fulfilled);

    expect(isFavoritesLoading).toBe(false);
  });

  it('should set isFavoritesLoading as true with "fetchFavorites.pending" action', () => {
    const { favorites, isFavoritesLoading } = dataProcess.reducer(undefined, fetchFavorites.pending);

    expect(favorites).toStrictEqual([]);
    expect(isFavoritesLoading).toBe(true);
  });

  it('should add new favorite with "fetchSetFavoriteStatus.fulfilled" action', () => {
    const newFavorite = makeFakeOfferPreview();

    const { offers, nearOffers, favorites } = dataProcess.reducer(undefined, fetchSetFavoriteStatus.fulfilled(newFavorite, '', ''));

    expect(favorites).toStrictEqual([newFavorite]);
    expect(offers).toStrictEqual([]);
    expect(nearOffers).toStrictEqual([]);
  });

  it('should add new favorite with "fetchSetNotFavoriteStatus.fulfilled" action', () => {
    const favorite = makeFakeOfferPreview();
    const initialState = {
      offers: [favorite],
      nearOffers: [favorite],
      singleOffer: null,
      offerReviews: [],
      favorites: [favorite],
      isDataLoading: true,
      isSingleOfferLoading: true,
      isNearOffersLoading: true,
      isOfferReviewsLoading: true,
      isFavoritesLoading: true,
    };

    const { offers, nearOffers, favorites } = dataProcess.reducer(initialState, fetchSetNotFavoriteStatus.fulfilled(favorite, '', ''));

    expect(favorites).toStrictEqual([]);
    expect(offers).toStrictEqual([favorite]);
    expect(nearOffers).toStrictEqual([favorite]);
  });
});
