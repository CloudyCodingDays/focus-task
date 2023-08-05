import Image from "next/image";
import Link from "next/link";

import { Task } from "@/types/supabase";
import pic from "@/dishes.jpg";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name } = task;
  return (
    <div key={id} className="bg-gray-300 w-[30em] rounded-lg">
      <div>
        <div className="flex flex-row ml-4 mt-4 items-start">
          <div className="mr-4">
            <Image
              src={pic}
              width="75"
              height="75"
              alt="Task item Icon"
            ></Image>
          </div>
          <div className="flex-grow">
            <div>{name}</div>
            <div>Tags</div>
          </div>
        </div>
        <div className="mt-4 ml-4">{description}</div>
        <div className="flex justify-around">
          <Link
            href={{
              pathname: "/manage/delete",
              query: { id: id },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Delete Task
          </Link>
          <Link
            href={{
              pathname: "/manage/detail",
              query: { id: id },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            View Details
          </Link>
          <Link
            href={{
              pathname: "/manage/edit",
              query: { id: id },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Edit Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
