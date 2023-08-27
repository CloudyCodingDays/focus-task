import AssignForm from "@/app/assign/components/AssignForm";
import DeleteForm from "@/app/manage/components/DeleteForm";
import EditForm from "@/app/manage/components/EditForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { Eye, FileEdit, Trash2 } from "lucide-react";
import { useState } from "react";
import TaskItemDetailsLayout from "./TaskItemDetailsLayout";
import ManageTaskItemLayout from "../app/manage/components/ManageTaskItemLayout";

interface TaskItemActionsProps {
  task: Task;
}
const TaskItemActions: React.FC<TaskItemActionsProps> = ({ task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [viewOpen, setViewOpen] = useState<boolean>(false);
  const [TaskOpen, setTaskOpen] = useState<boolean>(false);

  return (
    <div>
      <div>
        <Dialog open={TaskOpen} onOpenChange={setTaskOpen}>
          <DialogTrigger asChild>
            <button type="button" className="w-full">
              <ManageTaskItemLayout task={task} />
            </button>
          </DialogTrigger>
          <DialogContent className="left-[50%] lg:w-[1300px]">
            <div className="py-12 px-2">
              <TaskItemDetailsLayout task={task} isEdit={false} />
              <div className="flex flex-row justify-center">
                <button className="hover:bg-red-100">
                  <div className="flex flex-row w-fit mx-4 px-2 items-baseline">
                    <Trash2 size={16} /> Delete
                  </div>
                </button>
                <button className="hover:bg-green-100">
                  <div className="flex flex-row w-fit mx-4 px-2">
                    <FileEdit size={16} /> Edit
                  </div>
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TaskItemActions;
