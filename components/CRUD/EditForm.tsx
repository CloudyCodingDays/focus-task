"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { useState } from "react";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";

interface EditFormProps {
  data: string;
}

const EditForm: React.FC<EditFormProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const item = JSON.parse(data);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "edit");
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    router.push("/manage/list");
  };

  return (
    <div>
      <div className="my-8">
        <Link href="/manage/list" className="bg-green-400 rounded-lg py-4 px-4">
          Back to Manage Tasks
        </Link>
      </div>
      <div>
        <form method="post" onSubmit={HandleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default EditForm;
