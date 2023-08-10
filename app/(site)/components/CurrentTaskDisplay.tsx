"use client";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";
import useTaskListContext from "@/hooks/useTaskListContext";

import { useUserInfo } from "@/hooks/useUserInfo";
import { useEffect, useState } from "react";
import { Task } from "@/types/Task";
import GetTaskDetails from "@/components/GetTaskDetails";

const CurrentTaskDisplay = () => {
  const { user } = useUserInfo();
  const [task, setTask] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  useEffect(() => {
    const getActiveTask = async () => {
      if (user !== null) {
        const activeTask = await GetTaskDetails(user.id, "user");

        setTask(activeTask);
        if (setUpdateTaskList !== undefined) setUpdateTaskList(false);
      }
    };
    getActiveTask().catch(console.error);
  }, [updateTaskList, setUpdateTaskList, user]);
  return (
    <div>
      {task.length > 0 ? (
        task.map((item) => (
          <div key={item.id}>
            <ActiveTaskDisplay task={item} />
          </div>
        ))
      ) : (
        <NoTaskDisplay />
      )}
    </div>
  );
};

export default CurrentTaskDisplay;
