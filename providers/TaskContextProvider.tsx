"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface TaskContextType {
  taskCompleted: boolean;
  setTaskCompleted: Dispatch<SetStateAction<boolean>>;
}

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

const colors = ["red", "green", "blue"];
const modes = ["light", "dark"];

interface TaskContextProviderProps {
  children: React.ReactNode;
}
const TaskContextProvider: React.FC<TaskContextProviderProps> = ({
  children,
}) => {
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <TaskContext.Provider value={{ taskCompleted, setTaskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
