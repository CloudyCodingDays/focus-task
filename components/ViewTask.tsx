"use client";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TaskItemDetails from "./TaskItemDetails";
import GetTaskDetailsByTaskId from "./GetTaskDetailsByTaskId";

interface ViewTaskProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const ViewTask: React.FC<ViewTaskProps> = ({ id, onBack }) => {
  const [taskDetail, setTaskDetail] = useState<Task[]>([]);

  const HandleBack = () => {
    onBack(false);
  };

  useEffect(() => {
    const getTaskDetails = async () => {
      setTaskDetail(await GetTaskDetailsByTaskId(id));
    };
    getTaskDetails().catch(console.error);
  }, [id]);

  return (
    <div>
      {taskDetail?.map((item) => (
        <div key={item.id}>
          <TaskItemDetails task={item} />
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
