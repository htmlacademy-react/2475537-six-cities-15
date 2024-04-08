import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { City } from './location';
import { OfferPreview, OfferInfo, Review } from './offer';
import { UserInfo } from './user';

export type ApplicationProcess = {
  currentCity: City;
};

export type DataProcess = {
  offers: OfferPreview[];
  singleOffer: OfferInfo | null;
  nearOffers: OfferPreview[];
  favorites: OfferPreview[];
  isDataLoading: boolean;
  isSingleOfferLoading: boolean;
  isNearOffersLoading: boolean;
  offerReviews: Review[];
  isOfferReviewsLoading: boolean;
  isFavoritesLoading: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserInfo | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
