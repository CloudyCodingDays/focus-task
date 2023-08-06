import { Button } from "@/components/ui/button";
import { Task } from "@/types/supabase";
import Image from "next/image";
import Link from "next/link";
import pic from "@/dishes.jpg";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import useTaskListContext from "@/hooks/useTaskListContext";

interface ActiveTaskDisplayProps {
  task: Task;
}

const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({ task }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const { id, name, description } = task;

  const HandleUnassign: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    console.log(task);
    console.log(name);
    console.log(description);
    FormSubmit(e, "unassign", user?.id);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    window.location.reload();
  };

  const HandleComplete: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "complete", user?.id);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    window.location.reload();
  };

  return (
    <div key={id} className="bg-gray-300 w-[30em] rounded-lg mx-4">
      <div>
        <div className="flex flex-row mt-4 items-start">
          <div className="mr-4">
            <Image
              src={pic}
              width="75"
              height="75"
              alt="Task item Icon"
            ></Image>
          </div>
          <div className="flex-grow">
            <div>{name}</div>
            <div>Tags</div>
          </div>
        </div>
        <div className="mt-4 ml-4">{description}</div>
        <div className="flex justify-around">
          <form method="post" onSubmit={HandleUnassign}>
            <input name="id" type="hidden" value={id}></input>
            <input name="name" type="hidden" value={name}></input>
            <input name="description" type="hidden" value={description}></input>
            <button
              type="submit"
              className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
            >
              Unassign Task
            </button>
          </form>
          <form method="post" onSubmit={HandleComplete}>
            <input name="id" type="hidden" value={id}></input>
            <input name="name" type="hidden" value={name}></input>
            <input name="description" type="hidden" value={description}></input>
            <button
              type="submit"
              className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
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
