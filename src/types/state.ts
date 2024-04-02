import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { City } from './location';
import { OfferPreview } from './offer';
import { UserInfo } from './user';

export type ApplicationProcess = {
  currentCity: City;
};

export type DataProcess = {
  offers: OfferPreview[];
  error: string | null;
  isDataLoading: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserInfo | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
