import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
  password: string;
};

interface AuthState {
  users: User[];
  currentUser: string | null;
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
    register: (state, action) => {
      state.users.push(action.payload.email);
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
