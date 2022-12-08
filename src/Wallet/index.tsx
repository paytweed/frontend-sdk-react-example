import { hooks, Widget } from "@paytweed/frontend-sdk-react";
import React from "react";

const WalletData = () => null;

const Wallet = () => {
  const {
    data: walletExists,
    error: walletExistsError,
    loading: walletExistsLoading,
  } = hooks.useWalletExists();
  const onWalletCreated = () => {
    window.location.href = "/";
  };

  if (walletExistsLoading) return <div>Loading</div>;
  if (walletExistsError) return <div>Error: {walletExistsError}</div>;

  return walletExists ? (
    <WalletData />
  ) : (
    <Widget.Wallet.Create onSuccess={onWalletCreated} />
  );
};

export default Wallet;
