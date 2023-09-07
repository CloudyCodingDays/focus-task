import AddTaskButton from "@/components/AddTaskButton";
import { Separator } from "@/components/ui_components/separator";
import { Task } from "@/types/Task";
import AssignTaskItem from "./AssignTaskItem";
import { format } from "date-fns";
import { FormatDateRemoveTime } from "@/components/task_functions/FormatDateRemoveTime";

const AssignTaskListItems = ({
  currentDate,
  taskList,
}: {
  currentDate: Date | undefined;
  taskList: Task[];
}) => {
  const validatedDate = currentDate ? currentDate : new Date();
  let currentTasks = [] as Task[];

  if (taskList.length > 0) {
    currentTasks = taskList.filter((task) => {
      const due = FormatDateRemoveTime(task.due_date);
      due.setDate(due.getDate() + 1); //Add one day to bring it back to current day after date conversion
      validatedDate.setHours(0, 0, 0);
      validatedDate.setMilliseconds(0);

      return due.getTime() === validatedDate.getTime();
    });
  }

  return (
    <div>
      <div className="text-sm px-2 py-2">
        <div className="flex flex-row justify-between items-end">
          <div className="text-neutral font-semibold text-md">
            {currentTasks.length} Task
            {currentTasks.length < 2 ? "" : "s"} due for{" "}
            {format(validatedDate, "PPP")}
          </div>
          <div>
            <AddTaskButton />
          </div>
        </div>
      </div>
      <Separator className="pt-0.25 bg-main lg:mb-4 mb-8" />
      <div className="px-2">
        {currentTasks.map((item) => (
          <div key={item.id}>
            <AssignTaskItem task={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AssignTaskListItems;
