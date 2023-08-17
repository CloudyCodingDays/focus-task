import { Task } from "@/types/Task";
import {
  AlertCircle,
  CalendarClock,
  ClipboardList,
  Repeat,
} from "lucide-react";

interface TaskItemProps {
  task: Task;
}

const TaskItemLayout: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name, priority, due_date } = task;
  //date formatting
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date().getTime();
  const dueDateAsTime = new Date(due_date).getTime() + 1000 * 3600 * 24;
  const dueDate = new Date(due_date);
  const dueDateDisplay =
    dueDate.getDate() +
    "-" +
    monthNames[dueDate.getMonth()] +
    "-" +
    dueDate.getFullYear();
  const diffDays = Math.ceil(
    (dueDateAsTime - currentDate) / (1000 * 3600 * 24) - 1
  );

  //Styling Due Date
  let dueDateStyle = "";
  if (diffDays > 7) {
    dueDateStyle = "text-gray-400 text-xs font-extralight pl-2";
  } else if (diffDays < 7 && diffDays > 0) {
    dueDateStyle = "text-gray-500 text-xs pl-2";
  } else if (diffDays <= 0) {
    dueDateStyle = "text-gray-500 text-xs font-semibold pl-2";
  }

  //Styling Priority
  let priorityStyle = "text-xs font-light";
  let priorityIconStyle = "";
  if (priority.toLocaleLowerCase() === "high" && diffDays <= 1) {
    priorityStyle = "text-red-400 text-xs font-semibold";
    priorityIconStyle = "red";
  } else if (priority.toLocaleLowerCase() === "medium" && diffDays <= 1) {
    priorityStyle = "text-orange-400 text-xs";
  } else if (priority.toLocaleLowerCase() === "low" && diffDays <= 1) {
    priorityStyle = "text-green-400 text-xs font-light";
  }

  return (
    <div key={id} className="rounded-lg flex flex-row">
      <div className="flex flex-col py-2 w-full">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row text-sm text-start font-semibold">
              {name}
            </div>
            <div className="flex flex-row items-center text-xs pt-4">
              <CalendarClock />
              <div className={dueDateStyle}>
                {dueDateDisplay}
                {diffDays < 0
                  ? " (Over Due)"
                  : "  (Due in " + diffDays + " Days)"}
              </div>
            </div>
          </div>
          <div>
            {task.is_recurring ? (
              <div className="flex flex-row items-center text-xs font-light pt-4">
                <Repeat />
                <div className="pl-2">Repeats {task.recurring_type}</div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex flex-row items-center text-xs">
              <AlertCircle size={20} color={priorityIconStyle} />
              <div className="pl-2">{priority} Priority</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemLayout;
