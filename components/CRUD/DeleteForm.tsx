"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { useEffect, useState } from "react";
import Link from "next/link";
import useTaskListContext from "@/hooks/useTaskListContext";
import { Task } from "@/types/supabase";
import GetTaskDetails from "@/app/manage/list/components/GetTaskDetails";

interface DeleteFormProps {
  id: string;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ id }) => {
  const router = useRouter();
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "delete");
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
            <input name="id" type="hidden" value={id}></input>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
            >
              Are you sure?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteForm;
