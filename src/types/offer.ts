import { Coords } from './location';

export type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Coords;
  };
  location: Coords;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type OfferInfo = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Coords;
  };
  location: Coords;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;
};

export type OfferImage = {
  src: string;
  description: string;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
};

export type NewReview = {
  comment: string;
  rating: number;
  offerId: string;
}
