"use client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";

import { useUserInfo } from "@/hooks/useUserInfo";
import { FormSubmit } from "./HandleSubmitCRUD";
import TaskEdittableFormLayout from "@/components/TaskEdittableFormLayout";

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
    await FormSubmit(e, "add", user?.id);

    queryClient.resetQueries("Tasks");

    HandleBack();
    router.refresh();
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div>
      <form method="post" onSubmit={HandleSubmit}>
        <TaskEdittableFormLayout isEdit={false} onBack={HandleBack} />
      </form>
    </div>
  );
};

export default AddForm;
