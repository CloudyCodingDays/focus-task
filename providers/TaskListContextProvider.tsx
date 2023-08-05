"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface TaskListContextType {
  updateTaskList?: boolean;
  setUpdateTaskList?: Dispatch<SetStateAction<boolean>>;
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
  const [updateTaskList, setUpdateTaskList] = useState<boolean>(false);

  return (
    <TaskListContext.Provider value={{ updateTaskList, setUpdateTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
