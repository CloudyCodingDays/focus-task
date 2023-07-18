import { Button } from "@/components/ui/button";
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
const ManageHeader = () => {
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
    </div>
  );
};

export default ManageHeader;
