"use client";
import { Task } from "@/types/Task";
import TaskItemDetails from "./TaskFormLayout";
import GetTaskDetailsByTaskId from "./GetTaskDetailsByTaskId";
import { useQuery, useQueryClient } from "react-query";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Dispatch, SetStateAction } from "react";

interface ViewTaskProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const ViewTask: React.FC<ViewTaskProps> = ({ id, onBack }) => {
  const { user } = useUserInfo();
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
