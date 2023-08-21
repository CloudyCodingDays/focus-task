"use client";
import SearchForm from "@/app/manage/components/SearchForm";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const TaskList = () => {
  const [debouncedValue, setDebouncedValue] = useState("");

  const TaskItemDisplay = dynamic(() => import("./TaskItemDisplay"), {
    loading: () => <p>Loading..</p>,
  });

  return (
    <div>
      <SearchForm setDebouncedValue={setDebouncedValue} />

      <div className="mx-auto pb-4 mt-2 bg-gray-100 lg:w-[1000px]">
        <TaskItemDisplay debouncedValue={debouncedValue} />
      </div>
    </div>
  );
};

export default TaskList;
