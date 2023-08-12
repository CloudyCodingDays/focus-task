"use client";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TaskItemDetails from "./TaskItemDetails";
import GetTaskDetailsByTaskId from "./GetTaskDetailsByTaskId";
import { useQuery, useQueryClient } from "react-query";

interface ViewTaskProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const ViewTask: React.FC<ViewTaskProps> = ({ id, onBack }) => {
  const [taskDetail, setTaskDetail] = useState<Task[]>([]);
  const queryClient = useQueryClient();
  const HandleBack = () => {
    onBack(false);
  };

  const getTasks = async () => {
    if (queryClient.getQueryData(["Tasks", id])) {
      return queryClient.getQueryData(["Tasks", id]) as Task[];
    } else {
      return await GetTaskDetailsByTaskId(id);
    }
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
