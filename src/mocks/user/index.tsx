import { store } from "@/app/store";
import { login } from "@/features/auth/authSlice";

export function authenticateUser(email: string, password: string): void {
  const state = store.getState();
  const users = state.auth.users;

  const user = users.find(
    (user) => user.email == email && user.password == password,
  );

  if (user) store.dispatch(login(user));
}
