"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { BooleanLiteral } from "typescript";

interface TaskListContextType {
  showToast?: boolean;
  setShowToast?: Dispatch<SetStateAction<boolean>>;
  taskCompleted?: boolean;
  setTaskCompleted?: Dispatch<SetStateAction<boolean>>;
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
  const [showToast, setShowToast] = useState<boolean>(false);
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);

  return (
    <TaskListContext.Provider
      value={{ showToast, setShowToast, taskCompleted, setTaskCompleted }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
