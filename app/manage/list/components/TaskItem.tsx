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
    <div key={id} className="bg-gray-300 rounded-lg">
      <div className="flex flex-row mt-4 px-2 py-2">
        <div>
          <Image
            src={pic}
            width="250"
            height="250"
            alt="Task item Icon"
          ></Image>
        </div>
        <div className="ml-4">
          <div className="text-md font-semibold text-center">{name}</div>
          <div className="text-sm font-extralight"> Tags</div>
          <div className="text-sm mt-2 mb-4">
            {description}zxczxczx czxc asda sdsa
          </div>
          <div className="flex flex-row self-end">
            <Link
              href={{
                pathname: "/manage/delete",
                query: { id: id },
              }}
              className="bg-green-400 rounded-lg mx-2"
            >
              Delete
            </Link>
            <Link
              href={{
                pathname: "/manage/detail",
                query: { id: id },
              }}
              className="bg-green-400 rounded-lg mx-2"
            >
              View
            </Link>
            <Link
              href={{
                pathname: "/manage/edit",
                query: { id: id },
              }}
              className="bg-green-400 rounded-lg mx-2"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
