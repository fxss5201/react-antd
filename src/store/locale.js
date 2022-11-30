import { createSlice } from '@reduxjs/toolkit';
import { addPrefixName } from './../utils/index';

let localeStorage = window.localStorage.getItem(addPrefixName('locale')) || '';
if (localeStorage) localeStorage = JSON.parse(localeStorage)

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    value: localeStorage || 'zhCN',
  },
  reducers: {
    changeLocale: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;

