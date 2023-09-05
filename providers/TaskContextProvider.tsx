"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface TaskContextType {
  taskCompleted: boolean;
  setTaskCompleted: Dispatch<SetStateAction<boolean>>;
}

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType,
);

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
