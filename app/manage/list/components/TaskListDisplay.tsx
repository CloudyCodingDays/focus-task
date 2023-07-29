"use client";
import { useEffect, useState } from "react";
import GetTasks from "../../../../components/CRUD/GetTasks";
import TaskItem from "./TaskItem";
import { Task } from "@/types/supabase";

const TaskListDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await GetTasks());
    };

    getTasks().catch(console.error);
  }, []);
  return (
    <div>
      <div className="text-sm font-light mt-8 mr-2">All Tasks</div>
      <TaskItem data={tasks} />
    </div>
  );
};

export default TaskListDisplay;
