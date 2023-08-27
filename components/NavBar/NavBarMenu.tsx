"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Routes from "./Routes";
import { Menu } from "lucide-react";

const NavBarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <Menu />
        </button>
      </DialogTrigger>
      <DialogContent className="h-full grid md:w-1/4 md:left-[13%] pt-4">
        <Routes onRoute={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default NavBarMenu;
