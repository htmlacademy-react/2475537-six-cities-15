import { render, screen } from '@testing-library/react';
import HostCard from './hostCard';

describe('HostCard', () => {
  it('should render HostCard component', () => {
    const host = {
      name: 'someName',
      avatar: 'url',
      isPro: false,
    };
    render(<HostCard host={host} />);

    expect(screen.getByText(host.name)).toBeInTheDocument();
  });

  it('should render HostCard component with isPro mark', () => {
    const host = {
      name: 'someName',
      avatar: 'url',
      isPro: true,
    };
    render(<HostCard host={host} />);

    expect(screen.getByTestId('host-pro')).toHaveClass('offer__avatar-wrapper--pro');
  });
});
