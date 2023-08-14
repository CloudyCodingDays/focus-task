"use client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Task } from "@/types/Task";
import { useQueryClient } from "react-query";
import { FormSubmit } from "./HandleSubmitCRUD";
import TaskFormLayout from "@/components/TaskFormLayout";
import FormSubmitButtons from "@/components/FormSubmitButtons";

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await FormSubmit(e, "edit");

    queryClient.resetQueries("Tasks");

    onBack(false);
    router.refresh();
  };

  return (
    <div>
      <div>
        <form method="post" onSubmit={HandleSubmit}>
          <TaskFormLayout task={task} isEdit />
          <FormSubmitButtons submitText="Edit Task" onBack={onBack} />
        </form>
      </div>
    </div>
  );
};

export default EditForm;
