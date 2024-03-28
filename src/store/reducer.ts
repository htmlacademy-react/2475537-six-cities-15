import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, fillOffers, setAuthorizationStatus, setDataLoading, setError, setUserInfo } from './actions';
import { cities } from '../mocks/cities';
import { OfferPreview } from '../types/offer';
import { City } from '../types/location';
import { AuthorizationStatus } from '../const';
import { UserInfo } from '../types/user';

type InitialState = {
  currentCity: City;
  offers: OfferPreview[];
  authorizationStatus: AuthorizationStatus;
  user: UserInfo | null;
  error: string | null;
  isDataLoading: boolean;
}

const initialState: InitialState = {
  currentCity: cities.find((c) => c.code === 'Paris') as City,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
  isDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeOffer, (state, action) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
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
