"use client";

import GetTaskCountForUser from "@/components/task_queries/GetTaskCountForUser";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import CurrentTaskDisplay from "./CurrentTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";

const InitialTaskDisplay = () => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const getTasks = async () => {
    if (user !== null) {
      if (queryClient.getQueryData(["TaskCount", user.id])) {
        return queryClient.getQueryData(["TaskCount", user.id]) as number;
      } else {
        return (await GetTaskCountForUser(user.id)) as number;
      }
    }
    return 0;
  };

  const { data, error, isLoading, isError } = useQuery<number, Error>({
    queryKey: ["TaskCount", user?.id],
    queryFn: getTasks,
  });

  if (isError) return "Error has occured : " + error.message;
  
  return (
    <div>
      {data && data > 0 ? (
        <CurrentTaskDisplay user={user} />
      ) : (
        <NoTaskDisplay user={user} />
      )}
    </div>
  );
};

export default InitialTaskDisplay;
