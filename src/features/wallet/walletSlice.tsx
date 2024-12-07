import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type Transaction = {
  id: string;
  from: string;
  to: string;
  amount: number;
  memo: string;
};

type Wallet = {
  id: string;
  user: string;
  balance: number;
  transactions: Transaction[];
};

interface WalletState {
  wallets: Wallet[];
}

const initialState: WalletState = {
  wallets: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    createWallet: (state, action: PayloadAction<string>) => {
      state.wallets.push({
        id: uuidv4(),
        user: action.payload,
        balance: 0,
        transactions: [],
      });
    },
  },
});

export const { createWallet } = walletSlice.actions;
export default walletSlice.reducer;
