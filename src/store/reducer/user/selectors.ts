import { State } from "../../../types/state";
import { Namespace } from "../../const";

export const useAuthorizationStatusSelector = (state: State) => state[Namespace.User].authorizationStatus;
