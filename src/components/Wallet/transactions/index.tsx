import { hooks } from "@paytweed/frontend-sdk-react";
import TransactionsList from "../../TransactionsList";
import { useEffect } from "react";

interface WalletTransactionsSectionProps {
  selectedChain: string;
}

export default function WalletTransactionsSection({
  selectedChain,
}: WalletTransactionsSectionProps) {
  const {
    data: transactions,
    error: transactionsError,
    loading: transactionsLoading,
  } = hooks.useCryptoTransactions({
    blockchainIds: [selectedChain],
  });

  if (transactionsLoading)
    return <h5 style={{ textAlign: "center" }}>loading transction...</h5>;
  if (transactionsError)
    return <h5 style={{ textAlign: "center" }}>error fetching transction</h5>;
  if (transactions) return <TransactionsList data={transactions as any} />;
}
