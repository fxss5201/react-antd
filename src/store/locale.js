import { createSlice } from '@reduxjs/toolkit';
import { addPrefixName } from './../utils/index';
import i18n from './../i18n';
import config from './../config/index';
import { getBrowserLang } from "./../utils";

const defaultBrowserLang = getBrowserLang();

// 设置过本地的则使用本地的
let localeStorage = window.localStorage.getItem(addPrefixName('locale')) || '';
if (localeStorage) {
  localeStorage = JSON.parse(localeStorage)
  if (localeStorage !== config.locale) {
    i18n.changeLanguage(localeStorage)
  }
} else {
  // 未设置本地的，则优先使用 config.locale ，否则从浏览器获取到的语言 navigator.language || navigator.browserLanguage
  if (!config.locale && config.isShowToggleLang) {
    localeStorage = defaultBrowserLang
    i18n.changeLanguage(localeStorage)
  } else {
    localeStorage = config.locale || 'zhCN'
  }
}

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    value: localeStorage,
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

