import { hooks } from "@paytweed/frontend-sdk-react";
import { Button, Menu, MenuItemsLine } from "../../../style";

interface WalletActionsSectionProps {
  selectedChain: string;
}

export default function WalletActionsSection({
  selectedChain,
}: WalletActionsSectionProps) {
  const [sendCoinToWallet] = hooks.useSendCoinToWallet();
  const [createRecoveryKit] = hooks.useCreateRecovery();
  const [buyNft] = hooks.useBuyNft();
  const tweedClient = hooks.useTweedFrontendSDK();

  async function handlSendTransaction() {
    const address = await tweedClient.wallet.getAddress({
      blockchainId: selectedChain,
    });
    sendCoinToWallet({
      walletAddress: address,
      value: "1",
      blockchainId: selectedChain,
    });
  }

  function handelCreateRecoveryKit() {
    createRecoveryKit({
      callbacks: { onSuccess: () => console.log("logged out") },
    });
  }

  function handleBuyNft() {
    buyNft({ nftId: "1" });
  }

  return (
    <>
      <Button onClick={handlSendTransaction}>Send Transaction</Button>
      <Button onClick={handelCreateRecoveryKit}>Create a Recovery Kit</Button>
      <Button onClick={handleBuyNft}>Buy Nft</Button>
    </>
  );
}
