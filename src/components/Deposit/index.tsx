import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { CloseButton } from "../ui/close-button";
import { Slider } from "../ui/slider";
import { deposit, Wallet } from "@/features/wallet/walletSlice";
import { useAppDispatch } from "@/app/hooks";

type DepositProps = {
  setShowDeposit: Dispatch<SetStateAction<boolean>>;
  wallet: Wallet;
};

export const Deposit: React.FC<DepositProps> = ({ setShowDeposit, wallet }) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();

  function handleDeposit() {
    dispatch(deposit({ id: wallet.id, amount: amount }));
  }

  return (
    <Box
      data-state="open"
      background="blue.50"
      position="absolute"
      top="-3"
      left="0"
      width="full"
      minHeight="60vh"
      borderRadius="lg"
      _open={{ animation: "slide-fade-in 500ms ease-out" }}
    >
      <Flex justifyContent="space-between">
        <Text padding="2" textStyle="xl" fontWeight="semibold" color="gray.600">
          Enter amount to deposit
        </Text>
        <CloseButton onClick={() => setShowDeposit(false)} />
      </Flex>
      <Text textAlign="center" textStyle="3xl" marginTop="30px">
        ${amount}
      </Text>
      <Flex justifyContent="center">
        <Slider
          min={0}
          max={wallet.balance}
          width="2/3"
          padding="4"
          step={0.1}
          value={[amount]}
          onChange={(event) => setAmount(event.target.value)}
        />
      </Flex>
      <Flex justifyContent="center" padding="4">
        <Button onClick={handleDeposit} disabled={amount > 0 ? false : true}>
          Deposit
        </Button>
      </Flex>
    </Box>
  );
};
