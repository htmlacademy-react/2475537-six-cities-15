import { useState } from 'react';
import { fetchAddReview } from '../../api/api-actions';
import { useAppDispatch } from '../../hooks/index';
import EditableRating from '../editabeRating/editableRating';

type ReviewFormProps = {
  offerId: string;
};

function ReviewForm({ offerId }: ReviewFormProps) {
  const emptyReview = { text: '', rating: 0 };
  const dispatch = useAppDispatch();

  const [review, setReview] = useState(emptyReview);

  const handleSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(fetchAddReview({
      comment: review.text,
      rating: review.rating,
      offerId,
    }))
      .then(() => setReview(emptyReview));
  };

  const handleRatingChanged = (newRating: number) => {
    setReview({ ...review, rating: newRating });
  };

  const isSubmitDisabled = review.text.length < 50 || review.rating < 1;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <EditableRating value={review.rating} onRatingChanged={handleRatingChanged} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.text}
        onChange={(evt) => setReview({ ...review, text: evt.target.value })}
        data-testid='review-comment'
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
