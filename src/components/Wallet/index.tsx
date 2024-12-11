import { useState } from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { LuPlus } from "react-icons/lu";

import { useAppSelector } from "@/app/hooks";

import { Transactions } from "../Transactions";
import { Deposit } from "../Deposit";
import { Transfer } from "../Transfer";
import { numberToIntl } from "@/utils";

export const Wallet = () => {
  const user = useAppSelector((state) => state.auth.currentUser);
  const wallets = useAppSelector((state) => state.wallet.wallets);
  const wallet = wallets.find((wallet) => user?.email == wallet.user);

  const [showDeposit, setShowDeposit] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  return (
    <>
      {wallet && (
        <Box
          background="blue.100"
          width="full"
          minHeight="80vh"
          maxHeight="80vh"
          sm={{ width: "4/6" }}
          md={{ width: "3/6" }}
          lg={{ width: "2/6" }}
          borderRadius="md"
          marginTop="2"
          padding="2"
        >
          <Text marginTop="8" textStyle="4xl" fontWeight="bold" paddingX="1">
            ${numberToIntl(wallet.balance)}
          </Text>
          <Text textStyle="xs" color="gray.600" paddingX="1">
            USD ACCOUNT BALANCE
          </Text>
          <Flex marginTop="6" gap="3" paddingX="1">
            <IconButton
              onClick={() => setShowDeposit((prev) => !prev)}
              background="white"
              color="black"
              borderRadius="full"
              paddingX="2"
            >
              <LuPlus />
              <Text marginLeft="-2">Add</Text>
            </IconButton>
            <IconButton
              onClick={() => setShowTransfer((prev) => !prev)}
              background="white"
              color="black"
              borderRadius="full"
              paddingX="2"
            >
              <MdArrowOutward />
              <Text marginLeft="-2">Send</Text>
            </IconButton>
          </Flex>
          <Box position="relative">
            <Transactions transactions={wallet.transactions} />
            {showDeposit && (
              <Deposit setShowDeposit={setShowDeposit} wallet={wallet} />
            )}
            {showTransfer && (
              <Transfer setShowTransfer={setShowTransfer} wallet={wallet} />
            )}
          </Box>
        </Box>
      )}
    </>
  );
};
