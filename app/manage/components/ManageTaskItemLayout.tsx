import { Task } from "@/types/Task";
import { AlertCircle, CalendarClock, Repeat } from "lucide-react";
import { CalculatePriorityStyle } from "@/components/task_functions/CalculatePriorityStyle";
import format from "date-fns/format";
import React from "react";
import { addDays } from "date-fns";

interface ManageTaskItemLayoutProps {
  task: Task;
}

const ManageTaskItemLayout: React.FC<ManageTaskItemLayoutProps> = ({
  task,
}) => {
  const { id, name, priority } = task;
  const priorityStyle = CalculatePriorityStyle(priority);

  const convertedDueDate = new Date(task.due_date);
  const dueDate = addDays(convertedDueDate, 1);

  return (
    <div key={id}>
      <div className="flex flex-col text-start pl-2">
        <div className={"text-sm font-semibold flex"}>
          {name.length > 100 ? name.substring(0, 100) + "..." : name}
          <div className={"mx-2"}>
            <AlertCircle size={20} color={priorityStyle} />
          </div>
        </div>
        <div className="flex flex-row py-2 px-2 text-xs w-full">
          <div className="flex flex-row items-center">
            <CalendarClock size={20} />
            <div className={"px-2"}>{format(dueDate, "PP")}</div>
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
