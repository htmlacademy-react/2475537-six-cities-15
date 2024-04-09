import { render, screen } from '@testing-library/react';
import FavoriteGroup from './favoriteGroup';

describe('FavoriteGroup', () => {
  const onFavoriteStatusChanged = (offerId: string) => offerId;

  it('should render FavoriteGroup component with selected city', () => {
    const expectedCity = 'City';
    render(<FavoriteGroup offers={[]} city={expectedCity} onFavoriteStatusChanged={onFavoriteStatusChanged} />);

    expect(screen.getByText(expectedCity)).toBeInTheDocument();
  });
});
