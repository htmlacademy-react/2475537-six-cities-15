import { render, screen } from '@testing-library/react';
import Star from './star';

describe('Star', () => {
  it('should render Star component', () => {
    render(<Star />);

    expect(screen.getByTestId('rating-star')).toBeInTheDocument();
  });

  it('should render Star checked component', () => {
    render(<Star rating={2} value={2} />);

    expect(screen.getByTestId('rating-star')).toBeChecked();
  });
});
