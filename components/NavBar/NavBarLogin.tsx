"use client";
import Login from "@/app/login/components/login";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui_components/popover";
import useThemeContext from "@/hooks/useThemeContext";
import { User } from "lucide-react";
import { useState } from "react";
import { GetThemeStyle } from "../GetThemeStyle";

const NavBarLogin = () => {
  const [open, setOpen] = useState(false);
  const { color, mode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <div className="py-2 md:ml-auto">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <User />
        </PopoverTrigger>
        <PopoverContent className={"bg-mainBg text-onMainBg " + themeStyle}>
          <Login setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavBarLogin;
