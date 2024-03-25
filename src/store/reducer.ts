import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers, setAuthorizationStatus, setDataLoading } from './actions';
import { cities } from '../mocks/cities';
import { OfferPreview } from '../types/offer';
import { City } from '../types/location';
import { AuthorizationStatus } from '../const';

type InitialState = {
  currentCity: City;
  offers: OfferPreview[];
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
}

const initialState: InitialState = {
  currentCity: cities.find((c) => c.code === 'Paris'),
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export { reducer };
