import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Deposit } from ".";
import { renderWithProviders } from "@/test-utils";
import { userEvent } from "@testing-library/user-event";

const initialState = {
  auth: {
    users: [
      {
        id: "4cedda05-4d57-4837-b66f-92d357c22d1b",
        name: "John",
        email: "user@mail.com",
        password: "abc123",
      },
    ],
    currentUser: {
      id: "4cedda05-4d57-4837-b66f-92d357c22d1b",
      name: "John",
      email: "user@mail.com",
      password: "abc123",
    },
  },
  wallet: {
    wallets: [
      {
        id: "c9301bf2-d26b-4d4e-a22b-9d594bd4b873",
        user: "user@mail.com",
        balance: 100,
        transactions: [],
      },
    ],
  },
};

describe("Deposit component unit test", () => {
  test("succesfully deposits in wallet", async () => {
    const { store } = renderWithProviders(
      <Deposit
        setShowDeposit={() => false}
        wallet={initialState.wallet.wallets[0]}
      />,
      {
        preloadedState: {
          auth: initialState.auth,
          wallet: initialState.wallet,
        },
      },
    );

    const user = userEvent.setup();

    const inputField = screen.getByRole("spinbutton");

    await user.type(inputField, "50");

    expect((inputField as HTMLInputElement).value).toBe("50");

    const depositButton = screen.getByRole("button", { name: "Deposit" });

    await user.click(depositButton);

    const state = store.getState();

    expect(state.wallet.wallets[0].balance).toBe(150);
  });

  test("saves transaction after deposit", async () => {
    const { store } = renderWithProviders(
      <Deposit
        setShowDeposit={() => false}
        wallet={initialState.wallet.wallets[0]}
      />,
      {
        preloadedState: {
          auth: initialState.auth,
          wallet: initialState.wallet,
        },
      },
    );

    const user = userEvent.setup();

    const inputField = screen.getByRole("spinbutton");

    await user.type(inputField, "50");

    expect((inputField as HTMLInputElement).value).toBe("50");

    const depositButton = screen.getByRole("button", { name: "Deposit" });

    expect(await user.click(depositButton)).toMatchSnapshot();

    const state = store.getState();

    expect(state.wallet.wallets[0].transactions.length).toBe(1);
  });
});
