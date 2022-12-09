import { hooks, Widget } from "@paytweed/frontend-sdk-react";
import { useCallback } from "react";
import S from "./style";

const WalletData = () => {
  const { data: cryptoBalance, error, loading } = hooks.useCryptoBalance();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <S.WalletContainer>
      <div>Balance</div>
      <div>ETH: {cryptoBalance?.ETH}</div>
    </S.WalletContainer>
  );
};

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
      <Widget.Wallet.Create onSuccess={onWalletCreated} />
    );
  };

  return (
    <S.Container>
      <S.Card>{renderContent()}</S.Card>
    </S.Container>
  );
};

export default Wallet;
