"use client";
import { Calendar } from "@/components/ui_components/calendar";
import { Separator } from "@/components/ui_components/separator";
import { Skeleton } from "@/components/ui_components/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";

const AssignTaskListLayout = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const AssignTaskItemDisplay = dynamic(() => import("./AssignTaskListItems"), {
    loading: () => (
      <div>
        <div className="flex flex-row justify-between items-end">
          <div className="text-neutral font-semibold text-md">
            <Skeleton className="mx-auto w-[300px] h-[40px]" />
          </div>
          <div>
            <Skeleton className="mx-auto w-[100px] h-[40px]" />
          </div>
        </div>
        <Separator className="pt-0.25 bg-main lg:mb-4 mb-8" />
      </div>
    ),
  });

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

export default AssignTaskListLayout;
