import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { registration, User } from "@/features/auth/authSlice";

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

  function registerUser(user: User) {
    dispatch(registration(user));
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        type="text"
        placeholder="Enter your name"
        {...register("name", { required: true, minLength: 2, maxLength: 60 })}
      />

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

      <Button type="submit">Create wallet</Button>
    </form>
  );
};
