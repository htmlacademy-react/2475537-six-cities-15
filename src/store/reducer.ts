import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './actions';
import { cities } from '../mocks/cities';
import { OfferInfo } from '../types/offer';
import { City } from '../types/location';

const initialState = {
  currentCity: cities.find((c) => c.code === 'Paris') as City,
  offers: [] as OfferInfo[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload as OfferInfo[];
    });
});

export { reducer };
