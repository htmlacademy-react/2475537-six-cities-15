import { OfferInfo } from '../types/offer';

export const offers: OfferInfo[] = [
  {
    id: 1,
    isPremium: false,
    isFavorite: true,
    images: [
      {
        src: '/img/apartment-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-02.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-03.jpg',
        description: 'room 1',
      },
      {
        src: '/img/room.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
    ],
    rating: 3.5,
    type: 'Apartment',
    name: 'Beautiful & luxurious apartment at great location',
    description: 'Beautiful &amp; luxurious apartment at great location',
    price: 90,
    priceType: 'night',
    priceCurrency: '€',
    city: 'Amsterdam',
    host: {
      name: 'Angelna',
      image: '/img/avatar-angelina.jpg',
      category: 'Pro',
      isFavorite: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    },
    bedrooms: 2,
    maxGuests: 4,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    coords: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 2,
    isPremium: true,
    isFavorite: true,
    images: [
      {
        src: '/img/apartment-03.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-02.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/room.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
    ],
    rating: 4,
    type: 'Flat',
    name: 'Nice flat near the sea',
    description: 'Nice appartment near the sea',
    price: 120,
    priceType: 'night',
    priceCurrency: '€',
    city: 'Amsterdam',
    host: {
      name: 'Elena',
      image: '/img/avatar-angelina.jpg',
      category: 'Beginer',
      isFavorite: false,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    },
    bedrooms: 3,
    maxGuests: 6,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Cabel TV', 'Fridge'],
    coords: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 3,
    isPremium: true,
    isFavorite: false,
    images: [
      {
        src: '/img/apartment-02.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-03.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/room.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
    ],
    rating: 2.5,
    type: 'Apartment',
    name: 'Perfect appartment at beatuful place',
    description: 'Nice appartment at beatuful place',
    price: 105,
    priceType: 'night',
    priceCurrency: '€',
    city: 'Paris',
    host: {
      name: 'Maria',
      image: '/img/avatar-angelina.jpg',
      category: 'Pro',
      isFavorite: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    },
    bedrooms: 4,
    maxGuests: 8,
    inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV'],
    coords: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
  {
    id: 4,
    isPremium: false,
    isFavorite: true,
    images: [
      {
        src: '/img/apartment-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-03.jpg',
        description: 'room 1',
      },
      {
        src: '/img/apartment-02.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/studio-01.jpg',
        description: 'room 1',
      },
      {
        src: '/img/room.jpg',
        description: 'room 1',
      },
    ],
    rating: 5,
    type: 'Villa',
    name: 'Great house at first line with a excelent view',
    description: 'Great house at first line with a excelent view',
    price: 75,
    priceType: 'night',
    priceCurrency: '€',
    city: 'Cologne',
    host: {
      name: 'Angela',
      image: '/img/avatar-angelina.jpg',
      category: 'Junior',
      isFavorite: false,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    },
    bedrooms: 2,
    maxGuests: 5,
    inside: ['Wi-Fi', 'Washing machine', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    coords: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
  },
];
