import Image from "next/image";
import EditIcon from "@/icons/edit.jpg";
import DeleteIcon from "@/icons/delete.png";
import ViewIcon from "@/icons/view.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import { Task } from "@/types/Task";
import TaskItemDetails from "@/components/TaskFormLayout";
import ViewTask from "@/components/ViewTask";
import DeleteForm from "@/app/manage/components/DeleteForm";
import EditForm from "@/app/manage/components/EditForm";

interface TaskItemActionsProps {
  id: string;
  task: Task;
}

const TaskItemActions: React.FC<TaskItemActionsProps> = ({ id, task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [viewOpen, setViewOpen] = useState<boolean>(false);

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="flex flex-row justify-around">
      <h1>Render Count: {count.current}</h1>
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
          <DialogContent className="left-[50%] w-[760px] h-fit">
            <TaskItemDetails task={task} />
            <DeleteForm id={id} onBack={setDeleteOpen} />
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
          <DialogContent className="left-[50%] w-[760px] h-fit">
            <ViewTask id={id} onBack={setViewOpen} />
          </DialogContent>
        </Dialog>
      </button>
    </div>
  );
};

export default TaskItemActions;
