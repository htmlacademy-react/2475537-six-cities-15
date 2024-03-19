import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/location';
import { OfferInfo } from '../types/offer';

export const changeCity = createAction<City>('changeCity');
export const fillOffers = createAction<OfferInfo[]>('fillOffers');
