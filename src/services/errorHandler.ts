import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorType } from '../api/api';
import { store } from '../store';
import { setError } from '../store/reducer/data/reducer';

export const TIMEOUT_SHOW_ERROR = 2000;

export const processErrorHandle = (error: ErrorType): void => {
  if (error.details?.length > 0) {
    store.dispatch(setError(error.details[0].messages?.[0] ?? error.message));
  } else {
    store.dispatch(setError(error.message));
  }
  store.dispatch(clearErrorAction());
};

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
