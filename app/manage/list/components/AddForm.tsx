"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Dispatch, SetStateAction } from "react";
import TaskItemEdittableFormLayout from "./TaskItemEdittableFormLayout";

interface AddFormProps {
  onBack: Dispatch<SetStateAction<boolean>>;
}

const AddForm: React.FC<AddFormProps> = ({ onBack }) => {
  const router = useRouter();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "add");

    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
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
