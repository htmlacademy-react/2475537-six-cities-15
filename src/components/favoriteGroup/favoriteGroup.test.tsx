import { render, screen } from '@testing-library/react';
import { OfferPreview } from '../../types/offer';
import FavoriteGroup from './favoriteGroup';

describe('FavoriteGroup', () => {
  const onFavoriteStatusChanged = (props: OfferPreview) => props;

  it('should render FavoriteGroup component with selected city', () => {
    const expectedCity = 'City';
    render(<FavoriteGroup offers={[]} city={expectedCity} onFavoriteStatusChanged={onFavoriteStatusChanged} />);

    expect(screen.getByText(expectedCity)).toBeInTheDocument();
  });
});
