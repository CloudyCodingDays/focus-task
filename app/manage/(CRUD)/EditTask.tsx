"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUDForm";
import { useState } from "react";
import { Task } from "@/types/supabase";
import Link from "next/link";

interface EditTaskProps {
  data: string;
}

const EditTask: React.FC<EditTaskProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const item = JSON.parse(data);

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "edit");
    setOpen(false);
    router.refresh();
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

export default EditTask;
