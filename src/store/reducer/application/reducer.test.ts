import { cities } from '../../../mocks/cities';
import { makeFakeCity } from '../../../mocks/mocks';
import { applicationProcess, changeCity } from './reducer';

describe('ApplicationProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { currentCity: makeFakeCity() };

    const result = applicationProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentCity: cities.find((c) => c.code === 'Paris')
    };

    const result = applicationProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set new current city on "changeCity" action', () => {
    const expectedCurrentCity = makeFakeCity();

    const result = applicationProcess.reducer(undefined, changeCity(expectedCurrentCity));

    expect(result.currentCity).toEqual(expectedCurrentCity);
  });
});
