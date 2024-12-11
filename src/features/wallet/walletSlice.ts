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

function calculateRoundedBalance(
  balance: number,
  amount: number,
  operation: "add" | "substract",
) {
  const total =
    operation === "add"
      ? Number(balance) + Number(amount)
      : Number(balance) - Number(amount);

  return Math.round(total * 100) / 100;
}

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
        wallet.balance = calculateRoundedBalance(
          wallet.balance,
          action.payload.amount,
          "add",
        );
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
        walletFrom.balance = calculateRoundedBalance(
          walletFrom.balance,
          action.payload.amount,
          "substract",
        );

        walletFrom.transactions.push({
          id: uuidv4(),
          from: action.payload.from,
          to: action.payload.to,
          amount: action.payload.amount,
          memo: "Withdraw",
        });
        walletTo.balance = calculateRoundedBalance(
          walletTo.balance,
          action.payload.amount,
          "add",
        );

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
