import { createSlice } from "@reduxjs/toolkit";
import type { TUser } from "../../../types";

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

console.log(initialState);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

interface RootState {
  auth: TAuthState;
}

export const selectCurrentUser = (state: RootState): TAuthState["user"] =>
  state.auth.user;
export const useCurrentToken = (state: RootState): TAuthState["token"] =>
  state.auth.token;
