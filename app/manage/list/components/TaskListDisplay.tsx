"use client";
import { useEffect, useState } from "react";
import GetTasks from "../../../../components/CRUD/GetTasks";
import TaskItem from "./TaskItem";
import { Task } from "@/types/supabase";
import { useTaskListContext } from "@/providers/TaskListContextProvider";

const TaskListDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();
  useEffect(() => {
    const getTasks = async () => {
      setTasks(await GetTasks());
    };

    getTasks().catch(console.error);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(false);
  }, [updateTaskList, setUpdateTaskList]);

  return (
    <div>
      <div className="text-sm font-light mt-8 mr-2">All Tasks</div>
      <TaskItem data={tasks} />
    </div>
  );
};

export default TaskListDisplay;
