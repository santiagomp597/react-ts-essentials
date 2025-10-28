import { ReactNode, useState } from "react";
import { AppContext, AppContextType } from "./AppContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const value: AppContextType = {
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>;
};
