import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import walletReducer from "../features/wallet/walletSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
