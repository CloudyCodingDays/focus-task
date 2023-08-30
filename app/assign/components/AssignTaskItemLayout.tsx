import { Task } from "@/types/Task";
import { AlertCircle, Repeat } from "lucide-react";

interface TaskItemProps {
  task: Task;
}

const AssignTaskItemLayout: React.FC<TaskItemProps> = ({ task }) => {
  const { id, name, priority } = task;

  return (
    <div key={id} className="rounded-lg flex flex-row">
      <div className="flex flex-col py-2 w-full">
        <div className="flex flex-row justify-between">
          <div className="text-onMainBg flex text-sm font-semibold min-w-fit pl-2">
            {priority === "High" ? (
              <div>
                <AlertCircle size={20} color="red" />
              </div>
            ) : (
              <div></div>
            )}
            <div className="pl-2">
              {name.length > 30 ? name.substring(0, 30) + "..." : name}
            </div>
          </div>
          <div className="flex flex-row justify-end pr-2">
            {task.is_recurring ? (
              <div className="ml-2">
                <Repeat size={20} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTaskItemLayout;
