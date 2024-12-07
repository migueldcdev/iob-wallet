import { NavLink } from "react-router-dom";
import { RegisterForm } from "@/components/RegisterForm";

export const RegistrationPage = () => {
  return (
    <div>
      <RegisterForm />
      <p>
        Already have an account? <NavLink to="/login">Log in</NavLink>
      </p>
    </div>
  );
};
