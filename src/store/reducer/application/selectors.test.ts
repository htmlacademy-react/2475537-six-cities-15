import { makeFakeCity } from '../../../mocks/mocks';
import { Namespace } from '../../const';
import { useCurrentCitySelector } from './selectors';

describe('ApplicationProcess selectors', () => {
  const state = {
    [Namespace.Application]: {
      currentCity: makeFakeCity(),
    }
  };

  it('should return currentCity from state', () => {
    const { currentCity } = state[Namespace.Application];
    const result = useCurrentCitySelector(state);
    expect(result).toEqual(currentCity);
  });
});
