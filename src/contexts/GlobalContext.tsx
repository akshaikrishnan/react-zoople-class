import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null as any);

export default function GlobalProvider({ children }: any) {
  const [globalValue, setGlobalValue] = useState([
    { name: "", isCompleted: false },
  ]);

  function addTask(task: { name: string; isCompleted: boolean }) {
    setGlobalValue([...globalValue, task]);
  }

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue, addTask }}>
      {children}
    </GlobalContext.Provider>
  );
}
