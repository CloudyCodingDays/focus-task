"use client";
import GetTasks from "@/app/manage/list/components/GetTasks";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";
import { useUserInfo } from "@/hooks/useUserInfo";
import GetActiveTask from "./GetActiveTask";
import { useEffect, useState } from "react";
import { Task } from "@/types/supabase";
import useTaskListContext from "@/hooks/useTaskListContext";
import GetActiveTaskDetails from "./GetActiveTaskDetails";

const CurrentTaskDisplay = () => {
  // get user info to determine if there is an active task to show the correct panel
  const { user } = useUserInfo();
  const [task, setTask] = useState<Task[]>();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  useEffect(() => {
    const getActiveTask = async () => {
      if (user !== null) {
        const activeTask = await GetActiveTask(user.id);
        const taskDetails = await GetActiveTaskDetails(activeTask);
        setTask(taskDetails);
      }
    };
    getActiveTask().catch(console.error);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(false);
  }, [updateTaskList, setUpdateTaskList, user]);
  return (
    <div>
      <div>{JSON.stringify(task)}</div>
      {JSON.stringify(task) !== "[]" ? (
        <ActiveTaskDisplay data={task} />
      ) : (
        <NoTaskDisplay />
      )}
    </div>
  );
};

export default CurrentTaskDisplay;
