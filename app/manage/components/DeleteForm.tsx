"use client";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { FormSubmit } from "./HandleSubmitCRUD";

interface DeleteFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ task, onBack, onClose }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await toast.promise(FormSubmit(e, "delete", user?.id), {
      loading: "Deleting Task...",
      success: "Task Deleted!",
      error: "Unable to Delete Task. Please try again.",
    });

    await queryClient.resetQueries("ManageTasks");
    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    onBack(false);
    onClose(false);
    router.refresh();
  };

  return (
    <div>
      <div className="text-center">
        <form method="post" onSubmit={HandleSubmit}>
          <TaskItemDetailsLayout task={task} isEdit={false} />
          <FormSubmitButtons
            submitText="Delete Task"
            onBack={onBack}
            onClose={onClose}
            isDelete
          />
          <div>
            <input name="id" type="hidden" value={task.id}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteForm;
