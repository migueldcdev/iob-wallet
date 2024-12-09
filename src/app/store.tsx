import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import walletReducer from "../features/wallet/walletSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
