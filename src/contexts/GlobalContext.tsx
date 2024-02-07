import { useContext } from "react";

export const GlobalContext = useContext<any>(null as any);

export default function GlobalProvider({ children }: any) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
