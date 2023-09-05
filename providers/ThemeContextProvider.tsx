"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ThemeContextType {
  color?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  mode?: string;
  setMode?: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

const colors = ["red", "green", "blue"];
const modes = ["light", "dark"];

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [color, setColor] = useState(colors[1]);
  const [mode, setMode] = useState(modes[0]);

  return (
    <ThemeContext.Provider value={{ color, setColor, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
