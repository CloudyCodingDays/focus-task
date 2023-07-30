import { TaskListContext } from "@/providers/TaskListContextProvider";
import { useContext } from "react";

const useTaskListContext = () => {
  const taskListContext = useContext(TaskListContext);

  if (TaskListContext === undefined) {
    throw new Error("useTaskListContext must be inside a TaskListContext");
  }
  return taskListContext;
};

export default useTaskListContext;
