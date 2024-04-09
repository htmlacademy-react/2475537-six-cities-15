import { render, screen } from '@testing-library/react';
import CitiesList from './citiesList';
import { cities } from '../../mocks/cities';
import { withStore } from '../../mocks/mockComponents';
import { Namespace } from '../../store/const';

describe('CitiesList', () => {
  const currentCity = cities[Math.floor(Math.random() * cities.length)];

  it('should render CitiesList component with all allowed cities', () => {
    const { withStoreComponent } = withStore(<CitiesList cities={cities} />, { [Namespace.Application]: { currentCity } });

    render(withStoreComponent);

    expect(screen.queryAllByTestId('city-wrapper').length).toBe(cities.length);
  });

  it('should render CitiesList component with selected active city', () => {
    const { withStoreComponent } = withStore(<CitiesList cities={cities} />, { [Namespace.Application]: { currentCity } });

    render(withStoreComponent);

    expect(screen.getByTestId(currentCity.title)).toHaveClass('tabs__item--active');
  });
});
