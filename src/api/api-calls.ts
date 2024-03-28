import { NewReview, OfferInfo, OfferPreview, Review } from '../types/offer';
import { createApi } from './api';
import { APIRoutes } from './routes';

export const fetchSingleOffer = (offerId: string): Promise<OfferInfo> => {
  const api = createApi();
  return api.get<OfferInfo>(APIRoutes.Offer.replace('{offerId}', offerId))
    .then(({ data }) => data);
};

export const fetchNearOffers = (offerId: string): Promise<OfferPreview[]> => {
  const api = createApi();
  return api.get<OfferPreview[]>(APIRoutes.NearByOffers.replace('{offerId}', offerId))
    .then(({ data }) => data);
};

export const fetchOfferReviews = (offerId: string): Promise<Review[]> => {
  const api = createApi();
  return api.get<Review[]>(APIRoutes.Comments.replace('{offerId}', offerId))
    .then(({ data }) => data);
};

export const fetchAddReview = (offerId: string, review: NewReview): Promise<Review> => {
  const api = createApi();
  return api.post<Review>(APIRoutes.Comments.replace('{offerId}', offerId), review)
    .then(({ data }) => data);
};

export const fetchFavorites = (): Promise<OfferPreview[]> => {
  const api = createApi();
  return api.get<OfferPreview[]>(APIRoutes.Favorites)
    .then(({ data }) => data);
};

export const fetchSetFavoriteStatus = (offerId: string, isFavorite: boolean): Promise<void> => {
  const api = createApi();
  return api.post(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', isFavorite ? '1' : '0'));
};
