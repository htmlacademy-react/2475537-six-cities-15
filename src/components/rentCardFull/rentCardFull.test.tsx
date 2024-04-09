import { render, screen } from '@testing-library/react';
import { makeFakeOfferInfo } from '../../mocks/mocks';
import RentCardFull from './rentCardFull';

vi.mock('../reviewList/reviewList', () => ({
  default: () => (<p></p>)
}));

describe('RentCardFull', () => {
  const offer = makeFakeOfferInfo();

  it('should render RentCardFull component', () => {
    render(<RentCardFull offer={offer} />);

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(`${offer.bedrooms} Bedrooms`)).toBeInTheDocument();
    expect(screen.getByText(`Max ${offer.maxAdults} adults`)).toBeInTheDocument();
  });

  it('should render RentCardFull component with isFavorite mark', () => {
    offer.isFavorite = true;
    render(<RentCardFull offer={offer} />);

    expect(screen.getByTestId('offer-is-favorite')).toBeInTheDocument();
  });

  it('should render RentCardFull component with isPremium mark', () => {
    offer.isPremium = true;
    render(<RentCardFull offer={offer} />);

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
