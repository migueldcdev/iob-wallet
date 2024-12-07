import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { LuPlus } from "react-icons/lu";

export const Wallet = () => {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(today);

  return (
    <Box background="gray.300" minWidth="1/3" borderRadius="md" paddingX="1">
      <Box background="gray.600" borderBottomRadius="xl" color="gray.200" padding="1">
        <Text>Welcome back,</Text>
        <Text>Miguel!</Text>
        <Text>{formattedDate}</Text>
      </Box>  
      <Text marginTop="8" textStyle="4xl" fontWeight="bold">
        $1,000.63
      </Text>
      <Text textStyle="xs" color="gray.500">
        USD ACCOUNT BALANCE
      </Text>
      <Flex marginTop="6" gap="3">
        <IconButton
          background="white"
          color="gray.500"
          borderRadius="full"
          paddingX="2"          
        >
          <LuPlus />  
          <Text>Add</Text>
        </IconButton>
        <IconButton
          background="white"
          color="gray.500"
          borderRadius="full"
          paddingX="2"
        >
          <MdArrowOutward />
          Send
        </IconButton>
      </Flex>
    </Box>
  );
};
