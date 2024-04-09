import { render, screen } from '@testing-library/react';
import RentCardList from './rentCardList';
import { makeFakeOfferPreview } from '../../mocks/mocks';

vi.mock('../rentCard/rentCard', () => ({
  default: () => (<p data-testid='rent-card'>Rent card</p>)
}));

describe('rentCardList', () => {
  it('should render rentCardList component with all allowed offers', () => {
    const offers = [makeFakeOfferPreview(), makeFakeOfferPreview()];
    render(<RentCardList cardsCount={10} offers={offers}/>);

    expect(screen.queryAllByTestId('rent-card').length).toBe(offers.length);
  });

  it('should render rentCardList component with amount of card passed through properties', () => {
    const expectedCount = 2;
    const offers = [];
    for (let idx = 0; idx < expectedCount + 1; idx++) {
      offers.push(makeFakeOfferPreview());
    }

    render(<RentCardList cardsCount={expectedCount} offers={offers} />);

    expect(screen.queryAllByTestId('rent-card').length).toBe(expectedCount);
  });
});
