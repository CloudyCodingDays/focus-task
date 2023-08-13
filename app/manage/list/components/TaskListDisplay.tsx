"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import TaskItem from "../../../../components/TaskItem";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import TaskItemActions from "./TaskItemActions";
import FilterSearchResults from "./FilterSearchResults";
import GetTaskDetails from "@/components/GetAllTasksforUser";

import SearchForm from "./SearchForm";
import AddTaskButton from "./AddTaskButton";
import { useQuery, useQueryClient } from "react-query";
import { useUserInfo } from "@/hooks/useUserInfo";

const TaskListDisplay = () => {
  const { user } = useUserInfo();
  const [debouncedValue, setDebouncedValue] = useState("");
  const queryClient = useQueryClient();
  //PERFORMANCE LOGGING
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  //PERFORMANCE LOGGING

  const getTasks = async () => {
    if (!user) return [] as Task[];

    if (queryClient.getQueryData(["Tasks", debouncedValue])) {
      return queryClient.getQueryData(["Tasks", debouncedValue]) as Task[];
    }

    return await FilterSearchResults(debouncedValue, user.id);
  };

  const query = useQuery<Task[], Error>({
    queryKey: ["Tasks", debouncedValue],
    queryFn: getTasks,
  });

  if (query.isLoading) return "Loading...";
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      {/*//PERFORMANCE LOGGING */}
      <h1>Render Count: {count.current}</h1>
      {/*PERFORMANCE LOGGING */}
      <SearchForm onSearch={setDebouncedValue} />

      <div className="w-11/12 mx-auto">
        <AddTaskButton taskCount={query.data ? query.data.length : 0} />
        <div
          className="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          px-8"
        >
          {query.data?.map((item) => (
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
