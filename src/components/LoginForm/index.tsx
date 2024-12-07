import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { login } from "@/features/auth/authSlice";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    authenticateUser(data.email);

  function authenticateUser(email: string) {
    dispatch(login(email));
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: true })}
      />

      <label htmlFor="password">Password</label>
      <Input
        id="password"
        type="password"
        placeholder="Enter your password"
        {...register("password", { required: true, minLength: 8 })}
      />

      <Button type="submit">Log in</Button>
    </form>
  );
};
