"use client";

import GetTaskCountForUser from "@/components/task_queries/GetTaskCountForUser";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import CurrentTaskDisplay from "./CurrentTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";
import { Skeleton } from "@/components/ui/skeleton";

const InitialPageDisplay = () => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const getTaskCount = async () => {
    if (user !== null) {
      if (queryClient.getQueryData(["TaskCount", user.id])) {
        return queryClient.getQueryData(["TaskCount", user.id]) as number;
      } else {
        return (await GetTaskCountForUser(user.id)) as number;
      }
    }
    return 0;
  };

  const {
    data: taskCount,
    error: countError,
    isFetching: isCountFetching,
    isError: isCountError,
    isSuccess: isCountSuccess,
  } = useQuery<number, Error>({
    queryKey: ["TaskCount", user?.id],
    queryFn: getTaskCount,
  });

  if (isCountFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (isCountError) return "Error has occured : " + countError.message;

  return (
    <div>
      {user !== null && taskCount && taskCount > 0 ? (
        <CurrentTaskDisplay user={user} />
      ) : (
        <NoTaskDisplay user={user} />
      )}
    </div>
  );
};

export default InitialPageDisplay;
