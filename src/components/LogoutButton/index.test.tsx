import { describe, expect, test } from "vitest";
import { LogoutButton } from ".";
import { renderWithProviders } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";

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

describe("Logout button component unit test", () => {
  test("succesfully logs out user", async () => {
    const { store } = renderWithProviders(<LogoutButton />, {
      preloadedState: {
        auth: initialState.auth,
        wallet: initialState.wallet,
      },
    });

    const user = userEvent.setup();

    const logoutButton = screen.getByRole("button");

    await user.click(logoutButton);

    const state = store.getState();

    expect(state.auth.currentUser).toBe(null);
  });
});
