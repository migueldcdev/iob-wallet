import { store } from "@/app/store";

export function getUserWallet(userEmail: string) {
  const state = store.getState();
  const wallets = state.wallet.wallets;
  const userWallet = wallets.find((wallet) => wallet.user == userEmail);
  return userWallet;
}
