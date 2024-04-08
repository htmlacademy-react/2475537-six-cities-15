import { render, screen } from '@testing-library/react';
import Rating from './rating';

describe('Rating', () => {
  it('should render Rating component', () => {
    render(<Rating className='class' rating={2} showNumberValue={false} />);

    expect(screen.getByTestId('rating-wrapper')).toBeInTheDocument();
  });

  it('should render Rating component with number value', () => {
    render(<Rating showNumberValue rating={3} className='class' />);

    expect(screen.getByTestId('rating-value')).toBeInTheDocument();
  });

  it('should render Rating component without number value', () => {
    render(<Rating showNumberValue={false} rating={3} className='class'/>);

    expect(screen.queryByTestId('rating-value')).not.toBeInTheDocument();
  });
});
