import { hooks, Widget } from "@paytweed/frontend-sdk-react";
import { useCallback, useEffect } from "react";
import WalletData from "../components/Wallet";
import S from "./style";

const Wallet = () => {
  const { data: walletExists, error, loading } = hooks.useWalletExists();
  const [createWallet] = hooks.useCreateWallet();

  const onWalletCreated = useCallback(() => {
    window.location.href = "/";
  }, []);

  useEffect(() => {
    if (walletExists === undefined) return;
    if (!walletExists) {
      createWallet({ callbacks: { onSuccess: onWalletCreated } });
    }
  }, [walletExists]);

  const renderContent = () => {
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error: {error}</div>;
    return walletExists ? (
      <WalletData />
    ) : (
      "setting up a new wallet for you, please wait.."
    );
  };

  return <S.Container>{renderContent()}</S.Container>;
};

export default Wallet;
