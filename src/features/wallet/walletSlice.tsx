import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Transaction = {
    id: string;
    from: string;
    to: string;
    amount: number;
}

type Wallet = {
    id: string;
    user: string;
    balance: number;
    transactions: Transaction[]
}

interface WalletState {
    wallets: Wallet[]
}

const initialState: WalletState = {
    wallets: []
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        createWallet: (state, action: PayloadAction<string>) => {
            state.wallets.push({
                id: "",
                user: action.payload,
                balance: 0,
                transactions: []
            })
        }
    }
})

export const { createWallet } = walletSlice.actions;
export default walletSlice.reducer;
