"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import GetTasks from "../../../../components/CRUD/GetTasks";
import TaskItem from "./TaskItem";
import { Task } from "@/types/supabase";
import TaskListContextProvider from "@/providers/TaskListContextProvider";

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(
  undefined
);

interface CurrentUserContextType {
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<null>>;
}

const TaskListDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getTasks = async () => {
      setTasks(await GetTasks());
    };

    getTasks().catch(console.error);
  }, []);

  return (
    <div>
      <div className="text-sm font-light mt-8 mr-2">All Tasks</div>
      <TaskListContextProvider>
        <TaskItem data={tasks} />
      </TaskListContextProvider>
    </div>
  );
};

export default TaskListDisplay;
