import { Box, Flex, Text, Separator } from "@chakra-ui/react";
import { Transaction } from "@/features/wallet/walletSlice";

export const TransactionItem = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  const { from, memo, amount } = transaction;
  const isWithdraw = memo === "Withdraw";
  const color = isWithdraw ? "red.500" : "gray.600";
  const trimFrom = from.split("-")[0];

  return (
    <Box>
      <Flex padding="2" justifyContent="space-between">
        <Box>
          <Text>{trimFrom}</Text>
          <Text textStyle="xs">{memo}</Text>
        </Box>
        <Text textStyle="md" marginTop={2} color={color} fontWeight="bold">
          {isWithdraw && "-"}
          {amount} $
        </Text>
      </Flex>
      <Separator />
    </Box>
  );
};
