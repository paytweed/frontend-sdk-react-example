import { hooks, Widget } from "@paytweed/frontend-sdk-react";
import { useCallback } from "react";
import S from "./style";

const WalletData = () => {
  const { data: address, error: errorAddress, loading: loadingAdderess } = hooks.useWalletAddress({blockchainId: 'ethereum'});
  const { data: coinBalance, error: errorBalance, loading: loadingBalance } = hooks.useCoinBalance();

  if (loadingAdderess || loadingBalance) return <div>Loading</div>;
  if (errorAddress || errorBalance) return <div>Error</div>;

  return (
    <S.WalletContainer>
      <div>Address: {address}</div>
      <div>Balance ETH: {coinBalance?.ethereum}</div>
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
      <Widget.Wallet.Create callbacks={{onSuccess: onWalletCreated}} />
    );
  };

  return (
    <S.Container>
      <S.Card>{renderContent()}</S.Card>
    </S.Container>
  );
};

export default Wallet;
