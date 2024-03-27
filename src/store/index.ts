import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/api';
import { reducer } from './reducer';

const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  }),
});
