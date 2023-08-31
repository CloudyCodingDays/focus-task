import { TaskContext } from "@/providers/TaskContextProvider";
import { ThemeContext } from "@/providers/ThemeContextProvider";
import { useContext } from "react";

const useTaskContext = () => {
  const taskContext = useContext(TaskContext);

  if (taskContext === undefined) {
    throw new Error("ThemeContext must be inside a ThemeContext");
  }
  return taskContext;
};

export default useTaskContext;
