import Image from "next/image";
import Routes from "@/components/Routes";
import EditIcon from "@/icons/edit.jpg";
import DeleteIcon from "@/icons/delete.png";
import ViewIcon from "@/icons/view.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import DeleteForm from "@/components/CRUD/DeleteForm";
import { Task } from "@/types/Task";
import TaskItemDetails from "@/components/TaskItemDetails";
import EditForm from "@/components/CRUD/EditForm";
import ViewTask from "@/components/CRUD/ViewTask";

interface TaskItemActionsProps {
  id: string;
  task: Task;
}

const TaskItemActions: React.FC<TaskItemActionsProps> = ({ id, task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [viewOpen, setViewOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-around">
      <button>
        <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
          <DialogTrigger asChild>
            <Image
              src={DeleteIcon}
              width="30"
              height="30"
              alt="Delete Icon"
            ></Image>
          </DialogTrigger>
          <DialogContent className="">
            <div className="mt-12">
              <TaskItemDetails task={task} />
              <DeleteForm id={id} onBack={setDeleteOpen} />
            </div>
          </DialogContent>
        </Dialog>
      </button>
      <button>
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogTrigger asChild>
            <Image
              src={EditIcon}
              width="30"
              height="30"
              alt="Delete Icon"
            ></Image>
          </DialogTrigger>
          <DialogContent className="left-[50%] h-full">
            <EditForm onBack={setEditOpen} task={task} />
          </DialogContent>
        </Dialog>
      </button>
      <button>
        <Dialog open={viewOpen} onOpenChange={setViewOpen}>
          <DialogTrigger asChild>
            <Image
              src={ViewIcon}
              width="30"
              height="30"
              alt="Delete Icon"
            ></Image>
          </DialogTrigger>
          <DialogContent className="left-[50%] lg:w-[1300px]">
            <ViewTask id={id} onBack={setViewOpen} />
          </DialogContent>
        </Dialog>
      </button>
    </div>
  );
};

export default TaskItemActions;
