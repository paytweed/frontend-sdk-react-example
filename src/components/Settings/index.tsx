import { createRef, useEffect, useRef, useState } from "react";

type AuthUser = {
  id: string;
  email: string;
};

export default function SettingSection() {
  const [user, setUser] = useState<AuthUser>();
  const idInputRef = createRef<HTMLInputElement>();
  const emailInputRef = createRef<HTMLInputElement>();

  async function fetchAuthUser() {
    const resposne = await fetch("http://localhost:3010/user");
    const user = await resposne.json();
    setUser(user);
  }

  async function handleLogin() {
    try {
      await fetch("http://localhost:3010/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idInputRef.current?.value,
          email: emailInputRef.current?.value,
        }),
      });
      location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: "#f0f0f0",
        padding: 10,
        alignItems: "center",
      }}
    >
      <div>
        <h5 style={{ margin: 0 }}>Only For Testing purpose</h5>
        <p style={{ margin: 0 }}>
          enter different email & user id to create new wallets
        </p>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          placeholder="email"
          defaultValue={user?.email}
          ref={emailInputRef}
        />
        <input placeholder="user id" defaultValue={user?.id} ref={idInputRef} />
        <button onClick={handleLogin}>login</button>
      </div>
    </div>
  );
}
