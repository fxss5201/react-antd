import { createSlice } from '@reduxjs/toolkit';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    value: 'zhCN',
  },
  reducers: {
    changeLocale: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;

