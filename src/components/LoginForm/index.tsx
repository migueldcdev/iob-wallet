import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...(register("email"), { required: true })}
      />

      <label htmlFor="password">Password</label>
      <Input
        id="password"
        type="password"
        placeholder="Enter your password"
        {...(register("password"), { required: true, minLength: 8 })}
      />

      <Button type="submit">Log in</Button>
    </form>
  );
};
