"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Task } from "@/types/Task";
import TaskItemEdittableFormLayout from "./TaskItemEdittableFormLayout";

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "edit");
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    HandleBack();
    router.refresh();
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div>
      <div>
        <form method="post" onSubmit={HandleSubmit}>
          <TaskItemEdittableFormLayout task={task} isEdit onBack={HandleBack} />
        </form>
      </div>
    </div>
  );
};

export default EditForm;
