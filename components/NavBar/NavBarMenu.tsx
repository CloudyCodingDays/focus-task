"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui_components/dialog";
import Routes from "./Routes";
import { Menu } from "lucide-react";
import { User } from "@supabase/supabase-js";
import useThemeContext from "@/hooks/useThemeContext";

const NavBarMenu = ({ user }: { user: User | null }) => {
  const [open, setOpen] = useState(false);
  const { color } = useThemeContext();

  return (
    <div className="md:hidden">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            <Menu />
          </button>
        </DialogTrigger>
        <DialogContent
          className={
            "bg-mainBg h-full grid md:w-1/4 md:left-[12%] pt-4 text-onMainBg " +
            `theme-${color}`
          }
        >
          <Routes onRoute={setOpen} user={user} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBarMenu;
