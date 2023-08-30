"use client";
import Login from "@/app/login/components/login";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useThemeContext from "@/hooks/useThemeContext";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Palette, User } from "lucide-react";
import { useState } from "react";

const NavBarLogin = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserInfo();
  const { theme, setTheme } = useThemeContext();
  return (
    <div className="py-2 md:ml-auto">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <User />
        </PopoverTrigger>
        <PopoverContent className={theme && `theme-${theme}`}>
          <Login setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavBarLogin;
