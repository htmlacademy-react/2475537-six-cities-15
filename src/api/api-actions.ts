import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from '../../node_modules/axios/index';
import { dropToken, saveToken } from '../services/token';
import { NewReview, OfferInfo, OfferPreview, Review } from '../types/offer';
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

export const fetchSingleOffer = createAppAsyncThunk<void, string | null>(
  'data/fetchSingleOffer',
  async (offerId, { extra: api }) => {
    if (!offerId) {
      return null;
    }

    const { data } = await api.get<OfferInfo>(APIRoutes.Offer.replace('{offerId}', offerId));
    return data;
  }
);

export const fetchNearOffers = createAppAsyncThunk<void, string | null>(
  'data/fetchNearOffers',
  async (offerId, { extra: api }) => {
    if (!offerId) {
      return [];
    }

    const { data } = await api.get<OfferPreview[]>(APIRoutes.NearByOffers.replace('{offerId}', offerId));
    return data;
  }
);

export const fetchOfferReviews = createAppAsyncThunk<void, string | undefined>(
  'data/fetchOfferReviews',
  async (offerId, { extra: api }) => {
    if (!offerId) {
      return [];
    }

    const { data } = await api.get<Review[]>(APIRoutes.Comments.replace('{offerId}', offerId));
    return data;
  }
);

export const fetchAddReview = createAppAsyncThunk<void, NewReview>(
  'data/fetchAddReview',
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review>(APIRoutes.Comments.replace('{offerId}', offerId), { comment, rating });
    return data;
  }
);

export const fetchFavorites = createAppAsyncThunk<void, undefined>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoutes.Favorites);
    return data;
  }
);

export const fetchSetFavoriteStatus = createAppAsyncThunk<void, string>(
  'data/fetchSetFavoriteStatus',
  async (offerId, { extra: api }) => {
    const { data } = await api.post<OfferPreview>(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', '1'));
    return data;
  }
);

export const fetchSetNotFavoriteStatus = createAppAsyncThunk<void, string>(
  'data/fetchSetNotFavoriteStatus',
  async (offerId, { extra: api }) => {
    const { data } = await api.post<OfferPreview>(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', '0'));
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
