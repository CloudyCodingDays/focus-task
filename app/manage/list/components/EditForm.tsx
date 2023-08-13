"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import { Dispatch, SetStateAction } from "react";
import { Task } from "@/types/Task";
import TaskItemEdittableFormLayout from "../../../../components/TaskItemEdittableFormLayout";
import { useQueryClient } from "react-query";

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "edit");

    queryClient.invalidateQueries({ queryKey: ["Tasks"] });

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
