"use client";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";
import useTaskListContext from "@/hooks/useTaskListContext";

import { useUserInfo } from "@/hooks/useUserInfo";
import { useState } from "react";
import { Task } from "@/types/Task";
import GetTaskDetailsByUserId from "@/components/GetActiveTaskByUserId";
import { useQuery, useQueryClient } from "react-query";

const CurrentTaskDisplay = () => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const getTasks = async () => {
    if (user !== null) {
      if (queryClient.getQueryData(["ActiveTask", user.id])) {
        return queryClient.getQueryData(["ActiveTask", user.id]) as Task[];
      } else {
        return await GetTaskDetailsByUserId(user.id);
      }
    }
    return [];
  };

  const { data, error, isLoading, isError } = useQuery<Task[], Error>({
    queryKey: ["ActiveTask", user?.id],
    queryFn: getTasks,
  });

  if (isLoading) return "Loading...";
  if (isError) return "Error has occured : " + error.message;

  return (
    <div>
      {data?.length !== 0 ? (
        data?.map((item) => (
          <div key={item.id}>
            <ActiveTaskDisplay task={item} />
          </div>
        ))
      ) : (
        <NoTaskDisplay />
      )}
    </div>
  );
};

export default CurrentTaskDisplay;
