import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DeleteForm from "./DeleteForm";
import { Task } from "@/types/Task";
import { Dispatch, SetStateAction, useState } from "react";
import { FileEdit, Trash2 } from "lucide-react";
import EditForm from "./EditForm";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";

interface ManageTaskActionsProps {
  task: Task;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ManageTaskActions: React.FC<ManageTaskActionsProps> = ({
  task,
  setOpen,
}) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  return (
    <div>
      <TaskItemDetailsLayout task={task} isEdit={false} />
      <div className="text-center mt-4">
        <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
          <DialogTrigger asChild>
            <button
              className="              
              hover:bg-red-200
              hover:text-red-500
              bg-red-500
              text-red-100
              rounded-lg               
              w-[7em]
              h-[3em]
              drop-shadow-md
              mx-4"
            >
              <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
                <Trash2 size={16} /> Delete
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DeleteForm task={task} onBack={setDeleteOpen} onClose={setOpen} />
          </DialogContent>
        </Dialog>
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogTrigger asChild>
            <button
              className="              
              hover:bg-green-200
              hover:text-green-500 
              bg-green-500 
              text-green-100
                rounded-lg               
                w-[7em]
                h-[3em]
                drop-shadow-md
                mx-4"
            >
              <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
                <FileEdit size={16} /> Edit
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-gray-200">
            <EditForm task={task} onBack={setEditOpen} onClose={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ManageTaskActions;
