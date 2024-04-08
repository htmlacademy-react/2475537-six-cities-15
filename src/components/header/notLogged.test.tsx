import { render, screen } from '@testing-library/react';
import { withHistory } from '../../mocks/mockComponents';
import NotLogged from './notLogged';

describe('NotLogged', () => {
  it('should render NotLogged component', () => {
    const withHistoryComponent = withHistory(<NotLogged />);
    render(withHistoryComponent);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
