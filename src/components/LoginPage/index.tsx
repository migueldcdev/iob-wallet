import { useForm, SubmitHandler } from "react-hook-form";
import { Center, Container, Text, Box, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { PasswordInput } from "../ui/password-input";
import { useAppDispatch } from "@/app/hooks";
import { login } from "@/features/auth/authSlice";

type Inputs = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(login({ email: data.email, password: data.password }));
    navigate("/");
  };

  return (
    <Center>
      <Container sm={{ width: "1/2" }} lg={{ width: "1/3" }} marginTop="5rem">
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
        <Text textAlign="center">
          Not account?
          <NavLink to="/register">
            &nbsp;
            <Box
              as="span"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Create one
            </Box>
          </NavLink>
        </Text>
      </Container>
    </Center>
  );
};
