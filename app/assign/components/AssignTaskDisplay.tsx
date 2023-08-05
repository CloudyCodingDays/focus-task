"use client";

import { useEffect, useState } from "react";

import { Task } from "@/types/supabase";
import AssignItem from "./AssignItem";
import GetTasks from "@/app/manage/list/components/GetTasks";
import useTaskListContext from "@/hooks/useTaskListContext";

const AssignTaskDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await GetTasks());
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
