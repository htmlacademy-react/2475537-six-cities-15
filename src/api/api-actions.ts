import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from '../../node_modules/axios/index';
import { dropToken, saveToken } from '../services/token';
import { OfferPreview } from '../types/offer';
import { AppDispatch } from '../types/state';
import { Credentials, UserInfo } from '../types/user';
import { APIRoutes } from './routes';

const createAppAsyncThunk = createAsyncThunk.withTypes<{ dispatch: AppDispatch; extra: AxiosInstance }>();

export const fetchOffers = createAppAsyncThunk<void, undefined>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoutes.OffersList);
    return data;
  }
);

export const checkAuthorization = createAppAsyncThunk<void, undefined>(
  'user/checkAuthorization',
  async (_arg, { extra: api }) => {
    await api.get(APIRoutes.Login);
  }
);

export const authorize = createAppAsyncThunk<void, Credentials>(
  'user/authorize',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserInfo>(APIRoutes.Login, { email, password });
    saveToken(data.token);
  }
);

export const signOut = createAppAsyncThunk<void, undefined>(
  'user/signout',
  async (_arg, { extra: api }) => {
    await api.get(APIRoutes.Logout);
    dropToken();
  }
);
