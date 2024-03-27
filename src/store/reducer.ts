import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, setAuthorizationStatus, setDataLoading, setError, setUserInfo } from './actions';
import { cities } from '../mocks/cities';
import { OfferPreview } from '../types/offer';
import { City } from '../types/location';
import { AuthorizationStatus } from '../const';
import { UserInfo } from '../types/user';

type InitialState = {
  currentCity: City;
  offers: OfferPreview[];
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  user: UserInfo | null;
  error: string | null;
}

const initialState: InitialState = {
  currentCity: cities.find((c) => c.code === 'Paris') as City,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  user: null,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
