import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City } from '../types/location';
import { OfferPreview } from '../types/offer';

export const changeCity = createAction<City>('app/changeCity');

export const fillOffers = createAction<OfferPreview[]>('data/fillOffers');
export const setDataLoading = createAction<boolean>('data/setDataLoading');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
