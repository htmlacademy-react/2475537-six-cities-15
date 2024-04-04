import { State } from '../../../types/state';
import { Namespace } from '../../const';

export const useCurrentCitySelector = (state: State) => state[Namespace.Application].currentCity;
