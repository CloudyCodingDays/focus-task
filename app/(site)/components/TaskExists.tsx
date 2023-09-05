"use client";
import GetActiveTaskByUserId from "@/components/task_queries/GetActiveTaskByUserId";
import { Task } from "@/types/Task";
import { User } from "@supabase/supabase-js";
import { useQuery, useQueryClient, UseQueryResult } from "react-query";
import ActiveTaskExists from "./ActiveTaskExists";
import NoActiveTaskExists from "./NoActiveTaskExists";
import { Skeleton } from "@/components/ui_components/skeleton";
import { CatPictureData } from "@/types/CatPictureData";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import React from "react";

interface CurrentTaskDisplayProps {
  user: User | null;
  catQuery: UseQueryResult<CatPictureData[], Error>;
}

const TaskExists: React.FC<CurrentTaskDisplayProps> = ({ user, catQuery }) => {
  const queryClient = useQueryClient();

  const queryKeys = ["ActiveTask", user ? user.id : ""];
  const getTasks = async () => {
    if (user) {
      let taskList = ReactQueryCache(queryClient, queryKeys) as Task[];
      if (taskList === undefined) {
        return await GetActiveTaskByUserId(user.id);
      }
    }
    return [];
  };

  const { data, error, isFetching, isError } = useQuery<Task[], Error>({
    queryKey: queryKeys,
    queryFn: getTasks,
  });

  if (isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (isError) return "Error has occurred : " + error.message;

  return (
    <div>
      {data?.length !== 0 ? (
        data?.map((item) => (
          <div key={item.id}>
            <ActiveTaskExists task={item} catQuery={catQuery} />
          </div>
        ))
      ) : (
        <NoActiveTaskExists />
      )}
    </div>
  );
};

export default TaskExists;
