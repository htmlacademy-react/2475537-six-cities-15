import Star from './star';

type EditableRatingProps = {
  value: number;
  onRatingChanged: (newRating: number) => void;
};

const STARS_COUNT = 5;

function EditableRating({ value, onRatingChanged }: EditableRatingProps) {
  const renderStars = () => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < STARS_COUNT; i++) {
      stars.push((<Star rating={STARS_COUNT - i} value={value} onRatingChanged={onRatingChanged} key={STARS_COUNT - i} />));
    }
    return stars;
  };

  return (
    <div className="reviews__rating-form form__rating" data-testid='rating-wrapper'>
      {renderStars()}
    </div>
  );
}

export default EditableRating;
