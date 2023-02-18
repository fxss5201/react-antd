import { configureStore } from '@reduxjs/toolkit';
import locale from './locale';
import userInfo from './userInfo';
import themeInfo from './themeInfo';

export default configureStore({
  reducer: {
    locale,
    userInfo,
    themeInfo
  },
})
