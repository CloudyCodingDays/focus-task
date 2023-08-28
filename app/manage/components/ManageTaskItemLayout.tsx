import { Task } from "@/types/Task";
import {
  AlertCircle,
  CalendarClock,
  ClipboardList,
  FileEdit,
  Repeat,
  Trash2,
} from "lucide-react";
import addDays from "date-fns/addDays";
import { DateFormatDisplay } from "../../../components/DateFormatDisplay";
import { CalculateDayDifference } from "../../../components/task_functions/CalculateDayDifference";
import { CalculateDueDateStyle } from "../../../components/task_functions/CalculateDueDateStyle";
import { CalculatePriorityIconStyle } from "../../../components/task_functions/CalculatePriorityIconStyle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";

interface ManageTaskItemLayoutProps {
  task: Task;
}

const ManageTaskItemLayout: React.FC<ManageTaskItemLayoutProps> = ({
  task,
}) => {
  const { id, description, name, priority, due_date } = task;

  const validatedDate = addDays(new Date(due_date), 1);
  const taskDueDateFormatted = DateFormatDisplay(validatedDate);
  const dayDifference = CalculateDayDifference(validatedDate.getTime());
  const dueDateStyle = CalculateDueDateStyle(dayDifference);
  const priorityIconStyle = CalculatePriorityIconStyle(priority, dayDifference);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);

  return (
    <div key={id} className="rounded-lg flex flex-row">
      <div className="flex flex-col py-2 w-full">
        <div className="flex flex-row justify-between">
          <div className="pl-2">
            <div className="flex flex-row text-sm text-start text-gray-600 font-semibold">
              <div className="">
                {name.length > 30 ? name.substring(0, 30) + "..." : name}
              </div>
              {task.is_recurring ? (
                <div className="flex flex-row items-center text-xs font-light ml-2">
                  <Repeat size={20} />
                  <div className="px-2">{task.recurring_type}</div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex flex-row items-center text-xs pt-4">
              <CalendarClock size={20} />
              <div className={dueDateStyle}>
                {taskDueDateFormatted}
                {dayDifference < 0
                  ? " (Over Due)"
                  : "  (Due in " + dayDifference + " Days)"}
              </div>
            </div>
            <div className="flex flex-row items-center text-xs pt-2">
              <AlertCircle size={20} />
              <div className="pl-2">{priority} Priority</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogTrigger asChild>
                <button className="hover:bg-green-100">
                  <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
                    <FileEdit size={16} /> Edit
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <EditForm task={task} onBack={setEditOpen} />
              </DialogContent>
            </Dialog>

            <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
              <DialogTrigger asChild>
                <button className="hover:bg-red-100">
                  <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
                    <Trash2 size={16} /> Delete
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DeleteForm task={task} onBack={setDeleteOpen} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTaskItemLayout;
