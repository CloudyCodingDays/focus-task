import { Task } from "@/types/Task";

interface TaskItemProps {
  task: Task;
}

const TaskItemLayout: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name, priority, due_date } = task;
  //date formatting
  const currentDate = new Date().getTime();
  const dueDateAsDate = new Date(due_date).getTime() + 1000 * 3600 * 24;
  const diffDays = Math.ceil(
    (dueDateAsDate - currentDate) / (1000 * 3600 * 24) - 1
  );

  //Styling Due Date
  let dueDateStyle = "";
  if (diffDays > 7) {
    dueDateStyle = "text-gray-400 text-xs font-extralight";
  } else if (diffDays < 7 && diffDays > 0) {
    dueDateStyle = "text-gray-500 text-xs";
  } else if (diffDays <= 0) {
    dueDateStyle = "text-gray-500 text-xs font-semibold";
  }

  //Styling Priority
  let MarkRed = false;
  let priorityStyle = "text-xs font-light";
  if (priority.toLocaleLowerCase() === "high" && diffDays <= 1) {
    MarkRed = true;
    priorityStyle = "text-red-400 text-xs font-semibold";
  } else if (priority.toLocaleLowerCase() === "medium" && diffDays <= 1) {
    priorityStyle = "text-orange-400 text-xs";
  } else if (priority.toLocaleLowerCase() === "low" && diffDays <= 1) {
    priorityStyle = "text-green-400 text-xs font-light";
  }
  return (
    <div key={id} className="rounded-lg">
      <div className={MarkRed ? "top-to-bottom" : ""}>
        <div className="flex flex-row justify-between px-4 pt-2">
          <div className="text-sm text-start font-semibold underline">
            {name}
          </div>
          <div className={priorityStyle}>{priority} Priority</div>
        </div>

        <div className="text-xs mt-2 mb-4 px-4 font-light text-gray-400 text-start w-4/5">
          <p className="break-words">{description}</p>
        </div>
        <div className="flex flex-row justify-between px-4 py-2">
          <div className="text-xs font-extralight">
            {task.is_recurring ? "Recurring task" : ""}
          </div>
          <div className={dueDateStyle}>
            {due_date.toString()}
            {diffDays < 0 ? " (Over Due)" : "  (Due in " + diffDays + " Days)"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemLayout;
