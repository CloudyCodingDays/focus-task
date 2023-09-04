import { Task } from "@/types/Task";
import { AlertCircle, CalendarClock, Repeat } from "lucide-react";
import { CalculatePriorityStyle } from "@/components/task_functions/CalculatePriorityStyle";
import { CalculateDayDifference } from "@/components/task_functions/CalculateDayDifference";

interface ManageTaskItemLayoutProps {
  task: Task;
}

const ManageTaskItemLayout: React.FC<ManageTaskItemLayoutProps> = ({
  task,
}) => {
  const { id, name, priority, due_date } = task;

  const dayDifference = CalculateDayDifference(due_date);
  const priorityStyle = CalculatePriorityStyle(priority);

  return (
    <div key={id}>
      <div className="flex flex-col text-start pl-2">
        <div className={"text-sm font-semibold flex"}>
          {name.length > 100 ? name.substring(0, 100) + "..." : name}
          <div className={"ml-auto mr-2"}>
            <AlertCircle size={20} color={priorityStyle} />
          </div>
        </div>
        <div className="flex flex-row justify-between pt-2 px-2 text-xs w-full">
          <div className="flex">
            <CalendarClock size={20} />
            {due_date.substring(0, 10)}
          </div>
          {task.is_recurring ? (
            <div className="flex flex-row items-center text-xs font-light">
              <Repeat size={20} />
              <div className="px-2">{task.recurring_type}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageTaskItemLayout;
