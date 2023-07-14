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
    <div className="text-center">
      <div>
        {format(currentDate, "EEEE")} - {format(currentDate, "pp")}
      </div>
      <div>{format(currentDate, "PP")}</div>
    </div>
  );
};

export default TimeDisplay;
