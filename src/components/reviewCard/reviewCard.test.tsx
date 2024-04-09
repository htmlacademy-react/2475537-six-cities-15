import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../mocks/mocks';
import ReviewCard from './reviewCard';

describe('ReviewCard', () => {
  it('should render ReviewCard component', () => {
    const review = makeFakeReview();
    render(<ReviewCard review={review} />);

    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(review.comment)).toBeInTheDocument();
  });
});
