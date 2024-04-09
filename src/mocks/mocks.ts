import { internet, name, random } from 'faker';
import { City } from '../types/location';
import { UserInfo } from '../types/user';
import { OfferPreview, OfferInfo, Review } from '../types/offer';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createApi } from '../api/api';
import { State } from '../types/state';
import { AuthorizationStatus } from '../const';
import { Namespace } from '../store/const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeCity = (): City => ({
  code: name.title(),
  title: name.title(),
  location: {
    latitude: random.number(),
    longitude: random.number(),
    zoom: random.number(),
  },
} as City);

export const makeFakeUser = (): UserInfo => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  name: name.title(),
  token: random.alpha(),
  isPro: random.boolean(),
} as UserInfo);

export const makeFakeOfferPreview = (city?: City | undefined): OfferPreview => ({
  id: random.alpha(),
  title: name.title(),
  type: random.alpha(),
  price: random.number(),
  city: {
    name: city?.code ?? name.title(),
    location: {
      latitude: random.number(),
      longitude: random.number(),
      zoom: random.number(),
    },
  },
  location: {
    latitude: random.number(),
    longitude: random.number(),
    zoom: random.number(),
  },
  isFavorite: random.boolean(),
  isPremium: random.boolean(),
  rating: random.number(),
  previewImage: random.alpha(),
});

export const makeFakeOfferInfo = (): OfferInfo => ({
  id: random.alpha(),
  title: name.title(),
  type: random.alpha(),
  price: random.number(),
  city: {
    name: name.title(),
    location: {
      latitude: random.number(),
      longitude: random.number(),
      zoom: random.number(),
    },
  },
  location: {
    latitude: random.number(),
    longitude: random.number(),
    zoom: random.number(),
  },
  isFavorite: random.boolean(),
  isPremium: random.boolean(),
  rating: random.number(),
  description: random.alpha(),
  bedrooms: random.number(),
  goods: new Array(random.number()).fill(null).map(() => random.alpha()),
  host: {
    name: name.title(),
    avatarUrl: internet.avatar(),
    isPro: random.boolean(),
  },
  images: new Array(random.number()).fill(null).map(() => internet.avatar()),
  maxAdults: random.number(),
});

export const makeFakeReview = (): Review => ({
  id: random.alpha(),
  date: new Date().toISOString(),
  user: {
    name: name.title(),
    avatarUrl: internet.avatar(),
    isPro: random.boolean(),
  },
  comment: random.alpha(),
  rating: random.number(),
} as Review);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [Namespace.Application]: { currentCity: makeFakeCity() },
  [Namespace.Data]: {
    offers: [],
    nearOffers: [],
    singleOffer: null,
    offerReviews: [],
    favorites: [],
    isDataLoading: true,
    isSingleOfferLoading: true,
    isNearOffersLoading: true,
    isOfferReviewsLoading: true,
    isFavoritesLoading: true,
  },
  [Namespace.User]: { authorizationStatus: AuthorizationStatus.Unknown, user: null },
  ...initialState ?? {},
});
