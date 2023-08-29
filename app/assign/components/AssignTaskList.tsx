"use client";
import { Calendar } from "@/components/ui/calendar";
import dynamic from "next/dynamic";
import { useState } from "react";

const AssignTaskList = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const AssignTaskItemDisplay = dynamic(
    () => import("./AssignTaskItemDisplay"),
    {
      loading: () => <p>Loading..</p>,
    }
  );

  return (
    <div>
      <div className="py-2 flex flex-row justify-center">
        <Calendar mode="single" selected={date} required onSelect={setDate} />
      </div>

      <div className="pb-4 rounded-lg md:w-1/2 mx-auto">
        <AssignTaskItemDisplay currentDate={date} />
      </div>
    </div>
  );
};

export default AssignTaskList;
