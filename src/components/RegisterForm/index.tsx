import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Input, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { registration, User } from "@/features/auth/authSlice";
import { createWallet } from "@/features/wallet/walletSlice";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => registerUser(data);

  //refactor this function?
  function registerUser(user: User) {
    dispatch(registration(user));
    dispatch(createWallet(user.email));
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginY="3">
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true, minLength: 2, maxLength: 60 })}
        />
      </Box>
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
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true, minLength: 8 })}
        />
      </Box>
      <Center>
        <Button type="submit" marginY="3" width="full">
          Create wallet
        </Button>
      </Center>
    </form>
  );
};
