"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Dispatch, SetStateAction } from "react";

interface AddFormProps {
  onBack: Dispatch<SetStateAction<boolean>>;
}

const AddForm: React.FC<AddFormProps> = ({ onBack }) => {
  const router = useRouter();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "add");

    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    HandleBack();
    router.refresh();
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div>
      <form method="post" onSubmit={HandleSubmit}>
        <div>Name</div>
        <input name="name" className="border-2" required></input>
        <div>Description</div>
        <input name="description" className="border-2" required></input>
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
            type="button"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Add New Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
