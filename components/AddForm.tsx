"use client";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";
import { FormSubmit } from "../app/manage/components/HandleSubmitCRUD";
import FormSubmitButtons from "./FormSubmitButtons";
import toast from "react-hot-toast";

interface AddFormProps {
  onBack: Dispatch<SetStateAction<boolean>>;
}

const AddForm: React.FC<AddFormProps> = ({ onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();

  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await toast.promise(FormSubmit(e, "add", user?.id), {
      loading: "Creating Task...",
      success: "Task Created!",
      error: "Unable to create Task. Please try again.",
    });

    queryClient.resetQueries("Tasks");

    onBack(false);
    router.refresh();
  };

  return (
    <div>
      <form method="post" onSubmit={HandleSubmit}>
        <TaskItemDetailsLayout isEdit />
        <FormSubmitButtons
          cancelText="Cancel"
          submitText="Add Task"
          onBack={onBack}
        />
      </form>
    </div>
  );
};

export default AddForm;
