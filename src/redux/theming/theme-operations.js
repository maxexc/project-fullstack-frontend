import { createAsyncThunk } from '@reduxjs/toolkit';

const themeSwitch = createAsyncThunk('user/themeSwitch', (theme, thunkAPI) => {
  try {
    return theme;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const theme = {
  themeSwitch,
};
export default theme;
