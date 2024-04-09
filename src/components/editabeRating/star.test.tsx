import { render, screen } from '@testing-library/react';
import Star from './star';

describe('Star', () => {
  const onRatingChanged = () => { };

  it('should render Star component', () => {
    render(<Star rating={1} value={2} onRatingChanged={onRatingChanged} />);

    expect(screen.getByTestId('rating-star')).toBeInTheDocument();
  });

  it('should render Star checked component', () => {
    render(<Star rating={2} value={2} onRatingChanged={onRatingChanged} />);

    expect(screen.getByTestId('rating-star')).toBeChecked();
  });
});
