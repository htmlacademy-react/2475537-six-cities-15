import { useEffect } from 'react';
import ReviewCard from '../../components/reviewCard/reviewCard';
import ReviewForm from '../../components/reviewForm/reviewForm';
import Loader from '../../components/loader/loader';
import { NewReview } from '../../types/offer';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useIsOfferReviewsLoadingSelector, useOfferReviewsSelector } from '../../store/reducer/data/selectors';
import { fetchOfferReviews, fetchAddReview } from '../../api/api-actions';
import { isAuthorized } from '../../services/utils';

type ReviewListProps = {
  offerId: string;
};

function ReviewList({ offerId }: ReviewListProps) {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(useOfferReviewsSelector);
  const isOfferReviewsLoading = useAppSelector(useIsOfferReviewsLoadingSelector);
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);

  const reviewAdded = (newReview: NewReview) => {
    dispatch(fetchAddReview(newReview));
  };

  useEffect(() => {
    dispatch(fetchOfferReviews(offerId));
  }, [dispatch, offerId]);

  if (isOfferReviewsLoading) {
    return (<Loader />);
  }

  const reviewsToShow = reviews
    .map((r) => r)
    .sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (b.date > a.date) {
        return 1;
      }
      return 0;
    }).slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsToShow.map((r) => (
          <li className="reviews__item" key={r.id}>
            <ReviewCard review={r} />
          </li>
        ))}
      </ul>
      {isAuthorized(authorizationStatus) && (
        <ReviewForm onReviewAdded={reviewAdded} offerId={offerId} />
      )}
    </section>
  );
}

export default ReviewList;
