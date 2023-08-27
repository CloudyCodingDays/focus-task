"use client";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";
import { FormSubmit } from "./HandleSubmitCRUD";
import useTaskListContext from "@/hooks/useTaskListContext";
import { useUserInfo } from "@/hooks/useUserInfo";

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { showToast, setShowToast } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    const isSuccess = await FormSubmit(e, "edit", user?.id);
    if (isSuccess && setShowToast !== undefined) setShowToast(true);

    queryClient.resetQueries("Tasks");

    onBack(false);
    router.refresh();
  };

  return (
    <div>
      <form method="post" onSubmit={HandleSubmit}>
        <TaskItemDetailsLayout task={task} isEdit />
        <FormSubmitButtons submitText="Edit Task" onBack={onBack} />
      </form>
    </div>
  );
};

export default EditForm;
