import { Box, Text } from "@chakra-ui/react";
import { Transaction } from "@/features/wallet/walletSlice";

export const Transactions = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <Box background="white" marginTop="5">
      <Text textStyle="xl" fontWeight="semibold" color="gray.600">
        Transactions
      </Text>
      {transactions.length == 0 && (
        <Text textAlign="center" marginTop="3">
          You have not made any transaction yet.
        </Text>
      )}
    </Box>
  );
};
