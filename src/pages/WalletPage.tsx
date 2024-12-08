import { Flex, Center } from "@chakra-ui/react";

import { LogoutButton } from "@/components/LogoutButton";
import { Wallet } from "@/components/Wallet";
import { Toaster } from "@/components/ui/toaster";

export const WalletPage = () => {
  return (
    <>
      <Flex justify="flex-end" padding={2}>
        <LogoutButton />
      </Flex>
      <Center>
        <Wallet />
      </Center>
      <Toaster />
    </>
  );
};
