import { Review } from '../../types/offer';

type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps) {
  const reviewDate = new Date(review.date);
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt={review.user.name}
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={reviewDate.toISOString()}>{reviewDate.toLocaleString('en-us', { month: 'long', year: 'numeric' })}</time>
      </div>
    </>
  );
}

export default ReviewCard;
