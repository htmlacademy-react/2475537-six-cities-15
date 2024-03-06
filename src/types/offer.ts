export type OfferInfo = {
  id: number;
  isPremium: boolean;
  isFavorite: boolean;
  images: OfferImage[];
  rating: number;
  type: string;
  name: string;
  description: string;
  price: number;
  priceType: string;
  priceCurrency: string;
  city: string;
  host: Host;
  bedrooms: number;
  maxGuests: number;
  inside: string[];
};

export type OfferImage = {
  src: string;
  description: string;
};

export type Host = {
  name: string;
  image: string;
  isFavorite: boolean;
  category: string;
  description: string;
}

export type Review = {
  id: number;
  authorName: string;
  authorImage: string;
  rating: number;
  review: string;
  date: Date;
}
