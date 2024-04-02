import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from '../../node_modules/axios/index';
import { AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { fillOffers, setAuthorizationStatus, setDataLoading, setError } from '../store/actions';
import { OfferPreview } from '../types/offer';
import { AppDispatch } from '../types/state';
import { Credentials, UserInfo } from '../types/user';
import { APIRoutes } from './routes';
import { store } from '../store';

export const TIMEOUT_SHOW_ERROR = 2000;

const createAppAsyncThunk = createAsyncThunk.withTypes<{ dispatch: AppDispatch; extra: AxiosInstance }>();

export const fetchOffers = createAppAsyncThunk<OfferPreview[], undefined>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoading(true));
    const { data } = await api.get<OfferPreview[]>(APIRoutes.OffersList);
    dispatch(fillOffers(data));
    dispatch(setDataLoading(false));
  }
);

export const checkAuthorization = createAppAsyncThunk<void, undefined>(
  'user/checkAuthorization',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const authorize = createAppAsyncThunk<void, Credentials>(
  'user/authorize',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserInfo>(APIRoutes.Login, { email, password });
      saveToken(data.token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const signOut = createAppAsyncThunk<void, undefined>(
  'user/signout',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoutes.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
