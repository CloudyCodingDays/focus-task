"use client";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";
import { FormSubmit } from "./HandleSubmitCRUD";
import { useUserInfo } from "@/hooks/useUserInfo";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { Task } from "@/types/Task";
import toast from "react-hot-toast";

interface DeleteFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ task, onBack }) => {
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

    queryClient.resetQueries("ManageTasks");

    onBack(false);
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
