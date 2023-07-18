"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import format from "date-fns/format";
import localFont from "next/font/local";
import Image from "next/image";
import MenuImage from "@/icons/menu.png";
import UserImage from "@/icons/profile-user.png";
import Link from "next/link";

const calmFont = localFont({
  src: "./fonts/Pacifico.ttf",
});
const WelcomeDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setCurrentDate(new Date());
      return () => clearInterval(timeTicker);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="text-green-500 pt-4 pb-4 flex flex-row justify-between px-4">
        <div
          style={calmFont.style}
          className="text-1xl flex flex-row items-center"
        >
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
          <div className="px-4">Take it Easy</div>
        </div>

        <div className="flex flex-row self-end">
          <button>
            <Image
              src={UserImage}
              width="25"
              height="25"
              alt="User Menu Icon"
            ></Image>
          </button>
        </div>
      </div>
      <div className="px-4">Hello Guest!</div>
      <div className="w-full flex flex-col items-center ">
        <div className="w-[30em] bg-gray-200 rounded-lg mt-4 mx-4 text-center">
          <div className="">
            <div style={calmFont.style} className="text-5xl">
              {format(currentDate, "h")}:{format(currentDate, "mm")}:
              {format(currentDate, "ss")} {format(currentDate, "aaa")}
            </div>
          </div>
          <div className="my-8 mx-24">
            <Separator className="bg-green-300  pt-0.5" />
          </div>
          <div className="text-md pb-4 font-extralight">
            <div>
              Today is{" "}
              <span className="font-bold">{format(currentDate, "EEEE")}</span>
            </div>
            <div className="">{format(currentDate, "PPP")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDisplay;
