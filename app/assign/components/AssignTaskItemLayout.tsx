import { DateFormatDisplay } from "@/components/DateFormatDisplay";
import { CalculateDayDifference } from "@/components/task_functions/CalculateDayDifference";
import { CalculateDueDateStyle } from "@/components/task_functions/CalculateDueDateStyle";
import { CalculatePriorityIconStyle } from "@/components/task_functions/CalculatePriorityIconStyle";
import { Task } from "@/types/Task";
import { addDays } from "date-fns";
import { AlertCircle, CalendarClock, Repeat } from "lucide-react";

interface TaskItemProps {
  task: Task;
}

const AssignTaskItemLayout: React.FC<TaskItemProps> = ({ task }) => {
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
            <div className="flex text-sm text-gray-700 font-semibold min-w-fit">
              <div className="">
                {name.length > 30 ? name.substring(0, 30) + "..." : name}
              </div>

              {priority === "High" ? (
                <div className="ml-2">
                  <AlertCircle size={20} color="red" />
                </div>
              ) : (
                <div></div>
              )}
              {task.is_recurring ? (
                <div className="ml-2">
                  <Repeat size={20} />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="ml-auto mr-2 text-xs">
              <div className="pl-2">{priority} Priority</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTaskItemLayout;
