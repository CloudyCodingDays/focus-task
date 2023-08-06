"use client";

import format from "date-fns/format";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import MenuImage from "@/icons/menu.png";
import UserImage from "@/icons/profile-user.png";

const calmFont = localFont({
  src: "./fonts/Pacifico.ttf",
});

const WelcomeDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const router = useRouter();

  const HandleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timeTicker);
  }, []);

  return (
    <div>
      <div className="text-sm px-4 font-light">Hi Peter!</div>
      <div className="w-full flex flex-col">
        <div className="w-[30em] bg-gray-200 rounded-lg mt-4 mx-4 text-center">
          <div className="">
            <div style={calmFont.style} className="text-4xl">
              {format(currentDate, "h")}:{format(currentDate, "mm")}:
              {format(currentDate, "ss")} {format(currentDate, "aaa")}
            </div>
          </div>
          <div className="mt-6 mb-2 mx-24">
            <Separator className="bg-green-300  pt-0.25" />
          </div>
          <div className="text-md pb-4 font-extralight">
            <div>
              Today is{" "}
              <span className="font-bold text-lg">
                {format(currentDate, "EEEE")}
              </span>
            </div>
            <div className="">{format(currentDate, "PPP")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDisplay;
