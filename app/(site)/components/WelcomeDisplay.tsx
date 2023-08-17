"use client";
import { Separator } from "@/components/ui/separator";
import format from "date-fns/format";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

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
      <div className="w-full flex flex-col items-center">
        <div className="w-[30em] bg-gray-200 rounded-lg mt-4 mx-4 text-center drop-shadow-lg">
          <div className="">
            <div className="text-4xl text-gray-500 pt-4">
              {format(currentDate, "h")}:{format(currentDate, "mm")}:
              {format(currentDate, "ss")} {format(currentDate, "aaa")}
            </div>
          </div>
          <div className="mt-4 mb-2 mx-24">
            <Separator className="bg-green-300  pt-0.25" />
          </div>
          <Calendar mode="single" className="rounded-md border w-fit mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeDisplay;
