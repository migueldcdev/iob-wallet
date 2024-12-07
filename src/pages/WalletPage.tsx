import { Flex } from "@chakra-ui/react";

import { LogoutButton } from "@/components/LogoutButton";

export const WalletPage = () => {
  return (
    <>
      <Flex justify="flex-end" padding={2}>       
        <LogoutButton/>
      </Flex>
    </>
  );
};
