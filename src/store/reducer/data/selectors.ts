import { State } from '../../../types/state';
import { Namespace } from '../../const';

export const useOffersSelector = (state: State) => state[Namespace.Data].offers.filter((o) => o.city.name === state[Namespace.Application].currentCity.code);
export const useIsDataLoadingSelector = (state: State) => state[Namespace.Data].isDataLoading;
export const useIsSingleOfferLoadingSelector = (state: State) => state[Namespace.Data].isSingleOfferLoading;
export const useSingleOfferSelector = (state: State) => state[Namespace.Data].singleOffer;
export const useIsNearOffersLoadingSelector = (state: State) => state[Namespace.Data].isNearOffersLoading;
export const useNearOffersSelector = (state: State) => state[Namespace.Data].nearOffers;
export const useIsOfferReviewsLoading = (state: State) => state[Namespace.Data].isOfferReviewsLoading;
export const useOfferReviews = (state: State) => state[Namespace.Data].offerReviews;
export const useIsFavoritesLoading = (state: State) => state[Namespace.Data].isFavoritesLoading;
export const useFavorites = (state: State) => state[Namespace.Data].favorites;
