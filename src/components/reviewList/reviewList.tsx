import { useState } from 'react';
import ReviewCard from '../../components/reviewCard/reviewCard';
import ReviewForm from '../../components/reviewForm/reviewForm';
import { Review } from '../../types/offer';

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList(props: ReviewListProps) {
  const [reviews, setReviews] = useState(props.reviews);

  const reviewAdded = (newReview: Review) => {
    setReviews([...reviews, ...[newReview]]);
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((r) => (
          <li className="reviews__item" key={r.id}>
            <ReviewCard review={r} />
          </li>
        ))}
      </ul>
      <ReviewForm onReviewAdded={reviewAdded}/>
    </section>
  );
}

export default ReviewList;
