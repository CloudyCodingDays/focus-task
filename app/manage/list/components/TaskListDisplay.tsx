"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import TaskItem from "../../../../components/TaskItem";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import TaskItemActions from "./TaskItemActions";
import FilterSearchResults from "./FilterSearchResults";
import GetTaskDetails from "@/components/GetTaskDetails";

import SearchForm from "./SearchForm";
import AddTaskButton from "./AddTaskButton";

const TaskListDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  //PERFORMANCE LOGGING
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  //PERFORMANCE LOGGING

  const HandleSearch = useCallback((searchResults: Task[]) => {
    setFilteredTasks(searchResults);
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      const newTasks = await GetTaskDetails();

      setTasks(newTasks);
      setFilteredTasks(newTasks);
      if (setUpdateTaskList !== undefined) setUpdateTaskList(false);
    };

    getTasks().catch(console.error);
  }, [updateTaskList, setUpdateTaskList]);

  return (
    <div>
      {/*//PERFORMANCE LOGGING */}
      <h1>Render Count: {count.current}</h1>
      {/*PERFORMANCE LOGGING */}
      <SearchForm onSearch={HandleSearch} />

      <div className="w-11/12 mx-auto">
        <AddTaskButton taskCount={filteredTasks.length} />
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
