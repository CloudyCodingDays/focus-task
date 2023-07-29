"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface TaskListContextType {
  UpdateTaskList?: boolean;
  setUpdateTaskList?: Dispatch<SetStateAction<boolean>>;
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
  const [UpdateTaskList, setUpdateTaskList] = useState<boolean>(false);

  return (
    <TaskListContext.Provider value={{ UpdateTaskList, setUpdateTaskList }}>
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
