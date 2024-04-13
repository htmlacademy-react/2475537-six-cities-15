import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchAddReview } from '../../api/api-actions';
import { APIRoutes } from '../../api/routes';
import { withStore } from '../../mocks/mockComponents';
import { extractActionsTypes } from '../../mocks/mocks';
import ReviewForm from './reviewForm';

describe('ReviewForm', () => {
  const offerId = 'someid';
  const commentElementTestId = 'review-comment';

  it('should render ReviewForm correctly', () => {
    const { withStoreComponent } = withStore(<ReviewForm offerId={offerId} />);

    render(withStoreComponent);

    expect(screen.getByTestId(commentElementTestId)).toBeInTheDocument();
  });

  it('should render correctly when user comment', async () => {
    const expectedComment = 'Some quite long text to be simial as real comment. Because we need to be happy';
    const { withStoreComponent } = withStore(<ReviewForm offerId={offerId} />);

    render(withStoreComponent);
    await userEvent.type(
      screen.getByTestId(commentElementTestId),
      expectedComment,
    );

    expect(screen.getByDisplayValue(expectedComment)).toBeInTheDocument();
  });

  it('should call add new review handler', async () => {
    const expectedComment = 'Some quite long text to be simial as real comment. Because we need to be happy';
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<ReviewForm offerId={offerId} />);
    mockAxiosAdapter.onPost(APIRoutes.Comments.replace('{offerId}', offerId)).reply(200);

    render(withStoreComponent);
    await userEvent.type(
      screen.getByTestId(commentElementTestId),
      expectedComment,
    );
    await userEvent.click(screen.getAllByTestId('rating-star')[1]);
    await userEvent.click(screen.getByRole('button'));    
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchAddReview.pending.type,
      fetchAddReview.fulfilled.type,
    ]);
  });
});
