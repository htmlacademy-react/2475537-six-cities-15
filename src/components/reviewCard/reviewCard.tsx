import { Review } from '../../types/offer';

type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.authorImage}
            width={54}
            height={54}
            alt={review.authorName}
          />
        </div>
        <span className="reviews__user-name">{review.authorName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.review}</p>
        <time className="reviews__time" dateTime={review.date.toISOString()}>{review.date.toLocaleString('en-us', { month: 'long', year: 'numeric' })}</time>
      </div>
    </li>
  );
}

export default ReviewCard;
