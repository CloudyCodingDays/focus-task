"use client";
import { useState } from "react";
import TaskItemDisplay from "./TaskItemDisplay";
import SearchForm from "@/app/manage/components/SearchForm";

const TaskList = () => {
  const [debouncedValue, setDebouncedValue] = useState("");

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
