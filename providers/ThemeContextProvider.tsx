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

const themes = ["green", "red", "blue"];

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [color, setColor] = useState(themes[0]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
