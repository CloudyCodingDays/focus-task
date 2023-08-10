import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import pic from "@/dishes.jpg";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Task } from "@/types/Task";
import TaskItem from "@/components/TaskItem";

interface ActiveTaskDisplayProps {
  task: Task;
}

const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({ task }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleUnassign: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "unassign", user?.id);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    router.refresh();
  };

  const HandleComplete: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "complete", user?.id);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    window.location.reload();
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
