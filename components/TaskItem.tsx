import Image from "next/image";
import Link from "next/link";

import pic from "@/dishes.jpg";
import { Task } from "@/types/Task";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name } = task;
  return (
    <div key={id} className="rounded-lg bg-gray-100 h-full">
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
    </div>
  );
};

export default TaskItem;
