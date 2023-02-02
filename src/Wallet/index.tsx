import { hooks, Widget } from "@paytweed/frontend-sdk-react";
import { useCallback } from "react";
import WalletData from "../components/WalletData";
import S from "./style";

const Wallet = () => {
  const { data: walletExists, error, loading } = hooks.useWalletExists();

  const onWalletCreated = useCallback(() => {
    window.location.href = "/";
  }, []);

  const renderContent = () => {
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error: {error}</div>;
    return walletExists ? (
      <WalletData />
    ) : (
      <Widget.Wallet.Create callbacks={{onSuccess: onWalletCreated}} />
    );
  };

  return (
    <S.Container>
{renderContent()}
    </S.Container>
  );
};

export default Wallet;
