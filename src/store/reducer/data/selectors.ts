import { State } from "../../../types/state";
import { Namespace } from "../../const";

export const useOffersSelector = (state: State) => state[Namespace.Data].offers.filter((o) => o.city.name === state[Namespace.Application].currentCity.code);
export const useIsDataLoadingSelector = (state: State) => state[Namespace.Data].isDataLoading;
