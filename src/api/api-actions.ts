import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from '../../node_modules/axios/index';
import { dropToken, saveToken } from '../services/token';
import { OfferPreview } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { Credentials, UserInfo } from '../types/user';
import { APIRoutes } from './routes';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoutes.OffersList);
    return data;
  }
);

export const checkAuthorization = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthorization',
  async (_arg, { extra: api }) => {
    await api.get(APIRoutes.Login);
  }
);

export const authorize = createAsyncThunk<void, Credentials, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/authorize',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserInfo>(APIRoutes.Login, { email, password });
    saveToken(data.token);
  }
);

export const signOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/signout',
  async (_arg, { extra: api }) => {
    await api.get(APIRoutes.Logout);
    dropToken();
  }
);
