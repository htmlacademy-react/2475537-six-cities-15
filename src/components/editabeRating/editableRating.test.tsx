import { render, screen } from '@testing-library/react';
import EditableRating from './editableRating';

describe('EditableRating', () => {
  it('should render EditableRating component', () => {
    render(<EditableRating onRatingChanged={() => void} value={2}/>);

    expect(screen.getByTestId('rating-wrapper')).toBeInTheDocument();
  });
});
