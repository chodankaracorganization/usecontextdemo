"use client";

import { useContext } from "react";
import { GolbalContext } from "./contexts";

export default function Home() {
  // Props injected from providers.js
  const { count, increment, decrement, user, login, logout } =
    useContext(GolbalContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Global Counter (Props Version)</h1>
      <p>Value: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement} style={{ marginLeft: 10 }}>
        Decrease
      </button>

      <hr />

      <h1>User Section</h1>
      {user ? (
        <>
          <p>Logged in as: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Ashish")}>Login</button>
      )}
    </div>
  );
}
