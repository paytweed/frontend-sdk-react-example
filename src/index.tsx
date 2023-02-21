import "./index.css";
import { TweedFrontendSdkProvider } from "@paytweed/frontend-sdk-react";
import { Environment } from "@paytweed/shared-sdk";
import React from "react";
import ReactDOM from "react-dom/client";
import Wallet from "./Wallet";

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
    <TweedFrontendSdkProvider environment={Environment.demo} sendMessageToBackend={sendMessageToBackend} defaultBlockchainIds={[ "ethereumGoerli", "tezosGhost"]} >
      <Wallet />
    </TweedFrontendSdkProvider>
  );
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
