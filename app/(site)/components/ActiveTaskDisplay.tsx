import TaskItem from "@/components/TaskItemLayout";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";
import { AssignFormSubmit } from "./HandleSubmitAssign";

interface ActiveTaskDisplayProps {
  task: Task;
}

const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({ task }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const HandleUnassign: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await AssignFormSubmit(e, "unassign", user?.id);

    queryClient.resetQueries("ActiveTask");

    router.refresh();
  };

  const HandleComplete: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await AssignFormSubmit(e, "complete", user?.id);

    queryClient.resetQueries("ActiveTask");

    router.refresh();
  };

  return (
    <div key={task.id} className="w-full flex flex-col items-center">
      <div className="w-[30em]  bg-gray-200 rounded-lg my-4 mx-4 drop-shadow-lg">
        <TaskItem task={task} />
        <div className="flex justify-around">
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
              hover:bg-green-500 
              hover:text-green-700 
              my-4
              mr-8
              rounded-lg
              w-[7em]
              h-[3em]
            bg-white 
            font-semibold
            text-green-500"
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
              hover:bg-green-400 
              my-4
              mr-8
              rounded-lg
              w-[7em]
              h-[3em]
            bg-green-500 
            font-semibold
            text-green-300"
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
