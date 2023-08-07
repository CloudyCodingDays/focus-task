"use client";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";

import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import TaskItemDetails from "../TaskItemDetails";
import { Dispatch, SetStateAction } from "react";
interface DeleteFormProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ id, onBack }) => {
  const router = useRouter();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "delete");
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    router.push("/manage/list");
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div className="grid grid-cols-2">
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
      </div>
      <div className="text-right">
        <form method="post" onSubmit={HandleSubmit}>
          <div>
            <input name="id" type="hidden" value={id}></input>
          </div>
          <button
            type="submit"
            className="
              hover:bg-red-600
              hover:text-white
              bg-red-400
              border-2 
              rounded-lg 
              py-4 
              px-4"
          >
            Delete Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteForm;
