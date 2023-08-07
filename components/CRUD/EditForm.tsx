"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";

interface EditFormProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ id, onBack }) => {
  const router = useRouter();
  const [taskDetail, setTaskDetail] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "edit");
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    router.push("/manage/list");
  };

  const HandleBack = () => {
    onBack(false);
  };

  useEffect(() => {
    const getTaskDetails = async () => {
      setTaskDetail(await GetTaskDetails(id));
    };
    getTaskDetails().catch(console.error);
  }, [id]);

  return (
    <div>
      <button
        className="
            hover:bg-green-200
            hover:text-gray-500
            bg-white
            border-green-300 
            border-2 
            rounded-lg 
            ml-4 
            py-4 
            px-4
            mx-4"
        onClick={HandleBack}
      >
        Back
      </button>
      <div>
        <form method="post" onSubmit={HandleSubmit}>
          {taskDetail?.map((item) => (
            <div key={item.id}>
              <div>
                <input name="id" type="hidden" value={item.id}></input>
              </div>
              <div>Name</div>
              <input
                name="name"
                className="border-2"
                placeholder={item.name}
              ></input>
              <div>Description</div>
              <input
                name="description"
                className="border-2"
                placeholder={item.description}
              ></input>
              <div>
                <button
                  type="submit"
                  className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
                >
                  Save Changes
                </button>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default EditForm;
