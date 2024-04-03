import { useEffect, useState } from 'react';
import ReviewCard from '../../components/reviewCard/reviewCard';
import ReviewForm from '../../components/reviewForm/reviewForm';
import Loader from '../../components/loader/loader';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { Review, NewReview } from '../../types/offer';
import { fetchAddReview, fetchOfferReviews } from '../../api/api-calls';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';

type ReviewListProps = {
  offerId: string;
};

function ReviewList({ offerId }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOfferReviewsLoading, setIsOfferReviewsLoading] = useState(true);
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);

  const reviewAdded = (newReview: NewReview) => {
    fetchAddReview(offerId, newReview)
      .then((createdReview) => {
        setReviews([...reviews, ...[createdReview]]);
      });
  };

  useEffect(() => {
    fetchOfferReviews(offerId)
      .then((data) => {
        setIsOfferReviewsLoading(false);
        setReviews(data);
      })
      .catch(() => setIsOfferReviewsLoading(false));
  }, [offerId]);

  if (isOfferReviewsLoading) {
    return (<Loader />);
  }

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
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm onReviewAdded={reviewAdded} />
      )}
    </section>
  );
}

export default ReviewList;
