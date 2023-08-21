"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface TaskListContextType {
  taskCount?: number;
  setTaskCount?: Dispatch<SetStateAction<number>>;
  updateTaskCount?: boolean;
  setUpdateTaskCount?: Dispatch<SetStateAction<boolean>>;
}

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType
);

interface TaskListContextProviderProps {
  children: React.ReactNode;
}
const TaskListContextProvider: React.FC<TaskListContextProviderProps> = ({
  children,
}) => {
  const [taskCount, setTaskCount] = useState<number>(0);
  const [updateTaskCount, setUpdateTaskCount] = useState<boolean>(true);

  return (
    <TaskListContext.Provider
      value={{ taskCount, setTaskCount, updateTaskCount, setUpdateTaskCount }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
