"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const TaskList = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const TaskItemDisplay = dynamic(() => import("./TaskItemDisplay"), {
    loading: () => <p>Loading..</p>,
  });

  return (
    <div>
      <div className="py-4 mt-2 w-fit mx-auto px-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border-2"
        />
      </div>

      <div className="mx-auto pb-4 mt-2 bg-gray-100 lg:w-[1000px]">
        <TaskItemDisplay currentDate={date} />
      </div>
    </div>
  );
};

export default TaskList;
