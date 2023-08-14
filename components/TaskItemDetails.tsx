import { OldTaskType, Task, TaskFields } from "@/types/Task";
import Image from "next/image";
import pic from "@/dishes.jpg";

interface TaskItemDetailsProps {
  task: Task;
}
const TaskItemDetails: React.FC<TaskItemDetailsProps> = ({ task }) => {
  return (
    <div className="h-fit">
      <div className="flex flex-row justify-center">
        <Image src={pic} width="650" height="300" alt="Task item Icon"></Image>
      </div>
      <div className="text-left mx-auto w-11/12 bg-gray-100 rounded-lg py-4 px-4">
        <div className="mb-4">
          <div>Task Name</div>
          <input
            name="name"
            className="border-2 w-full"
            placeholder={task.name}
            disabled
          ></input>
        </div>

        <div className="mb-4">
          <div>Task Description</div>
          <input
            name="description"
            className="border-2 w-full"
            placeholder={task.description}
            disabled
          ></input>
        </div>

        <div className="mb-4">
          Is this a Recurring Task?
          <input
            name="is_recurring"
            type="checkbox"
            className="ml-4 scale-125"
            defaultChecked={task.is_recurring === "true"}
            disabled
          ></input>
        </div>

        <div className="mb-4">
          <div>Recurring Type</div>
          <input
            name="recurring_type"
            className="border-2 w-full"
            placeholder={task.recurring_type}
            disabled
          ></input>
        </div>

        <div className="mb-4">
          <div>Task Priority</div>
          <input
            name="priority"
            className="border-2 w-full"
            placeholder={task.priority}
            disabled
          ></input>
        </div>

        <div className="">
          <div>Task Due Date</div>
          <input
            name="due_date"
            type="text"
            className="border-2 w-full"
            placeholder={task.due_date}
            disabled
          ></input>
        </div>
      </div>
    </div>
  );
};

export default TaskItemDetails;
