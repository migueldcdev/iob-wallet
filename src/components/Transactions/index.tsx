import { Box, Text, Flex, Separator } from "@chakra-ui/react";
import { Transaction } from "@/features/wallet/walletSlice";

export const Transactions = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <Box
      background="white"
      marginTop="5"
      height="55vh"
      overflow="scroll"
      overflowX="hidden"
    >
      <Text textStyle="xl" fontWeight="semibold" color="gray.600" padding="2">
        Transactions
      </Text>
      {transactions.length == 0 && (
        <Text textAlign="center" marginTop="3">
          You have not made any transaction yet.
        </Text>
      )}

      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <>
            <Flex padding="2" justifyContent="space-between">
              <Box>
                <Text>{transaction.from}</Text>
                <Text textStyle="xs">{transaction.memo}</Text>
              </Box>
              <Text textStyle="xl" marginTop={2} color="green.500">
                {transaction.amount}
              </Text>
            </Flex>
            <Separator />
          </>
        ))}
    </Box>
  );
};