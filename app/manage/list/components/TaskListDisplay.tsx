"use client";
import { useEffect, useState } from "react";
import TaskItem from "../../../../components/TaskItem";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import TaskItemActions from "./TaskItemActions";
import FilterSearchResults from "./FilterSearchResults";
import GetTaskDetails from "@/components/GetTaskDetails";

import SearchForm from "./SearchForm";
import AddTask from "./AddTask";

const TaskListDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSearch: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    let SearchResults: Task[];
    SearchResults = FilterSearchResults(e, tasks);
    setFilteredTasks(SearchResults);
  };

  useEffect(() => {
    const getTasks = async () => {
      const newTasks = await GetTaskDetails();
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    };

    getTasks().catch(console.error);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(false);
  }, [updateTaskList, setUpdateTaskList]);

  return (
    <div>
      <SearchForm onSearch={HandleSearch} />

      <div className="w-4/5 mx-auto">
        <AddTask taskCount={filteredTasks.length} />
        <div
          className="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          px-8"
        >
          {filteredTasks?.map((item) => (
            <div
              key={item.id}
              className="
              bg-gray-100
              rounded-lg
              my-4 
              mx-2 
              drop-shadow-md"
            >
              <div>
                <div>
                  <TaskItem task={item} />
                </div>
                <div className="pt-4">
                  <TaskItemActions id={item.id} task={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListDisplay;
