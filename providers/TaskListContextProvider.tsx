"use client";
import { Task } from "@/types/supabase";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface TaskListContextType {
  updateTaskList?: boolean;
  setUpdateTaskList?: Dispatch<SetStateAction<boolean | undefined>>;
}

const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType
);

interface TaskListContextProviderProps {
  children: React.ReactNode;
}
const TaskListContextProvider: React.FC<TaskListContextProviderProps> = ({
  children,
}) => {
  const [updateTaskList, setUpdateTaskList] = useState<boolean>();

  return (
    <TaskListContext.Provider value={{ updateTaskList, setUpdateTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

export const useTaskListContext = () => {
  const taskListContext = useContext(TaskListContext);

  if (TaskListContext === undefined) {
    throw new Error("useTaskListContext must be inside a TaskListContext");
  }
  return taskListContext;
};
