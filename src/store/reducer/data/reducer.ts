import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchOffers,
  fetchSingleOffer,
  fetchNearOffers,
  fetchOfferReviews,
  fetchAddReview,
  fetchFavorites,
  fetchSetFavoriteStatus,
  fetchSetNotFavoriteStatus
} from '../../../api/api-actions';
import { OfferPreview } from '../../../types/offer';
import { DataProcess } from '../../../types/state';
import { Namespace } from '../../const';


const initialState: DataProcess = {
  offers: [],
  nearOffers: [],
  singleOffer: null,
  offerReviews: [],
  favorites: [],
  error: null,
  isDataLoading: true,
  isSingleOfferLoading: true,
  isNearOffersLoading: true,
  isOfferReviewsLoading: true,
  isFavoritesLoading: true,
};

export const dataProcess = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
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
      })
      .addCase(fetchSingleOffer.fulfilled, (state, action) => {
        state.singleOffer = action.payload;
        state.isSingleOfferLoading = false;
      })
      .addCase(fetchSingleOffer.rejected, (state) => {
        state.isSingleOfferLoading = false;
      })
      .addCase(fetchSingleOffer.pending, (state) => {
        state.singleOffer = null;
        state.isSingleOfferLoading = true;
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOffersLoading = false;
      })
      .addCase(fetchNearOffers.rejected, (state) => {
        state.isNearOffersLoading = false;
      })
      .addCase(fetchNearOffers.pending, (state) => {
        state.nearOffers = [];
        state.isNearOffersLoading = true;
      })
      .addCase(fetchOfferReviews.fulfilled, (state, action) => {
        state.offerReviews = action.payload;
        state.isOfferReviewsLoading = false;
      })
      .addCase(fetchOfferReviews.rejected, (state) => {
        state.isOfferReviewsLoading = false;
      })
      .addCase(fetchOfferReviews.pending, (state) => {
        state.offerReviews = [];
        state.isOfferReviewsLoading = true;
      })
      .addCase(fetchAddReview.fulfilled, (state, action) => {
        state.offerReviews.push(action.payload);
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.favorites = [];
        state.isFavoritesLoading = true;
      })
      .addCase(fetchSetFavoriteStatus.fulfilled, (state, action) => {
        state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        state.nearOffers = state.nearOffers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
      })
      .addCase(fetchSetNotFavoriteStatus.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter((f) => f.id !== action.payload.id);
        state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        state.nearOffers = state.nearOffers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
      });
  }
});

export const { setError } = dataProcess.actions;
