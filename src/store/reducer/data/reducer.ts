import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffers } from '../../../api/api-actions';
import { OfferPreview } from '../../../types/offer';
import { DataProcess } from "../../../types/state";
import { Namespace } from '../../const';


const initialState: DataProcess = {
  offers: [],
  error: null,
  isDataLoading: true,
};

export const dataProcess = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    changeOffer: (state, action: PayloadAction<OfferPreview>) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isDataLoading = true;
      });
  }
});

export const { setError, changeOffer } = dataProcess.actions;
