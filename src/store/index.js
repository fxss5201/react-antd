import { configureStore } from '@reduxjs/toolkit';
import locale from './locale';
import userInfo from './userInfo';

export default configureStore({
  reducer: {
    locale,
    userInfo
  },
})
