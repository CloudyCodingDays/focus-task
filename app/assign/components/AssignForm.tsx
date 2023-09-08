"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { useQueryClient } from "react-query";
import { AlertCircle, CalendarClock, Dot, Repeat } from "lucide-react";
import toast from "react-hot-toast";
import AssignTaskQuery from "@/components/CRUD_queries/AssignTaskQuery";
import format from "date-fns/format";
import { addDays } from "date-fns";

interface AssignFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const AssignForm: React.FC<AssignFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  let convertedDueDate = new Date(task.due_date);
  const dueDate = addDays(convertedDueDate, 1);

  const HandleAssign: MouseEventHandler<HTMLButtonElement> = async () => {
    if (user) {
      await toast.promise(AssignTaskQuery(task.id, user?.id), {
        loading: "Assigning Task...",
        success: "Task Assigned!",
        error: "Unable to Assign Task. Please try again.",
      });

      await queryClient.resetQueries("ActiveTask");
      await queryClient.resetQueries("TaskCount");

      router.push("/");
    }
  };
  return (
    <div className="w-full mx-auto">
      <div className={"text-1xl font-semibold"}>{task?.name}</div>

      <div className={"text-sm font-light pl-4 pt-2 flex items-center"}>
        <Dot />
        <div className={"pl-2 break-words"}>{task?.description}</div>
      </div>

      <div className={"pl-4 flex items-center pt-2 font-light"}>
        <AlertCircle size={20} />
        <div className={"pl-2 text-sm"}>{task?.priority} Priority</div>
      </div>

      {task?.is_recurring ? (
        <div className="pl-4 flex items-center pt-2 font-light">
          <Repeat size={20} />
          <div className={"pl-2 text-sm"}>{task?.recurring_type}</div>
        </div>
      ) : (
        <></>
      )}
      <div className="pl-4 flex items-center pt-2 font-light">
        <CalendarClock size={20} />
        <div className={"pl-2 text-sm"}> {format(dueDate, "PP")}</div>
      </div>
      <div className={"text-center"}>
        <button
          id={"closeAssign"}
          aria-label="Close Assign Form Button"
          onClick={() => {
            onBack(false);
          }}
          className="
              hover:bg-main
              hover:text-onMainBg
              bg-neutralBg
              text-onNeutralBg
              border-2
              border-main
              rounded-lg
              my-4
              mr-8
              w-[7em]
              h-[3em]
              font-semibold"
        >
          Close
        </button>
        <button
          id={"AssignTask"}
          aria-label="Assign Task Form Button"
          onClick={HandleAssign}
          className="
              hover:bg-inverted
              hover:text-onInvertedBg
              bg-main
              text-onMainBg
              rounded-lg
              w-[7em]
              h-[3em]
            font-semibold"
        >
          Assign Task
        </button>
      </div>
    </div>
  );
};
export default AssignForm;
