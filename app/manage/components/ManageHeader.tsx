"use client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/types/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import MenuImage from "@/icons/menu.png";
import Link from "next/link";
import supabase from "@/lib/supabaseClient";
import Login from "@/app/login/components/login";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUserInfo } from "@/hooks/useUserInfo";

const ManageHeader = () => {
  const { user } = useUserInfo();
  //const { data, error } = await supabase.from("tasks").select();
  return (
    <div>
      {user?.id}
      <div>
        <Login />
      </div>
      <button>
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={MenuImage}
              width="25"
              height="25"
              alt="Hamburger Menu Icon"
            ></Image>
          </DialogTrigger>
          <DialogContent className="h-full flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/manage">Manage</Link>
          </DialogContent>
        </Dialog>
      </button>
    </div>
  );
};

export default ManageHeader;
