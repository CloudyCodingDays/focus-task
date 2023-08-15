import { Task } from "@/types/Task";

interface TaskItemProps {
  task: Task;
}

const TaskItemLayout: React.FC<TaskItemProps> = ({ task }) => {
  const { id, description, name, priority, due_date } = task;
  //date formatting
  const date1 = new Date().getTime();
  const dueDateAsDate = new Date(due_date).getTime() + 1000 * 3600 * 24;
  const diffDays = Math.ceil((dueDateAsDate - date1) / (1000 * 3600 * 24) - 1);

  //Styling Due Date
  let dueDateStyle = "";
  if (diffDays > 3) {
    dueDateStyle = "text-gray-700 text-sm font-light";
  } else if (diffDays < 3 && diffDays > 0) {
    dueDateStyle = "text-yellow-400 text-sm";
  } else if (diffDays <= 0) {
    dueDateStyle = "text-red-400 text-sm font-semibold";
  }

  //Styling Priority
  let MarkRed = false;
  let priorityStyle = "text-sm font-light";
  if (priority.toLocaleLowerCase() === "high" && diffDays <= 1) {
    MarkRed = true;
    priorityStyle = "text-red-400 text-sm font-semibold";
  } else if (priority.toLocaleLowerCase() === "medium" && diffDays <= 1) {
    priorityStyle = "text-yellow-400 text-sm";
  } else if (priority.toLocaleLowerCase() === "low" && diffDays <= 1) {
    priorityStyle = "text-green-400 text-sm font-light";
  }
  return (
    <div key={id} className="rounded-lg">
      <div className={MarkRed ? "top-to-bottom py-4" : "py-4"}>
        <div className="text-md px-4 text-start font-semibold">{name}</div>
        <div className="text-sm mt-2 mb-4 px-4 font-light text-gray-700 text-start">
          <p className="break-words">{description}</p>
        </div>
        <div className="flex flex-row justify-between px-4">
          <div className={dueDateStyle}>
            Due: {due_date.toString()} {" ("}
            {diffDays < 0 ? "Over Due" : "in " + diffDays + " Days"})
          </div>
          <div className={priorityStyle}> Priority: {priority}</div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemLayout;
