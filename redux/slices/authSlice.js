import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
