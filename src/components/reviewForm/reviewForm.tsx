import { useState } from 'react';
import { Review } from '../../types/offer';

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

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="5-stars"
          type="radio"
          checked={review.rating === 5}
          onChange={() => setReview({ ...review, rating: 5 })}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="4-stars"
          type="radio"
          checked={review.rating === 4}
          onChange={() => setReview({ ...review, rating: 4 })}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="3-stars"
          type="radio"
          checked={review.rating === 3}
          onChange={() => setReview({ ...review, rating: 3 })}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="2-stars"
          type="radio"
          checked={review.rating === 2}
          onChange={() => setReview({ ...review, rating: 2 })}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="1-star"
          type="radio"
          checked={review.rating === 1}
          onChange={() => setReview({ ...review, rating: 1 })}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
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
