import { render, screen } from '@testing-library/react';
import { withHistory } from '../../mocks/mockComponents';
import FavoriteGroup from './favoriteGroup';

describe('FavoriteGroup', () => {
  const onFavoriteStatusChanged = (offerId: string) => offerId;

  it('should render FavoriteGroup component with selected city', () => {
    const expectedCity = 'City';
    const withHistoryComponent = withHistory(<FavoriteGroup offers={[]} city={expectedCity} onFavoriteStatusChanged={onFavoriteStatusChanged} />); 
    render(withHistoryComponent);

    expect(screen.getByText(expectedCity)).toBeInTheDocument();
  });
});
