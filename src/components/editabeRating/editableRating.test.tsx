import { render, screen } from '@testing-library/react';
import EditableRating from './editableRating';

describe('EditableRating', () => {
  it('should render EditableRating component', () => {
    render(<EditableRating />);

    expect(screen.getByTestId('rating-wrapper')).toBeInTheDocument();
  });
});
