import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchSetFavoriteStatus, fetchSetNotFavoriteStatus } from '../../api/api-actions';
import { withStore } from '../../mocks/mockComponents';
import { extractActionsTypes, makeFakeCity, makeFakeOfferPreview } from '../../mocks/mocks';
import { Namespace } from '../../store/const';
import { OfferPreview } from '../../types/offer';
import CityOffers from './cityOffers';


type RentCardListMockType = {
  onFavoriteStatusChanged: (offer: OfferPreview) => void;
};
vi.mock('../rentCardList/rentCardList', () => ({
  default: ({ onFavoriteStatusChanged }: RentCardListMockType) => {
    const favoriteOffer = makeFakeOfferPreview();
    favoriteOffer.isFavorite = true;

    const notFavoriteOffer = makeFakeOfferPreview();
    notFavoriteOffer.isFavorite = false;

    return (
      <>
        <p>Rent card list</p>
        <button data-testid='test-button-set-favorite' onClick={() => onFavoriteStatusChanged(notFavoriteOffer)}></button>
        <button data-testid='test-button-set-not-favorite' onClick={() => onFavoriteStatusChanged(favoriteOffer)}></button>
      </>);
  }
}));

vi.mock('../offerSorting/offerSorting', () => ({
  default: () => (<p>Offer sorting</p>)
}));

vi.mock('../map/map', () => ({
  default: () => (<p>Map</p>)
}));


describe('CityOffers', () => {
  const currentCity = makeFakeCity();

  it('should render CityOffers component', () => {
    const { withStoreComponent } = withStore(<CityOffers cardsCount={1} offers={[]} />, { [Namespace.Application]: { currentCity } });
    render(withStoreComponent);

    expect(screen.getByText('Offer sorting')).toBeInTheDocument();
    expect(screen.getByText('Rent card list')).toBeInTheDocument();
    expect(screen.getByText('Map')).toBeInTheDocument();
  });

  it('should render CityOffers component with amount of offers in the city', () => {
    const offers = [];
    for (let idx = 0; idx < 5; idx++) {
      offers.push(makeFakeOfferPreview());
    }

    const { withStoreComponent } = withStore(<CityOffers cardsCount={1} offers={offers} />, { [Namespace.Application]: { currentCity } });
    render(withStoreComponent);

    expect(screen.getByText(`${offers.length} places to stay in ${currentCity.title}`)).toBeInTheDocument();
  });

  it('should handle change favorite status on CityOffers component', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<CityOffers cardsCount={1} offers={[]} />, { [Namespace.Application]: { currentCity } });
    mockAxiosAdapter.onPost(/\/favorite\/*/).reply(200);

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('test-button-set-favorite'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchSetFavoriteStatus.pending.type,
      fetchSetFavoriteStatus.fulfilled.type,
    ]);
  });

  it('should handle change favorite status on CityOffers component', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<CityOffers cardsCount={1} offers={[]} />, { [Namespace.Application]: { currentCity } });
    mockAxiosAdapter.onPost(/\/favorite\/*/).reply(200);

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('test-button-set-not-favorite'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchSetNotFavoriteStatus.pending.type,
      fetchSetNotFavoriteStatus.fulfilled.type,
    ]);
  });
});
