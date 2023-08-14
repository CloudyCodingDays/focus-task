"use client";
import { useEffect, useRef, useState } from "react";
import TaskItemDisplay from "@/components/TaskItemDisplay";
import SearchForm from "@/app/manage/components/SearchForm";

const AssignTaskDisplay = () => {
  const [debouncedValue, setDebouncedValue] = useState("");

  return (
    <div>
      <div className="font-semibold text-green-600 my-8 text-1xl w-fit mx-auto rounded-lg p-4 text-center drop-shadow-md">
        Select the task that you want to do
        <SearchForm setDebouncedValue={setDebouncedValue} />
      </div>
      <div className="w-11/12 mx-auto">
        <TaskItemDisplay
          debouncedValue={debouncedValue}
          ShowTaskActions={false}
        />
      </div>
    </div>
  );
};

export default AssignTaskDisplay;
