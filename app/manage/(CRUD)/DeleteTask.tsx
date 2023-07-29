"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUDForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Task } from "@/types/supabase";
import Link from "next/link";

interface DeleteTaskProps {
  data: string;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const item = JSON.parse(data);

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "delete");
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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4">
              Delete Task
            </button>
          </DialogTrigger>
          <DialogContent className="h-full flex flex-col items-center">
            <form method="post" onSubmit={HandleSubmit}>
              <div>
                <button
                  type="submit"
                  className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
                >
                  Are you sure?
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DeleteTask;
