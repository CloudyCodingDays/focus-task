"use client";
import GetTaskDetailsByUserId from "@/components/task_queries/GetActiveTaskByUserId";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoActiveTaskDisplay from "./NoActiveTaskDisplay";
import useTaskListContext from "@/hooks/useTaskListContext";
import GetTaskCountForUser from "@/components/task_queries/GetTaskCountForUser";
import { User } from "@supabase/supabase-js";

interface CurrentTaskDisplayProps {
  user: User | null;
}

const CurrentTaskDisplay: React.FC<CurrentTaskDisplayProps> = ({ user }) => {
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

  if (isLoading) return <NoActiveTaskDisplay />;
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
        <NoActiveTaskDisplay />
      )}
    </div>
  );
};

export default CurrentTaskDisplay;
