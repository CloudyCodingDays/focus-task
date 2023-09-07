"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui_components/popover";
import { Palette } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useState } from "react";
import useThemeContext from "@/hooks/useThemeContext";

const NavTheme = () => {
  const [open, setOpen] = useState(false);
  const { color } = useThemeContext();

  return (
    <div className="py-2 mr-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Palette />
        </PopoverTrigger>
        <PopoverContent
          className={"bg-mainBg w-full text-onMainBg " + `theme-${color}`}
        >
          <ThemeSelector />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default NavTheme;
