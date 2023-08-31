"use client";
import useThemeContext from "@/hooks/useThemeContext";
import { Moon, Sun } from "lucide-react";

const NavMode = () => {
  const { color, setColor, mode, setMode } = useThemeContext();

  const HandleMode = () => {
    if (setMode !== undefined) {
      if (mode === "light") setMode("dark");
      else setMode("light");
    }
  };
  return (
    <div className="mr-8 py-2">
      <button onClick={HandleMode}>
        {mode === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};
export default NavMode;
