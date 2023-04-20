import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import instanceBacEnd from '../../helpers/requestBackEnd';

const token = {
  set(token) {
    instanceBacEnd.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceBacEnd.defaults.headers.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/registrateUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instanceBacEnd.post('/users/signup', userData);

      Notiflix.Notify.success(`Account successfully created.`);
      return data;
    } catch (err) {
      Notiflix.Notify.failure(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const logIn = createAsyncThunk('auth/logInUser', async (userData, thunkAPI) => {
  try {
    const { data } = await instanceBacEnd.post('/users/login', userData);
    Notiflix.Notify.success(`Authorization completed.`);
    token.set(data.user.token);
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return thunkAPI.rejectWithValue(err.message);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const { data } = await instanceBacEnd.get('/users/logout');

    token.unset();

    Notiflix.Notify.success(`Logout completed.`);

    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);

    return thunkAPI.rejectWithValue(err.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/curentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await instanceBacEnd.get('users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async (updateData, thunkAPI) => {
    try {
      const { data } = await instanceBacEnd.patch('/users/update', updateData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });

      Notiflix.Notify.success(`Info changed`);
      return data;
    } catch (err) {
      Notiflix.Notify.success(err.message);

      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUserData,
};
export default operations;
