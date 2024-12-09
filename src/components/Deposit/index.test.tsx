import { expect, test } from "vitest";
import { Deposit } from ".";
import { renderWithProviders } from "@/test-utils";

const wallet = {
  id: "asc34",
  user: "user@mail",
  balance: 100,
  transactions: [],
};

test("adds 1 + 2 to equal 3", () => {
  renderWithProviders(<Deposit setShowDeposit={() => false} wallet={wallet} />);
  expect(1 + 2).toBe(3);
});
