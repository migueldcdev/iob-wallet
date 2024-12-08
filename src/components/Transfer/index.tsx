import { transfer, Wallet } from "@/features/wallet/walletSlice";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CloseButton } from "../ui/close-button";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Slider } from "../ui/slider";
import { toaster } from "../ui/toaster";

type TransferProps = {
  setShowTransfer: Dispatch<SetStateAction<boolean>>;
  wallet: Wallet;
};

export const Transfer: React.FC<TransferProps> = ({
  setShowTransfer,
  wallet,
}) => {
  const wallets = useAppSelector((state) => state.wallet.wallets);

  const [walletId, setWalletId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useAppDispatch();

  function handleTransfer() {
    if (walletId === wallet.id) {
      toaster.create({
        title: "Forbidden: you can not transfer founds to the same wallet",
        type: "error",
      });

      return;
    }
    if (walletId && amount > 0)
      dispatch(transfer({ from: wallet.id, to: walletId, amount: amount }));
    setShowTransfer(false);
    toaster.create({
      title: `Succesfuly transfered $${amount}`,
      type: "success",
    });
  }

  return (
    <Box
      data-state="open"
      background="blue.50"
      position="absolute"
      top="-3"
      left="0"
      width="full"
      minHeight="56.5vh"
      borderTopRadius="lg"
      _open={{ animation: "slide-fade-in 500ms ease-out" }}
    >
      <Flex justifyContent="space-between">
        <Text padding="2" textStyle="xl" fontWeight="semibold" color="gray.600">
          Choose wallet to transfer
        </Text>
        <CloseButton onClick={() => setShowTransfer(false)} />
      </Flex>
      <Flex padding="6" flexDirection="column" justifyContent="center">
        <NativeSelectRoot>
          <NativeSelectField
            placeholder="Select wallet"
            onChange={(e) => setWalletId(e.target.value)}
          >
            {wallets.map((wallet) => (
              <option value={wallet.id} key={wallet.id}>
                {wallet.user}
              </option>
            ))}
          </NativeSelectField>
        </NativeSelectRoot>
        <Text textAlign="center" textStyle="3xl" marginTop="30px">
          ${amount}
        </Text>
        <Slider
          min={0}
          max={wallet.balance}
          width="full"
          padding="4"
          step={0.1}
          value={[amount]}
          onValueChange={(value) => setAmount(value.value[0])}
        />
      </Flex>
      <Flex justifyContent="center">
        <Button
          onClick={handleTransfer}
          width="1/3"
          disabled={amount == 0 || !walletId}
        >
          Transfer
        </Button>
      </Flex>
    </Box>
  );
};
