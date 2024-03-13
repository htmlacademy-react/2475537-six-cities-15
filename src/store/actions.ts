import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/location';

export const changeCity = createAction<City>('changeCity');
export const fillOffers = createAction('fillOffers');
