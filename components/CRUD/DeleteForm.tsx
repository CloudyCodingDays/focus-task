"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Task } from "@/types/supabase";
import Link from "next/link";

interface DeleteFormProps {
  data: string;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const item = JSON.parse(data);

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "delete");
    setOpen(false);
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
