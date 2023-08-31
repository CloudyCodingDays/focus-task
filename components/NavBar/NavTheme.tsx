"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Palette } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useState } from "react";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "../GetThemeStyle";

const NavTheme = () => {
  const [open, setOpen] = useState(false);
  const { color, setColor, mode, setMode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <div className="py-2 mr-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Palette />
        </PopoverTrigger>
        <PopoverContent className={"bg-mainBg w-full " + themeStyle}>
          <ThemeSelector />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default NavTheme;
