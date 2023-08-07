"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { useEffect, useState } from "react";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";

interface EditFormProps {
  id: string;
}

const EditForm: React.FC<EditFormProps> = ({ id }) => {
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

  useEffect(() => {
    const getTaskDetails = async () => {
      setTaskDetail(await GetTaskDetails(id));
    };
    getTaskDetails().catch(console.error);
  }, [id]);

  return (
    <div>
      <div className="my-8">
        <Link href="/manage/list" className="bg-green-400 rounded-lg py-4 px-4">
          Back to Manage Tasks
        </Link>
      </div>
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
