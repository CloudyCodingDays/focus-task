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
import supabase from "@/components/supabaseClient";
const ManageHeader = async () => {
  //const { data, error } = await supabase.auth.getSession(); //await supabase.auth.getUser();
  const { data, error } = await supabase.from("tasks").select();
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <div>
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
      <div>Hello -{data.user?.id}</div>
    </div>
  );
};

export default ManageHeader;
