import { hooks } from "@paytweed/frontend-sdk-react";
import { QrButton, WalletAddress } from "../../../style";

interface WalletAddressProps {
  chainIds: string[];
  selectedChain: string;
}

export default function WalletAddressSection({
  chainIds,
  selectedChain,
}: WalletAddressProps) {
  const {
    data: walletAddresses,
    error: walletAddressError,
    loading: walletAddressLoading,
  } = hooks.useWalletAddresses({
    blockchainIds: chainIds,
  });
  const tweedClient = hooks.useTweedFrontendSDK();
  const x = hooks.useBlockchainList()
  console.log(x);

  function handleShowQr() {
    tweedClient.wallet.showAddress({ blockchainId: selectedChain });
  }

  if (walletAddressLoading)
    return <WalletAddress>loading wallet address...</WalletAddress>;
  if (walletAddressError)
    return <WalletAddress>error loading wallet address</WalletAddress>;
  if (walletAddresses)
    return (
      <WalletAddress>
        {walletAddresses[selectedChain]}
        <QrButton onClick={handleShowQr}>show QR</QrButton>
      </WalletAddress>
    );

  return <></>;
}
