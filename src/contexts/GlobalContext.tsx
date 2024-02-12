import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null as any);

export default function GlobalProvider({ children }: any) {
  const [globalValue, setGlobalValue] = useState(0);
  const [globalValue2, setGlobal2Value] = useState(0);

  const addToCart = () => alert("added");

  return (
    <GlobalContext.Provider
      value={{ globalValue, setGlobalValue, globalValue2, addToCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
