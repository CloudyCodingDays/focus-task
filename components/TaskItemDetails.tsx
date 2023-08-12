import Image from "next/image";
import { Task } from "@/types/Task";
import pic from "@/dishes.jpg";
import { Separator } from "./ui/separator";

interface TaskItemDetailsProps {
  task: Task;
}

const TaskItemDetails: React.FC<TaskItemDetailsProps> = ({ task }) => {
  const {
    id,
    description,
    name,
    is_recurring,
    created_at,
    due_date,
    priority,
    recurring_type,
    image_path,
  } = task;
  return (
    <div key={id} className="rounded-lg bg-gray-100">
      <div className="flex flex-row">
        {/* Change to grid*/}
        <div className="">
          <Image
            src={pic}
            width="600"
            height="600"
            alt="Task item Icon"
          ></Image>
        </div>
        <div className="ml-4 w-full">
          <div className="break-words">
            <div className="text-lg font-bold">
              {name} Tags asdqw asdq wdas Tags asdqw asdq wdas Tags asdqw asdq
              wdas Tags asdqw asdq wdas title
            </div>
            <div className="text-sm font-extralight">
              Tags asdqw asdq wdas Tags asdqw asdq wdas Tags asdqw asdq wdas
              Tags asdqw asdq wdas Tags asdqw asdq wdas
            </div>
          </div>
          <div className="text-sm mt-2 mb-4 font-light text-gray-400 ">
            <p className="break-words">{description}</p>
          </div>
          <Separator className="bg-green-200 pt-0.5 w-1/2 mx-auto my-8" />
          <div
            className="
          md:flex 
          md:flex-row 
          md:justify-between
          md:flex-wrap
          mr-4"
          >
            {/*Is Recurring Card*/}
            <div
              className="
          flex 
          flex-col 
          items-center 
          w-[10em] 
          bg-green-100 
          rounded-md 
          border-2 
          border-green-400
          mb-4"
            >
              <div className="text-md font-semibold">Recurring</div>
              <div>
                <div className="pt-4 font-light">
                  {is_recurring ? "true" : "false"}
                </div>
              </div>
            </div>

            {/*Recurring Type Card*/}
            <div
              className="          
            flex 
            flex-col 
            items-center 
            w-[10em] 
            bg-green-100 
            rounded-md 
            border-2 
            border-green-400
            mb-4"
            >
              <div className="text-md font-semibold">Recurring Type</div>
              <div>
                <div className="pt-4 font-light">Weekly</div>
              </div>
            </div>

            {/*Priority Card*/}
            <div
              className="          
            flex 
            flex-col 
            items-center 
            w-[10em] 
            bg-green-100 
            rounded-md 
            border-2 
            border-green-400
            mb-4"
            >
              <div className="text-md font-semibold">Priority</div>
              <div>
                <div className="pt-4 font-light">{priority}</div>
              </div>
            </div>

            {/*Due Date Card*/}
            <div
              className="          
            flex 
            flex-col 
            items-center 
            w-[10em] 
            bg-green-100 
            rounded-md 
            border-2 
            border-green-400
            mb-4"
            >
              <div className="text-md font-semibold">Due Date</div>
              <div>
                <div className="pt-4 font-light">
                  {new Date().toDateString()}
                </div>
              </div>
            </div>

            {/*Created Date Card*/}
            <div
              className="          
            flex 
            flex-col 
            items-center 
            w-[10em] 
            bg-green-100 
            rounded-md 
            border-2 
            border-green-400
            mb-4"
            >
              <div className="text-md font-semibold">Created Date</div>
              <div>
                <div className="pt-4 font-light">
                  {new Date().toDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemDetails;
