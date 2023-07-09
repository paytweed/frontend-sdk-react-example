// import Logo from "@/public/tweed-logo";
import { hooks } from "@paytweed/frontend-sdk-react";
import { useState } from "react";
import {
  Button,
  ChainButton,
  Header,
  LogoutButton,
  Menu,
  MenuItemsLine,
  Powered,
  QrButton,
  Title,
  WalletAddress,
  Wrapper
} from "../../style";
import TransactionsList from "../TransactionsList";
const chains = ["tezosGhost", "polygonMumbai", "ethereumGoerli"];

const MyTransactions = () => {
  const {
    data: transactions,
    error: transactionsError,
    loading: transactionsLoading,
  } = hooks.useTokenTransactions({
    blockchainIds: chains,
  });
  if (transactionsLoading) return <div>Loading</div>;
  if (transactionsError) return <div>Error: {transactionsError}</div>;
  return !transactions ? null : <TransactionsList data={transactions} />;
};

const WalletData = () => {
  const sdk = hooks.useTweedFrontendSDK();
  const onLogout = async () => {
    await sdk.wallet.logout();
  };
  const [logutBtnIsClicked, setLogutBtnIsClicked] = useState(false);
  const [displayTransactions, setdisplayTransactions] = useState(false);
  const [currentChain, setCurrentChain] = useState(chains[0]);

  const handleMYTransactionsButton = () =>
    setdisplayTransactions((prev) => !prev);

  const handleLogoutButton = () => {
    onLogout();
    setLogutBtnIsClicked(true);
    setTimeout(() => {
      setLogutBtnIsClicked(false);
    }, 3000);
  };

  const onSendTransaction = async () => {
    const destinationAddress = await sdk.wallet.getAddress({
      blockchainId: "polygonMumbai",
    });

    await sdk.coin.sendToWallet({
      blockchainId: "polygonMumbai",
      walletAddress: destinationAddress,
      value: "1",
    });
  };

  const onCreateRecovery = async () => {
    await sdk.wallet.createRecovery();
  };

  const onCreateQR = async () => {
    await sdk.wallet.showAddress({ blockchainId: "ethereumGoerli" });
  };

  const onCreateNftTransaction = async () => {
    await sdk.nft.buyWithFiat({
      nftId: '1',
    })

  }

  const Address = () => {
    const {
      data: address,
      error: errorAddress,
      loading: loadingAdderess,
    } = hooks.useWalletAddress({ blockchainId: currentChain });
    if (loadingAdderess) return <div>Loading</div>;
    if (errorAddress) return <div>Error: {errorAddress}</div>;
    return <span>{address}</span>;
  };

  return (
    <Wrapper>
      <Header>{/* <Logo /> */}</Header>
      <Title>Welcome to Tweed Example</Title>

      <WalletAddress>
        <Address />
        <QrButton onClick={onCreateQR}>QR</QrButton>
      </WalletAddress>

      <MenuItemsLine>
        {chains.map((chain, idx) => (
          <ChainButton
            primary={chain === currentChain}
            key={idx}
            onClick={() => setCurrentChain(chain)}
          >
            {chain}
          </ChainButton>
        ))}
      </MenuItemsLine>

      <Menu>
        <MenuItemsLine>
          <Button onClick={onSendTransaction}>Send Transaction</Button>
          <Button onClick={onCreateRecovery}>Create a Recovery Kit</Button>
          <Button onClick={onCreateNftTransaction} >Buy Nft</Button>
          <Button onClick={handleMYTransactionsButton}>
            {displayTransactions ? "close" : "My transactions"}
          </Button>
        </MenuItemsLine>
        <MenuItemsLine>
          <LogoutButton onClick={handleLogoutButton}>
            {logutBtnIsClicked ? "👋👋👋" : "Logout"}
          </LogoutButton>
        </MenuItemsLine>
      </Menu>
      {displayTransactions && <MyTransactions />}
      <Powered>Powered by Tweed</Powered>
    </Wrapper>
  );
};

export default WalletData;
