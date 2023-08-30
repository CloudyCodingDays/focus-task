import { Task } from "@/types/Task";
import { AlertCircle, CalendarClock, Repeat } from "lucide-react";
import { CalculatePriorityStyle } from "@/components/task_functions/CalculatePriorityStyle";
import { CalculateDueDateStyle } from "@/components/task_functions/CalculateDueDateStyle";
import { CalculateDayDifference } from "@/components/task_functions/CalculateDayDifference";

interface ManageTaskItemLayoutProps {
  task: Task;
}

const ManageTaskItemLayout: React.FC<ManageTaskItemLayoutProps> = ({
  task,
}) => {
  const { id, description, name, priority, due_date } = task;

  const dayDifference = CalculateDayDifference(due_date);
  const dueDateStyle = CalculateDueDateStyle(dayDifference);
  const priorityStyle = CalculatePriorityStyle(priority);

  return (
    <div key={id}>
      <div className="flex flex-row text-sm justify-between text-gray-600 font-semibold">
        <div className="flex flex-col w-2/3 text-start pl-2">
          {name.length > 100 ? name.substring(0, 100) + "..." : name}
          <div className="pt-2">
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

        <div className="flex flex-row w-1/3 justify-between">
          <div className="flex flex-col items-center text-xs py-2 w-1/2">
            <CalendarClock size={20} color={dueDateStyle} />
            <div>{due_date.substring(0, 10)}</div>
          </div>
          <div className="flex flex-col items-center text-xs py-2 w-1/2">
            <AlertCircle size={20} color={priorityStyle} />
            <div className="pl-2">
              {priority} <span className="lg:block hidden">Priority</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTaskItemLayout;
