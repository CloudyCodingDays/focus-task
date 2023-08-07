"use client";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TaskItemDetails from "../TaskItemDetails";

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
      setTaskDetail(await GetTaskDetails(id));
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
      <div
        className="
      my-8
      flex 
      flex-row 
      justify-between"
      >
        <div>
          <button
            className="
            hover:bg-green-200
            hover:text-gray-500
            bg-white
            border-green-300 
            border-2 
            rounded-lg 
            ml-4 
            py-4 
            px-4
            mx-4"
            onClick={HandleBack}
          >
            Back
          </button>
        </div>
        <div className="flex">
          <div className="pr-4">
            <Link
              href={{
                pathname: "/manage/delete",
                query: { id: id },
              }}
              className="
              hover:bg-red-400
              hover:text-white
              border-red-400
              border-2 
              rounded-lg 
              py-4 
              px-4"
            >
              Delete Task
            </Link>
          </div>
          <div className="pr-4">
            <Link
              href={{
                pathname: "/manage/edit",
                query: { id: id },
              }}
              className="
              hover:bg-green-500
              hover:text-white
              bg-green-300 
              rounded-lg 
              py-4 
              px-4"
            >
              Edit Task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
