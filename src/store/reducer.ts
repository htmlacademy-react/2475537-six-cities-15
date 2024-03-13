import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './actions';
import { cities } from '../mocks/cities';
import { OfferInfo } from '../types/offer';

const initialState = {
  currentCity: cities.find((c) => c.code === 'Paris'),
  offers: [] as OfferInfo[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
