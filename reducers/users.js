import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { name: null, username: null },
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.name = action.payload.name;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.name = null;
      state.value.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;