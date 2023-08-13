"use client";
import { useEffect, useRef, useState } from "react";
import { Task } from "@/types/Task";
import SearchForm from "../app/manage/list/components/SearchForm";
import AddTaskButton from "../app/manage/list/components/AddTaskButton";
import { useUserInfo } from "@/hooks/useUserInfo";
import TaskItemDisplay from "./TaskItemDisplay";

const TaskListDisplay = () => {
  const { user } = useUserInfo();
  const [taskList, setTaskList] = useState<Task[]>([]);
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
      <SearchForm setDebouncedValue={setDebouncedValue} />

      <div className="w-11/12 mx-auto">
        <AddTaskButton />
        <TaskItemDisplay debouncedValue={debouncedValue} ShowTaskActions />
      </div>
    </div>
  );
};

export default TaskListDisplay;
