import { State } from '../../../types/state';
import { Namespace } from '../../const';

export const useOffersSelector = (state: Pick<State, Namespace.Data | Namespace.Application>) => state[Namespace.Data].offers.filter((o) => o.city.name === state[Namespace.Application].currentCity.code);
export const useIsDataLoadingSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].isDataLoading;
export const useIsSingleOfferLoadingSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].isSingleOfferLoading;
export const useSingleOfferSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].singleOffer;
export const useIsNearOffersLoadingSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].isNearOffersLoading;
export const useNearOffersSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].nearOffers;
export const useIsOfferReviewsLoadingSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].isOfferReviewsLoading;
export const useOfferReviewsSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].offerReviews;
export const useIsFavoritesLoadingSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].isFavoritesLoading;
export const useFavoritesSelector = (state: Pick<State, Namespace.Data>) => state[Namespace.Data].favorites;
