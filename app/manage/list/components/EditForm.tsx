"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/app/manage/list/components/HandleSubmitCRUD";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import GetTaskDetails from "@/components/GetTaskDetails";
import { Task } from "@/types/Task";

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();
  const {
    id,
    description,
    name,
    is_recurring,
    created_at,
    due_date,
    priority,
    recurring_type,
    image_path,
  } = task;

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "edit");
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    HandleBack();
    router.refresh();
  };

  const HandleBack = () => {
    onBack(false);
  };

  return (
    <div>
      <div>
        <form method="post" onSubmit={HandleSubmit}>
          <div>
            <div>
              <input name="id" type="hidden" value={id}></input>
              <input
                name="old_created_at"
                type="hidden"
                value={created_at}
              ></input>
              <input
                name="old_description"
                type="hidden"
                value={description}
              ></input>
              <input name="old_name" type="hidden" value={name}></input>
              <input name="old_due_date" type="hidden" value={due_date}></input>
              <input
                name="old_image_path"
                type="hidden"
                value={image_path}
              ></input>
              <input
                name="old_is_recurring"
                type="hidden"
                defaultChecked={is_recurring}
              ></input>
              <input
                name="old_recurring_type"
                type="hidden"
                value={recurring_type}
              ></input>
              <input name="old_priority" type="hidden" value={priority}></input>
            </div>

            <div className="py-4">
              Name
              <input
                name="name"
                className="border-2"
                placeholder={name}
              ></input>
            </div>

            <div className="pb-4">
              Description
              <input
                name="description"
                className="border-2"
                placeholder={description}
              ></input>
            </div>

            <div className="pb-4">
              is_recurring
              <input
                name="is_recurring"
                type="checkbox"
                defaultChecked={is_recurring}
              ></input>
            </div>

            <div className="pb-4">
              Recurring Type
              <input
                name="recurring_type"
                className="border-2"
                placeholder={recurring_type}
              ></input>
            </div>

            <div className="pb-4">
              Priority
              <input
                name="priority"
                className="border-2"
                placeholder={priority}
              ></input>
            </div>

            <div className="pb-4">
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
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
