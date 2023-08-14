"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Routes from "@/components/Routes";
import MenuImage from "@/icons/menu.png";
import { useState } from "react";
import { Menu } from "lucide-react";
const NavBarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Menu />
        </DialogTrigger>
        <DialogContent className="h-full w-[600px] grid left-[13%] pt-4">
          <Routes onRoute={setOpen} />
        </DialogContent>
      </Dialog>
    </button>
  );
};

export default NavBarMenu;
