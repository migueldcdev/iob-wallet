import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Input, Button, Center } from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { login } from "@/features/auth/authSlice";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(login({ email: data.email, password: data.password }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginY="3">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
      </Box>
      <Box marginY="3">
        <label htmlFor="password">Password</label>
        <PasswordInput
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
      </Box>

      <Center>
        <Button type="submit" marginY="3" width="full">
          Log in
        </Button>
      </Center>
    </form>
  );
};
