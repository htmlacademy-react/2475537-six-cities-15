type RatingProps = {
  rating: number;
  className: string;
  showNumberValue: boolean;
};

function Rating({ rating, className, showNumberValue }: RatingProps) {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${rating * 20}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {showNumberValue && <span className={`${className}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

export default Rating;
