import { useUserInfo } from "@/hooks/useUserInfo";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Login from "@/app/login/components/login";
import { useState } from "react";

const NoActiveTaskDisplay = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const { user } = useUserInfo();
  //TODO: grab whether task was completed today and detemine what to show
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center py-4">
          <div className="w-[30em] bg-gray-200 rounded-lg pb-8 text-center drop-shadow-lg text-gray-500">
            <div className="my-8 text-2xl">
              What would you like to do today?
            </div>
            <Link
              href="/assign"
              className="
          hover:bg-green-500
          hover:text-green-200 
          my-4
          mt-12
          mr-8
          rounded-lg
          py-4
          px-4
        bg-green-100 
        font-semibold
        text-green-500
        self-center"
            >
              Find Task
            </Link>
          </div>
          <div className="drop-shadow-lg  mt-4">
            <Image
              src="/sarah-dorweiler-unsplash-compressed.png"
              width="480"
              height="351"
              priority
              alt="What would you like to do today?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoActiveTaskDisplay;
