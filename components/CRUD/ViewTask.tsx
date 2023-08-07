"use client";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ViewTaskProps {
  id: string;
}

const ViewTask: React.FC<ViewTaskProps> = ({ id }) => {
  const [taskDetail, setTaskDetail] = useState<Task[]>([]);

  useEffect(() => {
    const getTaskDetails = async () => {
      setTaskDetail(await GetTaskDetails(id));
    };
    getTaskDetails().catch(console.error);
  }, [id]);
  return (
    <div>
      <div className="my-8">
        <Link href="/manage/list" className="bg-green-400 rounded-lg py-4 px-4">
          Back to Manage Tasks
        </Link>
      </div>
      {taskDetail?.map((item) => (
        <div key={item.id}>
          <div>ID: {item.id}</div>
          <div>Name: {item.name}</div>
          <div>Description: {item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
