export enum SortType {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  Rating,
}

export type SortOrder = {
  title: string;
  type: SortType;
}

export const allowedSorting: SortOrder[] = [
  {
    title: 'Popular',
    type: SortType.Popular
  },
  {
    title: 'Price: low to high',
    type: SortType.PriceLowToHigh
  },
  {
    title: 'Price: high to low',
    type: SortType.PriceHighToLow
  },
  {
    title: 'Top rated first',
    type: SortType.Rating
  }
];
