import "./index.css";
import { TweedFrontendSdkProvider } from "@paytweed/frontend-sdk-react";
import React from "react";
import ReactDOM from "react-dom/client";

const Application = () => {
  const sendMessageToBackend = React.useCallback(async (message: string) => {
    const response = await fetch("http://localhost:3001/message}", {
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const { answer } = await response.json();
    return answer;
  }, []);

  return (
    <TweedFrontendSdkProvider sendMessageToBackend={sendMessageToBackend}>
      <Application />
    </TweedFrontendSdkProvider>
  );
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
