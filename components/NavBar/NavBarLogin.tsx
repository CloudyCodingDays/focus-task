"use client";
import { useState } from "react";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

import Login from "@/app/login/components/login";
import UserImage from "@/icons/profile-user.png";

const NavBarLogin = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserInfo();
  return (
    <div className="py-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex flex-row self-end">
            <button>
              <Image
                src={UserImage}
                width="30"
                height="30"
                alt="User Menu Icon"
              ></Image>
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="w-[600px]">
          <div>{user?.id}</div>
          <Login />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBarLogin;
