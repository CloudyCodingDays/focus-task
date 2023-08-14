"use client";
import { useEffect, useRef, useState } from "react";

import SearchForm from "@/app/manage/list/components/SearchForm";
import TaskItemDisplay from "@/components/TaskItemDisplay";

const AssignTaskDisplay = () => {
  const [debouncedValue, setDebouncedValue] = useState("");

  //PERFORMANCE LOGGING
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  //PERFORMANCE LOGGING

  return (
    <div>
      {/*//PERFORMANCE LOGGING */}
      <h1>Render Count: {count.current}</h1>
      {/*PERFORMANCE LOGGING */}

      <div className="font-semibold text-green-600 bg-gray-200 my-8 text-1xl w-fit mx-auto rounded-lg p-4">
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
