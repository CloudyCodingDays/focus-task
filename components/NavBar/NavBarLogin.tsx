"use client";
import Login from "@/app/login/components/login";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUserInfo } from "@/hooks/useUserInfo";
import { User } from "lucide-react";
import { useState } from "react";

const NavBarLogin = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserInfo();
  return (
    <div className="py-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex flex-row items-baseline">
            <button>
              <User />
            </button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div>
            <Login setOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBarLogin;
