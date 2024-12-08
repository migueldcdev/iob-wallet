import { NavLink } from "react-router-dom";
import { Center, Container, Text, Box } from "@chakra-ui/react";
import { RegisterForm } from "@/components/RegisterForm";

export const RegistrationPage = () => {
  return (
    <Center>
      <Container sm={{ width: "1/2" }} lg={{ width: "1/3" }} marginTop="5rem">
        <RegisterForm />
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
