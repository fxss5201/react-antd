import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: {
      name: '',
      access: []
    }
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;