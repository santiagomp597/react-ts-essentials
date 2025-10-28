import { createContext } from "react";

export interface AppContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
