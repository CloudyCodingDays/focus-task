"use client";
import Login from "@/app/login/components/login";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserInfo } from "@/hooks/useUserInfo";
import { User } from "lucide-react";
import { useState } from "react";

const NavBarLogin = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserInfo();
  return (
    <div className="py-2 md:ml-auto">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <User />
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <Login setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavBarLogin;
