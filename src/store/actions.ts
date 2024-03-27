import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City } from '../types/location';
import { OfferPreview } from '../types/offer';
import { UserInfo } from '../types/user';

export const changeCity = createAction<City>('app/changeCity');

export const fillOffers = createAction<OfferPreview[]>('data/fillOffers');
export const setDataLoading = createAction<boolean>('data/setDataLoading');
export const setError = createAction<string | null>('data/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUserInfo = createAction<UserInfo>('user/setUserInfo');
