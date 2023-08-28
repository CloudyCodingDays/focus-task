"use client";

import GetTaskCountForUser from "@/components/task_queries/GetTaskCountForUser";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import CurrentTaskDisplay from "./CurrentTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";
import { useState } from "react";
import DetermineTaskPage from "./DetermineTaskPage";

const InitialPageDisplay = () => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const [delayLoad, setDelayLoad] = useState<boolean>(true);
  let activeTaskExists = false;

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

  const { data, error, isLoading, isError, isSuccess } = useQuery<
    number,
    Error
  >({
    queryKey: ["TaskCount", user?.id],
    queryFn: getTasks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return "Error has occured : " + error.message;

  if (!data) return <div>Loading screen...</div>;

  return (
    <div>
      <DetermineTaskPage user={user} />
    </div>
  );
};

export default InitialPageDisplay;
