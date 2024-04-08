import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('Loader', () => {
  it('should render loader component', () => {    
    render(<Loader/>);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
