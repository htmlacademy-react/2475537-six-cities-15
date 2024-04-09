import { State } from '../../../types/state';
import { Namespace } from '../../const';

export const useCurrentCitySelector = (state: Pick<State, Namespace.Application>) => state[Namespace.Application].currentCity;
