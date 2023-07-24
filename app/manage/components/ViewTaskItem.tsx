import Image from "next/image";

import { Task } from "@/types/supabase";
import pic from "@/dishes.jpg";

interface TaskItemProps {
  data: Task[];
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
          <div>
            <button className="border-2 border-green-100 rounded-lg mr-4 text-sm px-4 py-4">
              View Task
            </button>
          </div>
        </div>
        <div className="mt-4 ml-4">{item.description}</div>
        <div className="flex justify-around">
          <div>
            <button className="bg-red-300 rounded-lg py-4 my-4 px-4">
              Delete Task
            </button>
          </div>
          <div>
            <button className="bg-green-300 rounded-lg py-4 my-4 px-4">
              Edit Task
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default TaskItem;
