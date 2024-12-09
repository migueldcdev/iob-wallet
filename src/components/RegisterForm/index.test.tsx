import { describe, test, expect } from "vitest";
import { RegisterForm } from ".";
import { renderWithProviders } from "@/test-utils";
// wrap in BrowserRoute to fix: useNavigate() may be
//used only in the context of a <Router> component.
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";

const initialState = {
  auth: {
    users: [],
    currentUser: null,
  },
  wallet: {
    wallets: [],
  },
};

describe("Register Form component unit test", () => {
  test("creates user and set as current", async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>,
      {
        preloadedState: {
          auth: initialState.auth,
          wallet: initialState.wallet,
        },
      },
    );

    const user = userEvent.setup();

    const nameInput = screen.getByLabelText("Name");

    await user.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText("Email");

    await user.type(emailInput, "user@mail.com");

    const passwordInput = screen.getByLabelText("Password");

    await user.type(passwordInput, "abc123");

    const registerButton = screen.getByRole("button", {
      name: "Create wallet",
    });

    await user.click(registerButton);

    const state = store.getState();

    expect(state.auth.users.length).toBe(1);

    expect(state.auth.currentUser?.id).toBeDefined();
    expect(state.auth.currentUser?.name).toBe("Jane");
    expect(state.auth.currentUser?.email).toBe("user@mail.com");
    expect(state.auth.currentUser?.password).toBe("abc123");
  });

  test("creates wallet", async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>,
      {
        preloadedState: {
          auth: initialState.auth,
          wallet: initialState.wallet,
        },
      },
    );

    const user = userEvent.setup();

    const nameInput = screen.getByLabelText("Name");

    await user.type(nameInput, "Jane");

    const emailInput = screen.getByLabelText("Email");

    await user.type(emailInput, "user@mail.com");

    const passwordInput = screen.getByLabelText("Password");

    await user.type(passwordInput, "abc123");

    const registerButton = screen.getByRole("button", {
      name: "Create wallet",
    });

    await user.click(registerButton);

    const state = store.getState();

    expect(state.wallet.wallets.length).toBe(1);
  });
});
