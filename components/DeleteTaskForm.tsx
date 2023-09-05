"use client";

import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
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
} from "@/components/ui_components/alert-dialog";
import DeleteTaskQuery from "@/components/CRUD_queries/DeleteTaskQuery";
import { Trash2 } from "lucide-react";
import { GetThemeStyle } from "@/components/GetThemeStyle";
import useThemeContext from "@/hooks/useThemeContext";

interface DeleteFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const DeleteTaskForm: React.FC<DeleteFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { color, mode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  const HandleDelete = async () => {
    if (user) {
      await toast.promise(DeleteTaskQuery(task.id, user?.id), {
        loading: "Deleting Task...",
        success: "Task Deleted!",
        error: "Unable to Delete Task. Please try again.",
      });

      await queryClient.resetQueries("ManageTasks");
      await queryClient.resetQueries("ActiveTask");
      await queryClient.resetQueries("TaskCount");

      onBack(false);
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
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
      </AlertDialogTrigger>
      <AlertDialogContent className={"bg-mainBg text-onMainBg " + themeStyle}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the Task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="
            hover:bg-main
            hover:text-onMainBg 
            bg-neutralBg
            text-onMainBg 
            border-2
            border-main
            rounded-lg
            w-[7em]
            h-[3em]
            ml-4 
            mx-4"
          >
            Close
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={HandleDelete}
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
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTaskForm;
