"use client";
import { useEffect, useRef, useState, useCallback } from "react";

import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import { useUserInfo } from "@/hooks/useUserInfo";
import FilterSearchResults from "@/app/manage/list/components/FilterSearchResults";
import SearchForm from "@/app/manage/list/components/SearchForm";
import AssignItem from "./AssignItem";

const AssignTaskDisplay = () => {
  const { user } = useUserInfo();
  const [debouncedValue, setDebouncedValue] = useState("");
  const queryClient = useQueryClient();

  //PERFORMANCE LOGGING
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  //PERFORMANCE LOGGING

  const getTasks = () => {
    if (!user) return [] as Task[];

    if (queryClient.getQueryData(["Tasks", debouncedValue])) {
      console.log("cache: " + user.id + " : " + debouncedValue);
      return queryClient.getQueryData(["Tasks", debouncedValue]) as Task[];
    }

    return FilterSearchResults(debouncedValue, user.id);
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

      <div className="font-semibold text-green-600 bg-gray-200 my-8 text-1xl w-fit mx-auto rounded-lg p-4">
        Select the task that you want to do
        <SearchForm onSearch={setDebouncedValue} />
      </div>
      <div>
        {query.data?.map((item) => (
          <AssignItem key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default AssignTaskDisplay;
