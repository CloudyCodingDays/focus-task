"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Dispatch, SetStateAction } from "react";
import TaskItemEdittableFormLayout from "./TaskItemEdittableFormLayout";
import { useQueryClient } from "react-query";

import { useUserInfo } from "@/hooks/useUserInfo";


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

    FormSubmit(e, "add", user?.id);


    queryClient.invalidateQueries({ queryKey: ["Tasks"] });

    HandleBack();
    router.refresh();
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div>
      <form method="post" onSubmit={HandleSubmit}>
        <TaskItemEdittableFormLayout isEdit={false} onBack={HandleBack} />
      </form>
    </div>
  );
};

export default AddForm;
