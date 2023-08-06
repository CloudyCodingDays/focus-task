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
    <div key={id} className="rounded-lg bg-gray-100 mx-2 my-2 min-h-full">
      <div>
        <Link
          href={{
            pathname: "/manage/delete",
            query: { id: id },
          }}
        >
          <div className="">
            <div className="flex flex-row justify-center">
              <Image
                src={pic}
                width="450"
                height="300"
                alt="Task item Icon"
              ></Image>
            </div>

            <div className="ml-4">
              <div className="text-lg text-center">{name}</div>
              <div className="text-sm font-extralight"> Tags</div>
              <div className="text-sm mt-2 mb-4 font-light text-gray-400 ">
                <p className="break-words">
                  {description}zxczxczx czxc asda sdsa..
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
