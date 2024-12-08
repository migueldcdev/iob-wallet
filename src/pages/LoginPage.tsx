import { Center, Container, Text, Box } from "@chakra-ui/react";
import { LoginForm } from "@/components/LoginForm";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Center>
      <Container sm={{ width: "1/2" }} lg={{ width: "1/3" }} marginTop="5rem">
        <LoginForm />
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
