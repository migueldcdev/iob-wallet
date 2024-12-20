import { transfer, Wallet } from "@/features/wallet/walletSlice";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CloseButton } from "iobutton"
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Slider } from "../ui/slider";
import { toaster } from "../ui/toaster";
import { numberToIntl } from "@/utils";

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
  const [amount, setAmount] = useState(0);
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
      title: `Succesfuly transfered $${numberToIntl(amount)}`,
      type: "success",
    });
  }

  return (
    <Box
      data-state="open"
      background="white"
      position="absolute"
      top="0"
      left="0"
      width="full"
      minHeight="50vh"
      borderRadius="lg"
      _open={{ animation: "slide-fade-in 500ms ease-out" }}
    >
      <Flex justifyContent="end">       
        <CloseButton onClick={() => setShowTransfer(false)} />
      </Flex>
      <Text textAlign="center" textStyle="xl" fontWeight="semibold">
          Choose wallet to transfer
        </Text>
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
          ${numberToIntl(amount)}
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
