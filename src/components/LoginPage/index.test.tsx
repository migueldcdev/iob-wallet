import { describe, test, expect } from "vitest";
import { LoginPage } from ".";
import { renderWithProviders } from "@/test-utils";
// wrap in BrowserRoute to fix: useNavigate() may be
//used only in the context of a <Router> component.
import { BrowserRouter } from "react-router-dom";
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
    currentUser: null,
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

describe("Login form unit test", () => {
  test("handles user login", async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
      {
        preloadedState: {
          auth: initialState.auth,
          wallet: initialState.wallet,
        },
      },
    );

    const user = userEvent.setup();

    const inputEmail = screen.getByLabelText("Email");

    await user.type(inputEmail, "user@mail.com");

    const inputPassword = screen.getByLabelText("Password");

    await user.type(inputPassword, "abc123");

    const loginButton = screen.getByRole("button", { name: "Log in" });

    await user.click(loginButton);

    const state = store.getState();

    expect(state.auth.currentUser).toBe(initialState.auth.users[0]);
  });
});
