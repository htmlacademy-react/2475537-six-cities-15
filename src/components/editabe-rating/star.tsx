type StarProps = {
  rating: number;
  value: number;
  onRatingChanged: (newRating: number) => void;
};

function Star({ rating, value, onRatingChanged }: StarProps) {
  const renderTitle = () => {
    switch (rating) {
      case 1:
        return 'terribly';
      case 2:
        return 'badly';
      case 3:
        return 'not bad';
      case 4:
        return 'good';
      case 5:
        return 'perfect';
      default:
        return '';
    }
  };

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={`${rating}-stars`}
        type="radio"
        checked={rating === value}
        onChange={() => onRatingChanged(rating)}
        data-testid='rating-star'
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={renderTitle()}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default Star;
