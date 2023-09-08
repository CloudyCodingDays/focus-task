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

const NavBarLogin = () => {
  const [open, setOpen] = useState(false);
  const { color } = useThemeContext();

  return (
    <div className="py-2 md:ml-auto">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger id={"LoginIconButton"} aria-label={"Login Icon Button"}>
          <User />
        </PopoverTrigger>
        <PopoverContent
          className={"bg-mainBg text-onMainBg " + `theme-${color}`}
        >
          <Login setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavBarLogin;
