import { State } from '../../../types/state';
import { Namespace } from '../../const';

export const useAuthorizationStatusSelector = (state: Pick<State, Namespace.User>) => state[Namespace.User].authorizationStatus;
export const useUserSelector = (state: Pick<State, Namespace.User>) => state[Namespace.User].user;
