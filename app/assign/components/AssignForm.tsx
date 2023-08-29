"use client";
import { AssignFormSubmit } from "@/app/(site)/components/HandleSubmitAssign";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

interface AssignFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const AssignForm: React.FC<AssignFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await toast.promise(AssignFormSubmit(e, "assign", user?.id), {
      loading: "Assigning Task...",
      success: "Task Assigned!",
      error: "Unable to Assign Task. Please try again.",
    });

    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    router.push("/");
  };
  return (
    <div className="w-fit mx-auto">
      <form method="post" onSubmit={HandleSubmit}>
        <div>
          <input name="task" type="hidden" value={JSON.stringify(task)}></input>
        </div>
        <FormSubmitButtons submitText="Assign Task" onBack={onBack} />
      </form>
    </div>
  );
};
export default AssignForm;
