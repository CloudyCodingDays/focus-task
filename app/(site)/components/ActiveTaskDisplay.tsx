import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useQueryClient, UseQueryResult } from "react-query";
import ActiveTaskDetails from "./ActiveTaskDetails";
import { AssignFormSubmit } from "./AssignFormSubmit";
import useTaskContext from "@/hooks/useTaskContext";
import { CatPictureData } from "@/types/CatPictureData";

interface ActiveTaskDisplayProps {
  task: Task;
  catQuery: UseQueryResult<CatPictureData[], Error>;
}

const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({
  task,
  catQuery,
}) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { taskCompleted, setTaskCompleted } = useTaskContext();

  const HandleUnassign: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    await toast.promise(AssignFormSubmit(e, "unassign", user?.id), {
      loading: "Unassigning Task...",
      success: "Task Unassigned!",
      error: "Unable to Unassign Task. Please try again.",
    });

    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    router.refresh();
  };

  const HandleComplete: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    await toast.promise(AssignFormSubmit(e, "complete", user?.id), {
      loading: "Completing Task...",
      success: "Task Completed!",
      error: "Unable to Complete Task. Please try again.",
    });

    await queryClient.resetQueries("ManageTasks");
    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    if (setTaskCompleted !== undefined) {
      setTaskCompleted(true);
      catQuery.refetch();
    }

    router.refresh();
  };

  return (
    <div key={task.id} className="w-full flex flex-col items-center">
      <div className="bg-mainBg text-onMainBg lg:w-[50em] w-full rounded-lg my-4 mx-4 drop-shadow-lg">
        <ActiveTaskDetails task={task} />
        <div className="flex flex-row justify-center">
          <form method="post" onSubmit={HandleUnassign}>
            <input
              name="task"
              type="hidden"
              value={JSON.stringify(task)}
            ></input>
            <input
              name="description"
              type="hidden"
              value={task.description}
            ></input>
            <button
              type="submit"
              className="          
              hover:bg-main
              hover:text-onMainBg 
              bg-neutralBg
              text-onMainBg 
              border-2
              border-main
              rounded-lg
              my-4
              mr-8
              w-[7em]
              h-[3em]
              font-semibold"
            >
              Unassign
            </button>
          </form>
          <form method="post" onSubmit={HandleComplete}>
            <input
              name="task"
              type="hidden"
              value={JSON.stringify(task)}
            ></input>
            <button
              type="submit"
              className="          
              hover:bg-inverted
              hover:text-onInvertedBg 
              bg-main
              text-onMainBg 
              my-4
              mr-8
              rounded-lg
              w-[7em]
              h-[3em]
            font-semibold"
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActiveTaskDisplay;
