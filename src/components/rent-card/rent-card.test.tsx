import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthorizationStatus, CardType } from '../../const';
import { withHistory, withStore } from '../../mocks/mock-components';
import { makeFakeOfferPreview, makeFakeStore } from '../../mocks/mocks';
import { Namespace } from '../../store/const';
import RentCard from './rent-card';

describe('RentCard', () => {
  const offer = makeFakeOfferPreview();

  it('should render RentCard component', () => {
    const withHistoryComponent = withHistory(<RentCard offer={offer} cardType={CardType.Regular} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null },
    }));
    render(withStoreComponent);

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(offer.type)).toBeInTheDocument();
  });

  it('should render RentCard component with isFavorite mark', () => {
    offer.isFavorite = true;
    const withHistoryComponent = withHistory(<RentCard offer={offer} cardType={CardType.Regular} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null },
    }));
    render(withStoreComponent);

    expect(screen.getByTestId('offer-is-favorite')).toBeInTheDocument();
  });

  it('should render RentCard component with isPremium mark', () => {
    offer.isPremium = true;
    const withHistoryComponent = withHistory(<RentCard offer={offer} cardType={CardType.Regular} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null },
    }));
    render(withStoreComponent);

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('should render RentCard component as regular card', () => {
    offer.isPremium = true;
    const withHistoryComponent = withHistory(<RentCard offer={offer} cardType={CardType.Regular} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null },
    }));
    render(withStoreComponent);

    expect(screen.getByTestId('card-wrapper')).toHaveClass('cities__card');
  });

  it('should render RentCard component as favorite card', () => {
    offer.isPremium = true;
    const withHistoryComponent = withHistory(<RentCard offer={offer} cardType={CardType.Favorite} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null },
    }));
    render(withStoreComponent);

    expect(screen.getByTestId('card-wrapper')).toHaveClass('favorites__card');
  });

  it('should call change favorite status handler', async () => {
    const changeFavoriteStatusHandler = vi.fn();

    const withHistoryComponent = withHistory(<RentCard offer={offer} cardType={CardType.Favorite} onFavoriteStatusChanged={changeFavoriteStatusHandler} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [Namespace.User]: { authorizationStatus: AuthorizationStatus.Auth, user: null },
    }));
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('offer-is-favorite'));

    expect(changeFavoriteStatusHandler).toHaveBeenCalledTimes(1);
  });
});
