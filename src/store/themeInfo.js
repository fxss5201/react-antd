import { createSlice } from '@reduxjs/toolkit';
import { addPrefixName } from './../utils/index';
import config from './../config/index';

// 设置过本地的则使用本地的
let localeStorage = window.localStorage.getItem(addPrefixName('theme')) || '';
if (localeStorage) {
  localeStorage = JSON.parse(localeStorage)
} else {
  localeStorage = config.theme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    show: false,
    value: localeStorage,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload
    },
    changeThemeShow: (state, action) => {
      state.show = action.payload
    }
  },
});

export const { changeTheme, changeThemeShow } = themeSlice.actions;

export default themeSlice.reducer;

