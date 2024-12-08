import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

interface AuthState {
  users: User[];
  currentUser: User | null;
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    registration: (state, action: PayloadAction<Omit<User, "id">>) => {
      const user = {
        id: uuidv4(),
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };

      state.users.push(user);
      state.currentUser = user;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, registration, logout } = authSlice.actions;
export default authSlice.reducer;
