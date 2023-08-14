"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const TaskList = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const SearchForm = dynamic(
    () => import("@/app/manage/components/SearchForm"),
    {
      loading: () => <p>Loading...</p>,
    }
  );
  const TaskItemDisplay = dynamic(() => import("./TaskItemDisplay"), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <div>
      <SearchForm setDebouncedValue={setDebouncedValue} />
      <div className="w-11/12 mx-auto">
        <TaskItemDisplay debouncedValue={debouncedValue} ShowTaskActions />
      </div>
    </div>
  );
};

export default TaskList;
