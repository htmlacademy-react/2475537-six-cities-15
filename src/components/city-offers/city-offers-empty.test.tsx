import { render, screen } from '@testing-library/react';
import CityOffersEmpty from './city-offers-empty';
import { withStore } from '../../mocks/mock-components';
import { Namespace } from '../../store/const';
import { makeFakeCity } from '../../mocks/mocks';

describe('CityOffersEmpty', () => {
  const currentCity = makeFakeCity();

  it('should render CityOffersEmpty component', () => {
    const { withStoreComponent } = withStore(<CityOffersEmpty />, { [Namespace.Application]: { currentCity } });

    render(withStoreComponent);

    expect(screen.getByText(`We could not find any property available at the moment in ${currentCity.title}`)).toBeInTheDocument();
  });
});
