import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'profile/login',
  async function (userData) {
    await fetch('https://breakhd2.store/sanctum/csrf-cookie');

    const response = await fetch('http://localhost:8010/proxy/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const authData = await response.json();
    localStorage.setItem('token', authData.data.token);
    return authData;
  }
);

export const register = createAsyncThunk(
  'profile/register',
  async function (registerData) {
    await fetch('https://breakhd2.store/sanctum/csrf-cookie');

    const response = await fetch(
      'http://localhost:8010/proxy/api/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      }
    );

    const authData = await response.json();

    return authData;
  }
);

export const confirmLogin = createAsyncThunk(
  'profile/confirmLogin',
  async function (token) {
    await fetch('https://breakhd2.store/sanctum/csrf-cookie');

    const response = await fetch('http://localhost:8010/proxy/api/get/user', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const data = await response.json();

    return data;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    token: null,
    profile: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        state.error = action.payload.errors;
        state.loading = false;
        return;
      }
      state.token = action.payload.data.token;
      state.profile = action.payload.data.profile;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        state.error = action.payload.errors;
        state.loading = false;
        return;
      }
      state.token = action.payload.token;
      state.profile = action.payload.profile;
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [confirmLogin.pending]: (state) => {
      state.loading = true;
    },
    [confirmLogin.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.profile = action.payload.profile;
      state.loading = false;
    },
    [confirmLogin.rejected]: (state, action) => {
      state.token = null;
      state.profile = null;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
