import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

import theme from '../theming/theme-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
  },
  theme: 'white',
  token: null,
  isLoggedIn: false,
  error: null,
  isGetingCurentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // register
    [authOperations.register.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.username;
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },

    // login
    [authOperations.logIn.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.username;
      state.user.avatarURL = action.payload.user.avatarURL;
      state.error = null;

      state.token = action.payload.user.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },

    // LogOut
    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
        avatarURL: null,
      };

      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
    },

    // current
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isGetingCurentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      const { email, username, avatarURL } = action.payload.user;

      state.user.email = email;
      state.user.name = username;
      state.user.avatarURL = avatarURL;
      state.error = null;

      state.isLoggedIn = true;
      state.isGetingCurentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
      state.isGetingCurentUser = false;
    },

    // updateDataUser
    [authOperations.updateUserData.fulfilled](state, action) {
      const { email, username, avatarURL } = action.payload.user;

      state.user.email = email;
      state.user.name = username;
      state.user.avatarURL = avatarURL;
      state.error = null;
    },
    [authOperations.updateUserData.rejected](state, action) {
      state.error = action.payload;
    },

    // theme
    [theme.themeSwitch.fulfilled](state, action) {
      state.theme = action.payload;
    },
  },
});

export default authSlice.reducer;
