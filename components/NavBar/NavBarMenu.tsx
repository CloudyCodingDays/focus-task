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
            width="25"
            height="25"
            alt="Hamburger Menu Icon"
          ></Image>
        </DialogTrigger>
        <DialogContent className="h-full flex flex-col">
          <button
            className="border-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Routes />
          </button>
        </DialogContent>
      </Dialog>
    </button>
  );
};

export default NavBarMenu;
