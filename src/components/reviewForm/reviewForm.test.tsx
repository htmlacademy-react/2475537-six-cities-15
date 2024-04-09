import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withStore } from '../../mocks/mockComponents';
import ReviewForm from './reviewForm';

describe('ReviewForm', () => {
  const offerId = 'someid';
  const handleAddReview = vi.fn();

  const commentElementTestId = 'review-comment';

  it('should render ReviewForm correctly', () => {
    const { withStoreComponent } = withStore(<ReviewForm offerId={offerId} onReviewAdded={handleAddReview} />);

    render(withStoreComponent);

    expect(screen.getByTestId(commentElementTestId)).toBeInTheDocument();
  });

  it('should render correctly when user comment', async () => {
    const expectedComment = 'Some quite long text to be simial as real comment. Because we need to be happy';
    const { withStoreComponent } = withStore(<ReviewForm offerId={offerId} onReviewAdded={handleAddReview} />);

    render(withStoreComponent);
    await userEvent.type(
      screen.getByTestId(commentElementTestId),
      expectedComment,
    );

    expect(screen.getByDisplayValue(expectedComment)).toBeInTheDocument();
  });

  it('should call add new review handler', async () => {
    const expectedComment = 'Some quite long text to be simial as real comment. Because we need to be happy';
    const { withStoreComponent } = withStore(<ReviewForm offerId={offerId} onReviewAdded={handleAddReview} />);

    render(withStoreComponent);
    await userEvent.type(
      screen.getByTestId(commentElementTestId),
      expectedComment,
    );
    await userEvent.click(screen.getByRole('button'));

    expect(handleAddReview).toHaveBeenCalledTimes(1);
    expect(handleAddReview).toHaveBeenCalledWith({
      offerId,
      comment: expectedComment,
      rating: 0,
    });
  });
});
