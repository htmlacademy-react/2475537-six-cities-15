import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities } from '../../../mocks/cities';
import { City } from '../../../types/location';
import { ApplicationProcess } from "../../../types/state";
import { Namespace } from '../../const';


const initialState: ApplicationProcess = {
  currentCity: cities.find((c) => c.code === 'Paris') as City,
};

export const applicationProcess = createSlice({
  name: Namespace.Application,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.currentCity = action.payload;
    },
  }
});

export const { changeCity } = applicationProcess.actions;
