import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { LuPlus } from "react-icons/lu";

export const Wallet = () => {
  return (
    <Box
      background="gray.300"
      width="5/6"
      sm={{ width: "4/6" }}
      md={{ width: "3/6" }}
      lg={{ width: "2/6" }}
      borderRadius="md"
      paddingX="1"
      marginTop="5"
    >
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
          <Text marginLeft="-2">Add</Text>
        </IconButton>
        <IconButton
          background="white"
          color="gray.500"
          borderRadius="full"
          paddingX="2"
        >
          <MdArrowOutward />
          <Text marginLeft="-2">Send</Text>
        </IconButton>
      </Flex>
    </Box>
  );
};
