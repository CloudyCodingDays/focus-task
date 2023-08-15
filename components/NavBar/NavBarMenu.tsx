"use client";
import Routes from "@/components/Routes";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavBarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Menu />
        </DialogTrigger>
        <DialogContent className="h-full grid lg:left-[13%] lg:w-[600px] pt-4">
          <Routes onRoute={setOpen} />
        </DialogContent>
      </Dialog>
    </button>
  );
};

export default NavBarMenu;
