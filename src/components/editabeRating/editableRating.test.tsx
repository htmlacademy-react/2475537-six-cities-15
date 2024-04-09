import { render, screen } from '@testing-library/react';
import EditableRating from './editableRating';

describe('EditableRating', () => {
  const onRatingChanged = () => { };

  it('should render EditableRating component', () => {
    render(<EditableRating onRatingChanged={onRatingChanged} value={2}/>);

    expect(screen.getByTestId('rating-wrapper')).toBeInTheDocument();
  });
});
