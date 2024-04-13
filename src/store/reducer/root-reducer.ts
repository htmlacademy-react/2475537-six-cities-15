import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { applicationProcess } from './application/reducer';
import { userProcess } from './user/reducer';
import { dataProcess } from './data/reducer';

export const rootReducer = combineReducers({
  [Namespace.Data]: dataProcess.reducer,
  [Namespace.Application]: applicationProcess.reducer,
  [Namespace.User]: userProcess.reducer,
});
