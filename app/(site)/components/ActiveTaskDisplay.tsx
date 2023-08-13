import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { Task } from "@/types/Task";
import TaskItem from "@/components/TaskItem";
import { useQueryClient } from "react-query";
import { AssignFormSubmit } from "./HandleSubmitAssign";

interface ActiveTaskDisplayProps {
  task: Task;
}

const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({ task }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const HandleUnassign: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    AssignFormSubmit(e, "unassign", user?.id);

    queryClient.invalidateQueries();

    router.refresh();
  };

  const HandleComplete: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    AssignFormSubmit(e, "complete", user?.id);
  };

  return (
    <div key={task.id} className="w-full flex flex-col items-center">
      <div className="w-[30em]  bg-gray-200 rounded-lg my-4 mx-4 drop-shadow-lg">
        <TaskItem task={task} />
        <div className="flex justify-around">
          <form method="post" onSubmit={HandleUnassign}>
            <input name="id" type="hidden" value={task.id}></input>
            <input name="name" type="hidden" value={task.name}></input>
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
              mt-12
              mr-8
              rounded-lg
              py-4
              px-4
            bg-white 
            font-semibold
            text-green-500"
            >
              Unassign Task
            </button>
          </form>
          <form method="post" onSubmit={HandleComplete}>
            <input name="id" type="hidden" value={task.id}></input>
            <input name="name" type="hidden" value={task.name}></input>
            <input
              name="description"
              type="hidden"
              value={task.description}
            ></input>
            <button
              type="submit"
              className="          
              hover:bg-green-400 
              my-4
              mt-12
              mr-8
              rounded-lg
              py-4
              px-4
            bg-green-500 
            font-semibold
            text-green-300"
            >
              Complete Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActiveTaskDisplay;
