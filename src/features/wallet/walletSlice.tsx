import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Transaction = {
  id: string;
  from: string;
  to: string;
  amount: number;
  memo: string;
};

export type Wallet = {
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
        balance: 100,
        transactions: [],
      });
    },
    deposit: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const wallet = state.wallets.find(
        (wallet) => wallet.id === action.payload.id,
      );
      if (wallet) {
        wallet.balance =
          Math.round(
            (Number(wallet.balance) + Number(action.payload.amount)) * 100,
          ) / 100;
        wallet.transactions.push({
          id: uuidv4(),
          from: "Stripe",
          to: action.payload.id,
          amount: action.payload.amount,
          memo: "Deposit",
        });
      }
    },
    transfer: (
      state,
      action: PayloadAction<{ from: string; to: string; amount: number }>,
    ) => {
      const walletFrom = state.wallets.find(
        (wallet) => wallet.id === action.payload.from,
      );
      const walletTo = state.wallets.find(
        (wallet) => wallet.id === action.payload.to,
      );

      if (walletFrom && walletTo) {
        walletFrom.balance =
          Math.round(
            (Number(walletFrom.balance) - Number(action.payload.amount)) * 100,
          ) / 100;
        walletFrom.transactions.push({
          id: uuidv4(),
          from: action.payload.from,
          to: action.payload.to,
          amount: action.payload.amount,
          memo: "Withdraw",
        });
        walletTo.balance =
          Math.round(
            (Number(walletTo.balance) + Number(action.payload.amount)) * 100,
          ) / 100;
        walletTo.transactions.push({
          id: uuidv4(),
          from: action.payload.from,
          to: action.payload.to,
          amount: action.payload.amount,
          memo: "Deposit",
        });
      }
    },
  },
});

export const { createWallet, deposit, transfer } = walletSlice.actions;
export default walletSlice.reducer;
