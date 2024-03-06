import Star from './star';

type EditableRatingProps = {
  value: number;
  onRatingChanged: (newRating: number) => void;
};

function EditableRating({ value, onRatingChanged }: EditableRatingProps) {
  const renderStars = () => {
    const stars: Element[] = [];
    for (let i = 1; i < 6; i++) {
      stars.push((<Star rating={i} value={value} onRatingChanged={onRatingChanged} />));
    }
    return stars;
  };

  return (
    <div className="reviews__rating-form form__rating">
      {renderStars()}
    </div>
  );
}

export default EditableRating;
