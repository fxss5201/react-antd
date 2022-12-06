import { createSlice } from '@reduxjs/toolkit';
import { addPrefixName } from './../utils/index';
import i18n from './../i18n';
import config from './../config/index';

let localeStorage = window.localStorage.getItem(addPrefixName('locale')) || '';
if (localeStorage) {
  localeStorage = JSON.parse(localeStorage)
  if (localeStorage !== config.locale) {
    i18n.changeLanguage(localeStorage)
  }
}

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    value: localeStorage || config.locale,
  },
  reducers: {
    changeLocale: (state, action) => {
      i18n.changeLanguage(action.payload)
      state.value = action.payload
    },
  },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;

