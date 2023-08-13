"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import TaskItem from "../../../../components/TaskItem";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import TaskItemActions from "./TaskItemActions";
import FilterSearchResults from "./FilterSearchResults";
import GetTaskDetails from "@/components/GetAllTasksforUser";

import SearchForm from "./SearchForm";
import AddTaskButton from "./AddTaskButton";
import { useQuery, useQueryClient } from "react-query";
import { useUserInfo } from "@/hooks/useUserInfo";
import GetAllTasksforUser from "@/components/GetAllTasksforUser";
import TaskItemDisplay from "./TaskItemDisplay";

const TaskListDisplay = () => {
  const { user } = useUserInfo();
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [debouncedValue, setDebouncedValue] = useState("");
  const queryClient = useQueryClient();

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
        <AddTaskButton taskCount={taskList ? taskList.length : 0} />
        <TaskItemDisplay debouncedValue={debouncedValue} />
      </div>
    </div>
  );
};

export default TaskListDisplay;
