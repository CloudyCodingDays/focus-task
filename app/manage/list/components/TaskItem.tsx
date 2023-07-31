import Image from "next/image";
import Link from "next/link";

import { Task } from "@/types/supabase";
import pic from "@/dishes.jpg";

interface TaskItemProps {
  data: Task[] | undefined;
}

const TaskItem: React.FC<TaskItemProps> = ({ data }) => {
  return data?.map((item) => (
    <div key={item.id} className="bg-gray-300 w-[30em] rounded-lg">
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
            <div>{item.name}</div>
            <div>Tags</div>
          </div>
        </div>
        <div className="mt-4 ml-4">{item.description}</div>
        <div className="flex justify-around">
          <Link
            href={{
              pathname: "/manage/delete",
              query: { id: JSON.stringify(item.id) },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Delete Task
          </Link>
          <Link
            href={{
              pathname: "/manage/detail",
              query: { id: JSON.stringify(item.id) },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            View Details
          </Link>
          <Link
            href={{
              pathname: "/manage/edit",
              query: { id: JSON.stringify(item.id) },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Edit Task
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default TaskItem;
