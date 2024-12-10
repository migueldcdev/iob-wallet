import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Transfer } from ".";
import { renderWithProviders } from "@/test-utils";
import { userEvent } from "@testing-library/user-event";

const initialState = {
  auth: {
    users: [
      {
        id: "dce5a17b-423e-4ab2-9d13-9b64bfeff21f",
        name: "John",
        email: "john@mail.com",
        password: "abc123",
      },
      {
        id: "09c01c5e-df9c-4eff-bc2d-4596d802bddc",
        name: "Jane",
        email: "jane@mail.com",
        password: "abc123",
      },
    ],
    currentUser: {
      id: "09c01c5e-df9c-4eff-bc2d-4596d802bddc",
      name: "Jane",
      email: "jane@mail.com",
      password: "abc123",
    },
  },
  wallet: {
    wallets: [
      {
        id: "3bc20a08-997a-439e-8953-a3034bf372dc",
        user: "john@mail.com",
        balance: 100,
        transactions: [],
      },
      {
        id: "470473c4-db5f-4c15-af2b-d27c7fcbceb8",
        user: "jane@mail.com",
        balance: 100,
        transactions: [],
      },
    ],
  },
};

describe("Transfer component unit test", () => {
  test("transfer money and save transactions", async () => {
    const { store } = renderWithProviders(
      <Transfer
        setShowTransfer={() => false}
        wallet={initialState.wallet.wallets[1]}
      />,
      {
        preloadedState: {
          auth: initialState.auth,
          wallet: initialState.wallet,
        },
      },
    );

    const user = userEvent.setup();

    const walletSelect = screen.getByRole("combobox") as HTMLSelectElement;

    await user.selectOptions(
      walletSelect,
      "3bc20a08-997a-439e-8953-a3034bf372dc",
    );    

    const inputSlider = screen.getByRole("slider");

    await user.type(inputSlider, "{arrowright}");

    const transferButton = screen.getByRole("button", { name: "Transfer" });

    await user.click(transferButton);

    const state = store.getState();

    expect(state.wallet.wallets[0].balance).toBe(100.1);
    expect(state.wallet.wallets[0].transactions.length).toBe(1);
    expect(state.wallet.wallets[1].balance).toBe(99.9);
    expect(state.wallet.wallets[1].transactions.length).toBe(1);
  });
});
