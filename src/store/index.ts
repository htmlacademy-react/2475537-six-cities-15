import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/api';
import { rootReducer } from './reducer/root-reducer';

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  }),
});
