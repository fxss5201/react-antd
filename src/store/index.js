import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './locale';

export default configureStore({
  reducer: {
    locale: localeReducer
  },
})
