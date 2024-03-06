import { useState } from 'react';
import { Review } from '../../types/offer';
import EditableRating from '../editabeRating/editableRating';

type ReviewFormProps = {
  onReviewAdded: (newReview: Review) => void;
};

function ReviewForm({ onReviewAdded }: ReviewFormProps) {
  const emptyReview = { text: '', rating: 0 };

  const [review, setReview] = useState(emptyReview);

  const onSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    onReviewAdded({
      id: -1,
      authorImage: 'img/avatar-max.jpg',
      authorName: 'Petr',
      date: new Date(),
      review: review.text,
      rating: review.rating,
    });
    setReview(emptyReview);
  };

  const handleRatingChanged = (newRating: number) => {
    setReview({ ...review, rating: newRating });
  };

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
          disabled={review.text.length < 50}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
