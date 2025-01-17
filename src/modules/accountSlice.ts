import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { IAccountSliceState } from 'models/account';

import { accountApi } from './accountApi';
import { RootState } from './store';

const accountInitialState: IAccountSliceState = {
  accountInfo: {},
  isLogin: false,
};

const reducers = {};

const slice = createSlice({
  name: 'account',
  initialState: accountInitialState,
  reducers: reducers,
  extraReducers: builder => {
    builder.addMatcher(accountApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.accountInfo = payload.accountInfo;
      state.isLogin = true;
    });
    builder.addMatcher(accountApi.endpoints.login.matchRejected, (state, { payload }) => {
      state.accountInfo = {};
      state.isLogin = false;
    });
    builder.addMatcher(accountApi.endpoints.signup.matchFulfilled, (state, { payload }) => {
      state.accountInfo = payload.accountInfo;
      state.isLogin = true;
    });
    builder.addMatcher(accountApi.endpoints.signup.matchRejected, (state, { payload }) => {
      state.accountInfo = {};
      state.isLogin = false;
    });
  },
});

const selectAccountInfo = createDraftSafeSelector(
  (state: IAccountSliceState) => state.accountInfo,
  accountInfo => accountInfo,
);

const selectIsLogin = createDraftSafeSelector(
  (state: IAccountSliceState) => state.isLogin,
  isLogin => isLogin,
);

export const accountSelector = {
  accountInfo: (state: RootState) => selectAccountInfo(state[ACCOUNT]),
  isLogin: (state: RootState) => selectIsLogin(state[ACCOUNT]),
};

export const ACCOUNT = slice.name;
export const accountReducer = slice.reducer;
export const accountAction = slice.actions;
