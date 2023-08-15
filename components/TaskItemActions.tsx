import AssignForm from "@/app/assign/components/AssignForm";
import DeleteForm from "@/app/manage/components/DeleteForm";
import EditForm from "@/app/manage/components/EditForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { Eye, FileEdit, Trash2 } from "lucide-react";
import { useState } from "react";
import TaskItemDetailsLayout from "./TaskItemDetailsLayout";
import TaskItemLayout from "./TaskItemLayout";

interface TaskItemActionsProps {
  id: string;
  task: Task;
  showTaskActions: boolean;
}
const TaskItemActions: React.FC<TaskItemActionsProps> = ({
  id,
  task,
  showTaskActions,
}) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [viewOpen, setViewOpen] = useState<boolean>(false);
  const [assignOpen, setAssignOpen] = useState<boolean>(false);

  return (
    <div>
      {showTaskActions ? (
        <div className="grid grid-cols-3 border-t-2">
          <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
            <DialogTrigger asChild>
              <button className="hover:bg-red-100 py-2 border-r-2">
                <Trash2 size={24} className="w-full mx-auto" />
              </button>
            </DialogTrigger>
            <DialogContent className="left-[50%] lg:w-[760px] h-fit">
              <TaskItemDetailsLayout task={task} isEdit={false} />
              <DeleteForm id={id} onBack={setDeleteOpen} />
            </DialogContent>
          </Dialog>

          <Dialog open={viewOpen} onOpenChange={setViewOpen}>
            <DialogTrigger asChild>
              <button className="hover:bg-green-100 py-2 border-r-2">
                <Eye size={24} className="w-full mx-auto" />
              </button>
            </DialogTrigger>
            <DialogContent className="left-[50%] lg:w-[760px] h-fit">
              <TaskItemDetailsLayout task={task} isEdit={false} />
            </DialogContent>
          </Dialog>

          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger asChild>
              <button className="hover:bg-green-100 py-2">
                <FileEdit size={24} className="w-full mx-auto" />
              </button>
            </DialogTrigger>
            <DialogContent className="left-[50%] lg:w-[760px] h-fit">
              <EditForm task={task} onBack={setEditOpen} />
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
          <DialogTrigger asChild>
            <button type="button" className="w-full">
              <TaskItemLayout task={task} />
            </button>
          </DialogTrigger>
          <DialogContent className="left-[50%] lg:w-[1300px]">
            <div className="">
              <TaskItemDetailsLayout task={task} isEdit={false} />
              <AssignForm id={task.id} onBack={setAssignOpen} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TaskItemActions;
