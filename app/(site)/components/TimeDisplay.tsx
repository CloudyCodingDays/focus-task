"use client";
import format from "date-fns/format";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

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
    <div className="py-2">
      <div className="text-1xl px-4">
        Today is{" "}
        <span className="text-1xl font-bold">
          {format(currentDate, "EEEE")}{" "}
        </span>
        and the current date is{" "}
        <span className="text-1xl font-bold">{format(currentDate, "PPP")}</span>
      </div>
      <div style={calmFont.style} className="text-center text-8xl">
        {format(currentDate, "h")}:{format(currentDate, "mm")}:
        {format(currentDate, "ss")} {format(currentDate, "aaa")}
      </div>
      <div></div>
    </div>
  );
};

export default TimeDisplay;
