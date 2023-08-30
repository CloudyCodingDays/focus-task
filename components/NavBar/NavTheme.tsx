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

const NavTheme = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2 pr-4 md:pr-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Palette />
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <ThemeSelector />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default NavTheme;
