"use client";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";

import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import TaskItemDetails from "../../../../components/TaskItemDetails";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";
interface DeleteFormProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ id, onBack }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await FormSubmit(e, "delete");

    queryClient.invalidateQueries({ queryKey: ["Tasks"] });
    queryClient.invalidateQueries({ queryKey: ["TaskDetails"] });

    HandleBack();
    router.refresh();
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div>
      <div className="text-center mt-4">
        <form method="post" onSubmit={HandleSubmit}>
          <div>
            <input name="id" type="hidden" value={id}></input>
          </div>
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
