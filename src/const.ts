export enum AppRoute {
  Login = '/login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardType {
  Regular = 0,
  Favorite = 1,
}
