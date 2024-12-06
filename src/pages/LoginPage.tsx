import { LoginForm } from "@/components/LoginForm";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <p>
        Not account? <NavLink to="/register">Create one</NavLink>
      </p>
    </div>
  );
};
