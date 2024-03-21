import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from '../../node_modules/axios/index';
import { fillOffers, setDataLoading } from '../store/actions';
import { OfferPreview } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { APIRoutes } from './routes';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fillOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoading(true));
    const { data } = await api.get<OfferPreview[]>(APIRoutes.offersList);
    dispatch(fillOffers(data));
    dispatch(setDataLoading(false));
  }
);
