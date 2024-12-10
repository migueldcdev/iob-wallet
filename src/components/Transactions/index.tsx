import { Box, Text } from "@chakra-ui/react";
import { Transaction } from "@/features/wallet/walletSlice";
import { TransactionItem } from "../TransactionItem";

export const Transactions = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const orderByMostRecent = [...transactions].reverse();

  return (
    <Box
      background="white"
      marginTop="5"
      marginBottom="5"
      height="50vh"
      overflow="scroll"
      overflowX="hidden"
      borderRadius="xl"
      borderBottomWidth="1px"
    >
      <Text textStyle="xl" fontWeight="semibold" padding="2">
        Transactions
      </Text>
      {transactions.length == 0 && (
        <Text textAlign="center" marginTop="3">
          You have not made any transaction yet.
        </Text>
      )}

      {transactions.length > 0 &&
        orderByMostRecent.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </Box>
  );
};
