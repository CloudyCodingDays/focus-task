import { ThemeContext } from "@/providers/ThemeContextProvider";
import { useContext } from "react";

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error("ThemeContext must be inside a ThemeContext");
  }
  return themeContext;
};

export default useThemeContext;
