"use client";
import GetTaskDetailsByUserId from "@/components/GetActiveTaskByUserId";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";

const CurrentTaskDisplay = () => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const getTasks = async () => {
    if (user !== null) {
      if (queryClient.getQueryData(["ActiveTask", user.id])) {
        console.log("cache");
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

  if (isLoading) return <NoTaskDisplay />;
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
