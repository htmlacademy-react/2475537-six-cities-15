import { render, screen } from '@testing-library/react';
import RentCardList from './rent-card-list';
import { makeFakeOfferPreview } from '../../mocks/mocks';

vi.mock('../rent-card/rent-card', () => ({
  default: () => (<p data-testid='rent-card'>Rent card</p>)
}));

describe('rentCardList', () => {
  it('should render rentCardList component with all allowed offers', () => {
    const offers = [makeFakeOfferPreview(), makeFakeOfferPreview()];
    render(<RentCardList offers={offers}/>);

    expect(screen.queryAllByTestId('rent-card').length).toBe(offers.length);
  });
});
