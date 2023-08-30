"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Routes from "./Routes";
import { Menu } from "lucide-react";
import { User } from "@supabase/supabase-js";

const NavBarMenu = ({ user }: { user: User | null }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            <Menu />
          </button>
        </DialogTrigger>
        <DialogContent className="h-full grid md:w-1/4 md:left-[12%] pt-4">
          <div className="bg-mainBg">
            <Routes onRoute={setOpen} user={user} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBarMenu;
