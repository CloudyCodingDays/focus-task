"use client";
import format from "date-fns/format";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const calmFont = localFont({
  src: "./fonts/Pacifico.ttf",
});

const TimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setCurrentDate(new Date());
      return () => clearInterval(timeTicker);
    }, 1000);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[30em]  bg-gray-200 rounded-lg mt-4 mx-4 text-center">
        <div className="">
          <div style={calmFont.style} className="text-5xl">
            {format(currentDate, "h")}:{format(currentDate, "mm")}:
            {format(currentDate, "ss")} {format(currentDate, "aaa")}
          </div>
        </div>
        <div className="my-4 mx-24">
          <Separator className="bg-green-300" />
        </div>
        <div className="text-md pb-4">
          <div className="font-extralight">
            Today is{" "}
            <span className="font-bold">{format(currentDate, "EEEE")}</span>
          </div>
          <div className="">{format(currentDate, "PPP")}</div>
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
