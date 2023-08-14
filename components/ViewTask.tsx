"use client";
import { Task } from "@/types/Task";
import { useState } from "react";
import TaskItemDetails from "./TaskItemDetails";
import GetTaskDetailsByTaskId from "./GetTaskDetailsByTaskId";
import { useQuery, useQueryClient } from "react-query";
import { useUserInfo } from "@/hooks/useUserInfo";

interface ViewTaskProps {
  id: string;
}

const ViewTask: React.FC<ViewTaskProps> = ({ id }) => {
  const { user } = useUserInfo();
  const [taskDetail, setTaskDetail] = useState<Task[]>([]);
  const queryClient = useQueryClient();

  const getTasks = async () => {
    if (!user) return [];
    if (queryClient.getQueryData(["Tasks", id])) {
      return queryClient.getQueryData(["Tasks", id]) as Task[];
    }

    return await GetTaskDetailsByTaskId(id, user.id);
  };

  const { data, error, isLoading, isError } = useQuery<Task[], Error>({
    queryKey: ["Tasks", id],
    queryFn: getTasks,
  });

  if (isLoading) return "Loading...";
  if (isError) return "Error has occured : " + error.message;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <TaskItemDetails task={item} />
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
