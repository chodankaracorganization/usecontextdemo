"use client";

import React, { useState } from "react";
import { GolbalContext } from "./contexts";

export default function GlobalProviders({ children }) {
  // Global counter state
  const [count, setCount] = useState(0);

  // Global user state
  const [user, setUser] = useState(null);

  // Functions
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  // Here, we wrap children inside another component
  return (
    <GolbalContext.Provider
      value={{ count, increment, decrement, user, login, logout }}
    >
      {children}
    </GolbalContext.Provider>
  );
}
