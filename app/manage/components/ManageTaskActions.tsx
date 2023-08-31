import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { FileEdit, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "@/components/GetThemeStyle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ManageTaskActionsProps {
  task: Task;
}

const ManageTaskActions: React.FC<ManageTaskActionsProps> = ({ task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const { color, setColor, mode, setMode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <div>
      {editOpen ? <EditForm task={task} onBack={setEditOpen} /> : <div></div>}
      {!deleteOpen && !editOpen ? (
        <div>
          <TaskItemDetailsLayout task={task} isEdit={false} />
          <div className="text-center mt-4">
            <DeleteForm task={task} onBack={setDeleteOpen} />
            <button
              onClick={() => {
                setEditOpen(true);
              }}
              className="              
              hover:bg-inverted
              hover:text-onInvertedBg 
              bg-main
              text-onMainBg 
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
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ManageTaskActions;
