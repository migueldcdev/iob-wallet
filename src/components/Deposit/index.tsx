import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, Flex, Text, Center } from "@chakra-ui/react";

import { CloseButton } from "../ui/close-button";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";

import { deposit, Wallet } from "@/features/wallet/walletSlice";
import { useAppDispatch } from "@/app/hooks";
import { toaster } from "../ui/toaster";

type DepositProps = {
  setShowDeposit: Dispatch<SetStateAction<boolean>>;
  wallet: Wallet;
};

export const Deposit: React.FC<DepositProps> = ({ setShowDeposit, wallet }) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();

  function handleDeposit() {
    dispatch(deposit({ id: wallet.id, amount: amount }));
    setShowDeposit(false);
    toaster.create({
      title: `Successfully deposited $${amount}`,
      type: "success",
    });
  }

  return (
    <Box
      data-state="open"
      background="blue.50"
      position="absolute"
      top="0"
      left="0"
      width="full"
      minHeight="50vh"
      borderRadius="lg"
      _open={{ animation: "slide-fade-in 500ms ease-out" }}
    >
      <Flex justifyContent="end">
        <CloseButton onClick={() => setShowDeposit(false)} />
      </Flex>
      <Center>
        <Text padding="2" textStyle="xl" fontWeight="semibold" color="gray.600">
          Enter amount to deposit
        </Text>
      </Center>
      <Flex justifyContent="center" marginTop="5">
        <NumberInputRoot
          onValueChange={(value) => setAmount(value.valueAsNumber)}
          step={0.1}
          size="lg"
          width="1/3"
          formatOptions={{
            style: "currency",
            currency: "USD",
          }}
        >
          <NumberInputField fontSize="xl" />
        </NumberInputRoot>
      </Flex>
      <Center marginTop="5">
        <Button onClick={handleDeposit} disabled={amount < 0.1}>
          Deposit
        </Button>
      </Center>
    </Box>
  );
};
