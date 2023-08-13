"use client";

import { useEffect, useState } from "react";

import AssignItem from "./AssignItem";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Task } from "@/types/Task";
import GetTaskDetails from "@/components/GetAllTasksforUser";

const AssignTaskDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await GetTaskDetails());
    };

    getTasks().catch(console.error);
  }, []);

  return (
    <div>
      <div className="text-sm font-light mt-8 mr-2">All Tasks</div>
      {tasks?.map((item) => (
        <AssignItem key={item.id} task={item} />
      ))}
    </div>
  );
};

export default AssignTaskDisplay;
