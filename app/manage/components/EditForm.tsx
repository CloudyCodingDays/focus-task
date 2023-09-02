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
import { SubmitHandler, useForm } from "react-hook-form";

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const HandleSubmit: SubmitHandler<FormData> = async (data) => {
    await toast.promise(FormSubmit(data, "edit", user?.id), {
      loading: "Updating Task...",
      success: "Task Updated!",
      error: "Unable to Update Task. Please try again.",
    });

    await queryClient.resetQueries("ManageTasks");
    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    onBack(false);
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleSubmit)}>
        <TaskItemDetailsLayout task={task} isEdit />
        <FormSubmitButtons submitText="Edit Task" onBack={onBack} />
      </form>
    </div>
  );
};

export default EditForm;
