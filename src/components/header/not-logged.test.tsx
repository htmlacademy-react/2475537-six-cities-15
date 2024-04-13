import { render, screen } from '@testing-library/react';
import { withHistory } from '../../mocks/mock-components';
import NotLogged from './not-logged';

describe('NotLogged', () => {
  it('should render NotLogged component', () => {
    const withHistoryComponent = withHistory(<NotLogged />);
    render(withHistoryComponent);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
