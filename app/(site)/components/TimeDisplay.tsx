"use client";
import format from "date-fns/format";
import { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setCurrentDate(new Date());
      return () => clearInterval(timeTicker);
    }, 1000);
  }, []);

  return (
    <div className="text-center py-6 text-3xl">
      <div className="mb-4">{format(currentDate, "pp")}</div>
      <div>Today is {format(currentDate, "EEEE")}!</div>
      <div>{format(currentDate, "PP")}</div>
    </div>
  );
};

export default TimeDisplay;
