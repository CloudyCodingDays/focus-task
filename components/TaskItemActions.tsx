import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Task } from "@/types/Task";
import DeleteForm from "@/app/manage/components/DeleteForm";
import { Eye, FileEdit, Trash2 } from "lucide-react";
import EditForm from "@/app/manage/components/EditForm";
import TaskFormLayout from "./TaskFormLayout";

interface TaskItemActionsProps {
  id: string;
  task: Task;
}
const TaskItemActions: React.FC<TaskItemActionsProps> = ({ id, task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [viewOpen, setViewOpen] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-3 border-t-2 mt-8">
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogTrigger asChild>
          <button className="hover:bg-green-100 py-2 border-r-2">
            <Trash2 color="red" size={24} className="w-full mx-auto" />
          </button>
        </DialogTrigger>
        <DialogContent className="left-[50%] w-[760px] h-fit">
          <TaskFormLayout task={task} isEdit={false} onBack={setDeleteOpen} />
          <DeleteForm id={id} onBack={setDeleteOpen} />
        </DialogContent>
      </Dialog>
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogTrigger asChild>
          <button className="hover:bg-green-100 py-2 border-r-2">
            <Eye size={24} className="w-full mx-auto" />
          </button>
        </DialogTrigger>
        <DialogContent className="left-[50%] w-[760px] h-fit">
          <TaskFormLayout task={task} isEdit={false} onBack={setViewOpen} />
        </DialogContent>
      </Dialog>
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogTrigger asChild>
          <button className="hover:bg-green-100 py-2">
            <FileEdit size={24} className="w-full mx-auto" />
          </button>
        </DialogTrigger>
        <DialogContent className="left-[50%] w-[760px] h-fit">
          <EditForm task={task} onBack={setViewOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskItemActions;
