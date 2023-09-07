// import Logo from "@/public/tweed-logo";
import { hooks } from "@paytweed/frontend-sdk-react";
import { useEffect, useState } from "react";
import {
  ChainButton,
  LogoutButton,
  Menu,
  MenuItemsLine,
  Title,
  Wrapper,
} from "../../style";
import TransactionsList from "../TransactionsList";
import WalletAddress from "./address";
import WalletActionsSection from "./actions";
import WalletTransactionsSection from "./transactions";

const WalletData = () => {
  const [selectedChain, setSelectedChain] = useState<string>();
  const {
    data: blockchainList,
    loading: blockchainListLoading,
    error: blockchainListError,
  } = hooks.useBlockchainList();
  const [logoutWallet] = hooks.useWalletLogout();

  const chainIds = blockchainList;

  useEffect(() => {
    if (!blockchainList) return;
    setSelectedChain(blockchainList[0]);
  }, [blockchainList]);

  useEffect(() => {
    const sendSelectedChainToBackend = async () => {
      await fetch("http://localhost:3010/blockchain-id", {
        body: JSON.stringify({ blockchainId: selectedChain }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
    };

    sendSelectedChainToBackend();
  }, [selectedChain]);

  function handleLogout() {
    logoutWallet({});
  }

  if (!selectedChain || !chainIds) return null;

  return (
    <Wrapper>
      <Title>Welcome to Tweed Example</Title>
      <WalletAddress chainIds={chainIds} selectedChain={selectedChain} />
      <MenuItemsLine>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {chainIds &&
            chainIds.map((chain, idx) => (
              <ChainButton
                primary={chain === selectedChain}
                key={idx}
                onClick={() => setSelectedChain(chain)}
              >
                {chain}
              </ChainButton>
            ))}
        </div>
      </MenuItemsLine>
      <Menu>
        <MenuItemsLine>
          <WalletActionsSection selectedChain={selectedChain} />
        </MenuItemsLine>
      </Menu>
      <WalletTransactionsSection selectedChain={selectedChain} />
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </div>
    </Wrapper>
  );
};
export default WalletData;
