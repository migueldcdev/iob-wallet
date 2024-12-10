import { useForm, SubmitHandler } from "react-hook-form";
import { Center, Container, Text, Box, Input, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { registration, User } from "@/features/auth/authSlice";
import { createWallet } from "@/features/wallet/walletSlice";
import { Alert } from "@/components/ui/alert";
import { PasswordInput } from "../ui/password-input";

type Inputs = Omit<User, "id">;

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => registerUser(data);

  function registerUser(user: Inputs) {
    dispatch(registration(user));
    dispatch(createWallet(user.email));
    navigate("/");
  }

  return (
    <Center>
      <Container sm={{ width: "1/2" }} lg={{ width: "1/3" }} marginTop="5rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginY="3">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 60,
              })}
            />
            {errors.name && (
              <Alert
                status="error"
                title="Name should be between 2 and 60 characters"
                marginTop="1"
                padding="1"
              />
            )}
          </Box>
          <Box marginY="3">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <Alert
                status="error"
                title="Email is required"
                marginTop="1"
                padding="1"
              />
            )}
          </Box>
          <Box marginY="3">
            <label htmlFor="password">Password</label>
            <PasswordInput
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <Alert
                status="error"
                title="Password should have at least 6 characters"
                marginTop="1"
                padding="1"
              />
            )}
          </Box>
          <Center>
            <Button type="submit" marginY="3" width="full">
              Create wallet
            </Button>
          </Center>
        </form>
        <Text textAlign="center">
          Already have an account?
          <NavLink to="/login">
            &nbsp;
            <Box
              as="span"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Log in
            </Box>
          </NavLink>
        </Text>
      </Container>
    </Center>
  );
};
