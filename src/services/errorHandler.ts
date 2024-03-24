import { ErrorType } from '../api/api';
import { clearErrorAction } from '../api/api-actions';
import { store } from '../store';
import { setError } from '../store/actions';

export const processErrorHandle = (error: ErrorType): void => {
  if (error.details?.length > 0) {
    store.dispatch(setError(error.details[0].messages?.[0] ?? error.message));
  } else {
    store.dispatch(setError(error.message));
  }
  store.dispatch(clearErrorAction());
};
