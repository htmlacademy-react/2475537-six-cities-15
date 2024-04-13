import { render, screen } from '@testing-library/react';
import RentCardList from './rentCardList';
import { makeFakeOfferPreview } from '../../mocks/mocks';

vi.mock('../rentCard/rentCard', () => ({
  default: () => (<p data-testid='rent-card'>Rent card</p>)
}));

describe('rentCardList', () => {
  it('should render rentCardList component with all allowed offers', () => {
    const offers = [makeFakeOfferPreview(), makeFakeOfferPreview()];
    render(<RentCardList offers={offers}/>);

    expect(screen.queryAllByTestId('rent-card').length).toBe(offers.length);
  });
});
