import Image from "next/image";
import { Task } from "@/types/Task";

interface TaskItemProps {
  task: Task;
}

const TaskItemRowLayout: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name } = task;
  return (
    <div key={id} className="rounded-lg h-full">
      <div className="flex flex-row">
        <div>
          <Image
            src="/noImage.png"
            width="150"
            height="150"
            alt="Task item Icon"
          ></Image>
        </div>

        <div className="ml-4 w-full">
          <div className="flex flex-row">
            <div className="text-lg">{name}</div>
            <div className="text-sm font-extralight"> Tags</div>
          </div>
          <div className="text-sm mt-2 mb-4 font-light text-gray-400 ">
            <p className="break-words">
              {description}zxczxczx czxc asda sdsa..
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-sm font-extralight"> Due Date</div>
            <div className="text-sm font-extralight"> Priority</div>
            <div className="text-sm font-extralight"> Recurring Task</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemRowLayout;
