"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Routes from "@/components/Routes";
import MenuImage from "@/icons/menu.png";
import { useState } from "react";
const NavBarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Image
            src={MenuImage}
            width="30"
            height="30"
            alt="Hamburger Menu Icon"
          ></Image>
        </DialogTrigger>
        <DialogContent className="py-16 h-full flex flex-col">
          <Routes onRoute={setOpen} />
        </DialogContent>
      </Dialog>
    </button>
  );
};

export default NavBarMenu;
