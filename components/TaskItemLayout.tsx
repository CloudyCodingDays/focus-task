import { Task } from "@/types/Task";
import {
  AlertCircle,
  CalendarClock,
  ClipboardList,
  Repeat,
} from "lucide-react";
import addDays from "date-fns/addDays";
import { DateFormatDisplay } from "./DateFormatDisplay";
import { CalculateDayDifference } from "./task_functions/CalculateDayDifference";
import { CalculateDueDateStyle } from "./task_functions/CalculateDueDateStyle";
import { CalculatePriorityIconStyle } from "./task_functions/CalculatePriorityIconStyle";

interface TaskItemProps {
  task: Task;
}

const TaskItemLayout: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name, priority, due_date } = task;

  const validatedDate = addDays(new Date(due_date), 1);
  const taskDueDateFormatted = DateFormatDisplay(validatedDate);
  const dayDifference = CalculateDayDifference(validatedDate.getTime());
  const dueDateStyle = CalculateDueDateStyle(dayDifference);
  const priorityIconStyle = CalculatePriorityIconStyle(priority, dayDifference);

  return (
    <div key={id} className="rounded-lg flex flex-row">
      <div className="flex flex-col py-2 w-full">
        <div className="flex flex-row justify-between">
          <div className="pl-2">
            <div className="flex flex-row text-sm text-start font-semibold">
              {name}
            </div>
            <div className="flex flex-row items-center text-xs pt-2">
              <CalendarClock size={20} />
              <div className={dueDateStyle}>
                {taskDueDateFormatted}
                {dayDifference < 0
                  ? " (Over Due)"
                  : "  (Due in " + dayDifference + " Days)"}
              </div>
            </div>
            <div className="flex flex-row items-center text-xs pt-2">
              <AlertCircle size={20} color={priorityIconStyle} />
              <div className="pl-2">{priority} Priority</div>
            </div>
          </div>
          <div>
            {task.is_recurring ? (
              <div className="flex flex-row items-center text-xs font-light">
                <Repeat />
                <div className="px-2">{task.recurring_type}</div>
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

export default TaskItemLayout;
