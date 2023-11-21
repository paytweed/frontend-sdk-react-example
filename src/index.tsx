import { TweedFrontendSdkProvider } from "@paytweed/frontend-sdk-react";
import React from "react";
import ReactDOM from "react-dom/client";
import Wallet from "./WalletPage";
import SettingSection from "./components/Settings";

const Application = () => {
  const sendMessageToBackend = React.useCallback(async (message: string) => {
    const response = await fetch("http://localhost:3010/message", {
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const { answer } = await response.json();
    return answer;
  }, []);

  return (
    <TweedFrontendSdkProvider defaultBlockchainIds={["tezosGhost"]} sendMessageToBackend={sendMessageToBackend}>
      <SettingSection />
      <Wallet />
    </TweedFrontendSdkProvider>
  );
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
