"use client";
import { Separator } from "@/components/ui/separator";
import format from "date-fns/format";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TimeDateDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const router = useRouter();

  const HandleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timeTicker);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="lg:w-[50em] w-full bg-gray-200 rounded-lg mt-4 mx-4 text-center drop-shadow-lg">
          <div>
            <div className="text-3xl text-gray-500 pt-4">
              {format(currentDate, "h")}:{format(currentDate, "mm")}{" "}
              {format(currentDate, "aaa")}
            </div>
          </div>
          <div className="mt-4 mb-2 mx-24">
            <Separator className="bg-green-500" />
          </div>
          <div className="text-md pb-4 font-extralight">
            <div>
              Today is{" "}
              <span className="text-lg">{format(currentDate, "EEEE")}</span>
            </div>
            <div className="">{format(currentDate, "PPP")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDateDisplay;
